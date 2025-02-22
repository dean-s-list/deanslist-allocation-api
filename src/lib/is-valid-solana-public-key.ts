import { PublicKey } from '@solana/web3.js'

export function isValidSolanaPublicKey(value: string) {
  try {
    new PublicKey(value)
    return true
  } catch {
    return false
  }
}
