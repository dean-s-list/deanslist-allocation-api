/*
Based on https://github.com/portalpayments/solana-wallet-names
MIT License

Copyright (c) 2023 Portal Payments

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import type { Connection } from '@solana/web3.js'
import { TldParser as ANSTLDParser } from '@onsol/tldparser'

// https://www.npmjs.com/package/@onsol/tldparser
export async function resolveAllDomains(connection: Connection, domain: string): Promise<string | null> {
  const parser = new ANSTLDParser(connection)
  const ownerPublicKey = await parser.getOwnerFromDomainTld(domain)

  return ownerPublicKey?.toBase58() || null
}

// See https://www.quicknode.com/guides/solana-development/accounts-and-data/how-to-query-solana-naming-service-domains-sol/#set-up-your-environment
export async function resolveSns(domain: string): Promise<string | null> {
  try {
    const res = await fetch(`https://sns-sdk-proxy.bonfida.workers.dev/resolve/${domain}`)
    const body: { result: string } = await res.json()

    return body?.result !== 'Domain not found' ? body.result : null
  } catch (thrownObject) {
    const error = thrownObject as Error
    if (error.message === 'Invalid name account provided') {
      return null
    }
    throw error
  }
}

export async function resolveDomain(connection: Connection, domain: string): Promise<string | null> {
  if (!domain.includes('.')) {
    return null
  }

  if (domain.endsWith('.sol')) {
    return await resolveSns(domain)
  }

  return await resolveAllDomains(connection, domain)
}
