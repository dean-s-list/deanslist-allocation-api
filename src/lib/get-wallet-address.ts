import { resolveDomain } from './resolve-domain'
import { Connection } from '@solana/web3.js'
import { isValidSolanaPublicKey } from './is-valid-solana-public-key'

export async function getWalletAddress(connection: Connection, value: string) {
  if (isValidSolanaPublicKey(value)) {
    return value
  }
  if (!value.includes('.')) {
    return false
  }
  try {
    return await resolveDomain(connection, value)
  } catch (error) {
    console.error(error)
    return false
  }
}
