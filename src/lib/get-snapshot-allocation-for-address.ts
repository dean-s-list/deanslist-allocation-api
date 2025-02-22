import { SnapshotWallet } from '../snapshots'

export function getSnapshotAllocationForAddress({
  address,
  minimumAmount,
  wallets,
}: {
  address: string
  minimumAmount: number
  wallets: SnapshotWallet[]
}): SnapshotWallet | undefined {
  // If there are no wallets, return undefined
  if (!wallets || !wallets.length) {
    return undefined
  }

  // Find the wallet for this address
  const found = wallets.find((wallet) => wallet.address === address)

  // If the wallet is not found, return undefined
  if (!found) {
    return undefined
  }

  // We found the wallet, let's create the allocation object
  const allocation: SnapshotWallet = {
    address,
    amount: 0,
    allocation: 0,
  }

  // check if the amount is greater than the minimum to get the allocation
  if (found.amount >= minimumAmount) {
    found.allocation = 1
    allocation.amount = found.amount
    allocation.allocation = found.allocation
  }

  return allocation
}
