import deanslistGen1 from './snapshots/deanslist-gen1.json' assert { type: 'json' }
import deanslistTokenHolders from './snapshots/deanslist-token-holders.json' assert { type: 'json' }
import devs from './snapshots/dev.json' assert { type: 'json' }
import dlFutards from './snapshots/dl-futards.json' assert { type: 'json' }
import dlVota from './snapshots/dl-vota.json' assert { type: 'json' }
import dlAthDao from './snapshots/dl-athensdao.json' assert { type: 'json' }
import dlIslandDao from './snapshots/dl-islanddao.json' assert { type: 'json' }

export type SnapshotType = 'nft' | 'token' | 'static'

export interface SnapshotWallet {
  address?: string;
  amount: number;
  allocation?: number;
}

export interface Snapshot {
  type: SnapshotType
  minimumAmount: number
  address: string
  name: string
  id: string
  description: string
  wallets?: SnapshotWallet[]
}

export const snapshotMap = new Map<string, SnapshotWallet[]>()
  .set('deanslist-gen1', deanslistGen1)
  .set('deanslist-token-holders', deanslistTokenHolders)
  .set('devs', devs)
  .set('dl-futards', dlFutards)
  .set('dl-vota', dlVota)
  .set('ath-dao', dlAthDao)
  .set('island-dao', dlIslandDao)

export const snapshots: Snapshot[] = [
  {
    type: 'nft',
    minimumAmount: 1,
    id: "deanslist-gen1",
    name: "Dean's List NFT Gen 1",
    description: "This is the list of Dean's List NFT Gen 1 holders.",
    address: "5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri",
  },
  {
    type: 'token',
    minimumAmount: 69000000000,
    id: "deanslist-token-holders",
    name: "Dean's List Token Holders",
    description: "This is the list of Dean's List Token Holders",
    address: "Ds52CDgqdWbTWsua1hgT3AuSSy4FNx2Ezge1br3jQ14a",
  },
  {
    type: 'static',
    minimumAmount: 1,
    id: "dl-ahthensdao",
    name: "AthensDAO Participants",
    description: "This is the list of AthensDAO participants",
    address: "",    
  },
  {
    type: 'static',
    minimumAmount: 1,
    id: "dl-islanddao",
    name: "IslandDAO Participants",
    description: "This is the list of IslandDAO participants",
    address: "",    
  },
  {
    type: 'static',
    minimumAmount: 1,
    id: "dl-futards",
    name: "Dean's List Futards",
    description: "This is the list of Dean's List Futards",
    address: "2K9ZpC3LVqRfR8Vveo92LhiofbDcF6PuDRJbaPp9V34m",
  },
  {
    type: 'static',
    minimumAmount: 1,
    id: "dl-vota",
    name: "Dean's List Vota",
    description: "This is the list of Dean's List Vota",
    address: "82vybRHyD6X6g4xMn8WZtQ3VxppQfGHTu9jF5Mnqwc1X",
  }
]
