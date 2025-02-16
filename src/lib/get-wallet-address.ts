import { walletNameToAddressAndProfilePicture } from "./solana-wallet-names";
import { Connection, PublicKey } from "@solana/web3.js";

function isValidSolanaPublicKey(value: string) {
  try {
    new PublicKey(value);
    return true;
  } catch {
    return false;
  }
}

export async function getWalletAddress(connection: Connection, value: string) {
  if (isValidSolanaPublicKey(value)) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return value;
  }
  if (value.includes(".")) {
    try {
      const result = await walletNameToAddressAndProfilePicture(
        connection,
        value
      );

      return result.walletAddress;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  console.warn("Invalid wallet address");
  return false;
}
