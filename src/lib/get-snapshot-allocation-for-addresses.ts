import { Snapshot, SnapshotWallet } from '../snapshots'
import { getSnapshotAllocationForAddress } from './get-snapshot-allocation-for-address'
import { getSnapshot } from './get-snapshot'

export async function getSnapshotAllocationForAddresses({
  addresses,
  snapshot,
}: {
  snapshot: Snapshot
  addresses: string[]
}): Promise<SnapshotWallet[]> {
  // Get all the wallets for this snapshot
  const wallets = await getSnapshot(snapshot.id)

  return addresses
    .map((address) => getSnapshotAllocationForAddress({ address, minimumAmount: snapshot.minimumAmount, wallets }))
    .filter((alloc) => alloc !== undefined) as SnapshotWallet[]
}
