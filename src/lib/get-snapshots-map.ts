import { Snapshot } from '../snapshots'

import { getSnapshotAllocationForAddresses } from './get-snapshot-allocation-for-addresses'

export async function getSnapshotsMap({
  addresses,
  snapshots,
}: {
  snapshots: Snapshot[]
  addresses: string[]
}): Promise<Snapshot[]> {
  const result: Snapshot[] = []

  for (const snapshot of snapshots) {
    result.push({
      ...snapshot,
      allocations: await getSnapshotAllocationForAddresses({ snapshot, addresses }),
    })
  }

  return result
}
