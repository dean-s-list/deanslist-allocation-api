import deanslistGen1 from './snapshots/deanslist-gen1.json' assert {type: 'json'}
import deanslistTokenHolders from './snapshots/deanslist-token-holders.json' assert {type: 'json'}
import devs from './snapshots/dev.json' assert {type: 'json'}
import dlFutards from './snapshots/dl-futards.json' assert {type: 'json'}
import dlVota from './snapshots/dl-vota.json' assert {type: 'json'}
import dlAthDao from './snapshots/dl-athensdao.json' assert {type: 'json'}
import dlIslandDao from './snapshots/dl-islanddao.json' assert {type: 'json'}
import dlDotSer from './snapshots/dl-dot-ser.json' assert {type: 'json'}
import solanaSaga from './snapshots/solana-saga.json' assert {type: 'json'}
import solanaSeeker from './snapshots/solana-seeker.json' assert {type: 'json'}

export type SnapshotType = 'nft' | 'token' | 'domain' | 'static'

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
    allocations?: SnapshotWallet[]
}

export const snapshotMap = new Map<string, SnapshotWallet[]>()
    .set('deanslist-gen1', deanslistGen1)
    .set('deanslist-token-holders', deanslistTokenHolders)
    .set('devs', devs)
    .set('dl-futards', dlFutards)
    .set('dl-vota', dlVota)
    .set('dl-athensdao', dlAthDao)
    .set('dl-islanddao', dlIslandDao)
    .set('dl-dot-ser', dlDotSer)
    .set('solana-saga', solanaSaga)
    .set('solana-seeker', solanaSeeker)

export const snapshots: Snapshot[] = [
    {
        type: 'nft',
        minimumAmount: 1,
        id: "deanslist-gen1",
        name: "Dean's List NFT Gen 1",
        description: "Own a Dean's List NFT Gen 1.",
        address: "5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri",
    },
    {
        type: 'token',
        minimumAmount: 69000000000,
        id: "deanslist-token-holders",
        name: "$ISLAND Token Holders",
        description: "Own 69,000 $ISLAND tokens or more.",
        address: "Ds52CDgqdWbTWsua1hgT3AuSSy4FNx2Ezge1br3jQ14a",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-athensdao",
        name: "AthensDAO Participants",
        description: "Attended AthensDAO",
        address: "",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-islanddao",
        name: "IslandDAO Participants",
        description: "Attended IslandDAO",
        address: "",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-futards",
        name: "Dean's List Futards",
        description: "Participated in Futarchy governance",
        address: "2K9ZpC3LVqRfR8Vveo92LhiofbDcF6PuDRJbaPp9V34m",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-vota",
        name: "Dean's List Vota",
        description: "Used Vota governance",
        address: "82vybRHyD6X6g4xMn8WZtQ3VxppQfGHTu9jF5Mnqwc1X",
    },
    {
        type: 'domain',
        minimumAmount: 1,
        id: "dl-dot-ser",
        name: ".ser Domain Holder",
        description: "Own one or more .ser domains",
        address: "4U6kwibVcLwtXGkh2k6DYhvkYrTRGxF1e4tVv4SCgN6e",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "solana-saga",
        name: "Solana Saga Owner",
        description: "Own a Solana Saga phone",
        address: "46pcSL5gmjBrPqGKFaLbbCmR6iVuLJbnQy13hAe7s6CC",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "solana-seeker",
        name: "Solana Seeker Pre-order",
        description: "Has pre-ordered a Solana Seeker phone",
        address: "2DMMamkkxQ6zDMBtkFp8KH7FoWzBMBA1CGTYwom4QH6Z",
    }
]
