/*
https://github.com/portalpayments/solana-wallet-names/blob/main/LICENSE.md
MIT License

Copyright (c) 2023 Portal Payments

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { PublicKey } from "@solana/web3.js";
import type { Connection } from "@solana/web3.js";

import * as http from "fetch-unfucked";
import { TldParser as ANSTLDParser, MainDomain as ANSMainDomain } from "@onsol/tldparser";

interface WalletName {
  walletName: string | null;
}

interface WalletAddress {
  walletAddress: string | null;
}

// https://www.npmjs.com/package/@onsol/tldparser
export const dotAnythingToWalletAddress = async (
  connection: Connection,
  ansDomainName: string
): Promise<WalletAddress> => {
  const parser = new ANSTLDParser(connection);
  console.log("Parser ", parser);
  const ownerPublicKey = await parser.getOwnerFromDomainTld(ansDomainName);
  console.log("Owner ", ownerPublicKey);
  return {
    walletAddress: ownerPublicKey?.toBase58() || null,
  };
};

// https://www.npmjs.com/package/@onsol/tldparser
// Docs for this suck, so check out
// https://github.com/onsol-labs/tld-parser/blob/main/tests/tld-parser.spec.ts#L78
// getMainDomain() is what we want
export const walletAddressToDotAnything = async (
  connection: Connection,
  wallet: PublicKey
): Promise<WalletName> => {
  const parser = new ANSTLDParser(connection);
  // Assume this is an ANS Main Domain - a main domain is the domain that a wallet address
  // with multiple names will resolve to.
  let mainDomain = {} as ANSMainDomain;
  try {
    mainDomain = await parser.getMainDomain(wallet);
  } catch (thrownObject) {
    const error = thrownObject as Error;
    if (error.message.includes("Unable to find MainDomain account")) {
      return {
        walletName: null,
      };
    }
  }
  if (!mainDomain?.domain) {
    return {
      walletName: null,
    };
  }
  // Yes the . is already included in the tld
  const domainString = `${mainDomain.domain}${mainDomain.tld}`;
  return {
    walletName: domainString,
  };
};

// See https://www.quicknode.com/guides/solana-development/accounts-and-data/how-to-query-solana-naming-service-domains-sol/#set-up-your-environment
export const dotSolToWalletAddress = async (
  dotSolDomain: string
): Promise<WalletAddress> => {
  try {
    const { body } = await http.get(
      `https://sns-sdk-proxy.bonfida.workers.dev/resolve/${dotSolDomain}`
    );

    let walletAddress = null;

    const result = body?.result;

    // Bonfida's API is garbage
    if (result !== "Domain not found") {
      walletAddress = result;
    }

    return {
      walletAddress,
    };
  } catch (thrownObject) {
    const error = thrownObject as Error;
    if (error.message === "Invalid name account provided") {
      return {
        walletAddress: null,
      };
    }
    throw error;
  }
};

// See https://www.quicknode.com/guides/solana-development/accounts-and-data/how-to-query-solana-naming-service-domains-sol/#reverse-lookup-find-all-domains-owned-by-a-wallet
export const walletAddressToDotSol = async (
  connection: Connection,
  wallet: PublicKey
): Promise<WalletName> => {
  try {
    const { body } = await http.get(
      // See https://github.com/Bonfida/sns-sdk#sdk-proxy
      // There's a 'favorite-domain' endpoint butmost SNS users haven't set up a
      // favorite domain, as the UI to do so is complex
      // `https://sns-sdk-proxy.bonfida.workers.dev/favorite-domain/${wallet.toBase58()}`
      `https://sns-sdk-proxy.bonfida.workers.dev/domains/${wallet.toBase58()}`
    );

    let walletName = null;

    const firstDomainNoSuffix = body?.result?.[0]?.domain;

    if (firstDomainNoSuffix) {
      walletName = `${firstDomainNoSuffix}.sol`;
    }
    return {
      walletName,
    };
  } catch (thrownObject) {
    const error = thrownObject as Error;
    if (error.message === "Invalid wallet account provided") {
      return {
        walletName: null,
      };
    }
    throw error;
  }
};

export const walletNameToAddressAndProfilePicture = async (
  connection: Connection,
  walletName: string,
  jwt: string | null = null
): Promise<WalletAddress> => {
  let WalletAddress: WalletAddress = {
    walletAddress: null,
  };

  // All domain name services have at least a period
  if (!walletName.includes(".")) {
    return WalletAddress;
  }

  // Requires people to buy a custom token
  // and is complex to set up, but was more popular
  if (walletName.endsWith(".sol")) {
    WalletAddress = await dotSolToWalletAddress(
      walletName
    );
  } 

  // ANS seems to be the nicest maintained and less land-grab naming service
  // It also has multiple TLDs, so we will fall back to it for all other domains.
  if (!WalletAddress.walletAddress) {
    console.log(walletName);
    WalletAddress = await dotAnythingToWalletAddress(
      connection,
      walletName
    );
  }
  return WalletAddress;
}


// Try all the major name services, but don't fallback to Solana PFP
export const walletAddressToNameAndProfilePicture = async (
  connection: Connection,
  wallet: PublicKey,
): Promise<WalletName> => {
  const dotAnything = await walletAddressToDotAnything(connection, wallet);
  // ANS domains don't have a profile picture, so use Solana PFP Standard
  if (dotAnything?.walletName) {
    return dotAnything;
  }
  const dotSol = await walletAddressToDotSol(connection, wallet);
  // Likewise .sol doesn't have a profile picture, so use Solana PFP Standard
  if (dotSol?.walletName) {
    return dotSol;
  }

  return {
    walletName: null,
  };
};