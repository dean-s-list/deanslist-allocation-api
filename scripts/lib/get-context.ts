import { Helius } from 'helius-sdk'
import 'dotenv/config'
import { existsSync, writeFileSync } from "node:fs";
import { Snapshot, SnapshotWallet } from "../../src/snapshots";

export async function getContext(snapshot: Snapshot) {
  const endpoint = process.env.HELIUS_ENDPOINT
  if (!endpoint) {
    throw new Error('HELIUS_ENDPOINT is not set')
  }

  const collectionOrMint = snapshot.address
  if (!collectionOrMint) {
    throw new Error('Collection or mint address is not set')
  }

  const snapshotFile = `${process.cwd()}/src/snapshots/${snapshot.id}.json`
  if (!existsSync(snapshotFile)) {
    // Create the file if it doesn't exist
    writeFileSync(snapshotFile, JSON.stringify([], null, 2))
    console.log(' => Created target file:', snapshotFile)
  }

  const helius = new Helius(endpoint.includes('=') ? endpoint.split('=')[1] : endpoint)
  return {
    collectionOrMint,
    helius,
    updateWallets: (wallets: SnapshotWallet[]) => {
      writeFileSync(snapshotFile, JSON.stringify(wallets, null, 2))
      console.log(' => Updated target file:', snapshotFile)
    }
  }
}