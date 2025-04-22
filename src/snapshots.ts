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
import solflareAmbassadors from './snapshots/solflare-ambassadors.json' assert {type: 'json'}
import smbGen2 from './snapshots/smb-gen2.json' assert {type: 'json'}
import smbGen3 from './snapshots/smb-gen3.json' assert {type: 'json'}
import greedAcademy from './snapshots/greed-academy.json' assert {type: 'json'}
import cabanaExchange from './snapshots/cabana-exchange.json' assert {type: 'json'}

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
    .set('solflare-ambassadors', solflareAmbassadors)
    .set('smb-gen2', smbGen2)
    .set('smb-gen3', smbGen3)
    .set('greed-academy', greedAcademy)
    .set('cabana-exchange', cabanaExchange)

export const snapshots: Snapshot[] = [
    {
        type: 'nft',
        minimumAmount: 1,
        id: "deanslist-gen1",
        name: "IslandDAO NFT Gen 1",
        description: "Own a IslandDAO (formerly known as Dean's List) NFT Gen 1.",
        address: "5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri",
    },
    {
        type: 'token',
        minimumAmount: 69000000000,
        id: "deanslist-token-holders",
        name: "$ISLAND Token Holders",
        description: "Own 69,000 $ISLAND (formerly known as $DEAN) tokens or more.",
        address: "Ds52CDgqdWbTWsua1hgT3AuSSy4FNx2Ezge1br3jQ14a",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-athensdao",
        name: "AthensDAO Participants",
        description: "Attended any AthensDAO.",
        address: "",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-islanddao",
        name: "IslandDAO Participants",
        description: "Attended any IslandDAO.",
        address: "",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-futards",
        name: "Futard",
        description: "Traded on at least one Futarchy proposal.",
        address: "2K9ZpC3LVqRfR8Vveo92LhiofbDcF6PuDRJbaPp9V34m",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-vota",
        name: "Vota",
        description: "Used Vota governance.",
        address: "82vybRHyD6X6g4xMn8WZtQ3VxppQfGHTu9jF5Mnqwc1X",
    },
    {
        type: 'domain',
        minimumAmount: 1,
        id: "dl-dot-ser",
        name: ".ser Domain Holder",
        description: "Own at least one .ser domain.",
        address: "4U6kwibVcLwtXGkh2k6DYhvkYrTRGxF1e4tVv4SCgN6e",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "solana-saga",
        name: "Solana Saga Owner",
        description: "Own a SAGA Genesis NFT.",
        address: "46pcSL5gmjBrPqGKFaLbbCmR6iVuLJbnQy13hAe7s6CC",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "solana-seeker",
        name: "Solana Seeker Pre-order",
        description: "Pre-ordered a Solana Seeker phone.",
        address: "2DMMamkkxQ6zDMBtkFp8KH7FoWzBMBA1CGTYwom4QH6Z",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "solflare-ambassadors",
        name: "Solflare",
        description: "Solfare Ambassadors.",
        address: "",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "smb-gen2",
        name: "SMB Gen2",
        description: "Own a Gen2 Monke.",
        address: "SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "smb-gen3",
        name: "SMB Gen3",
        description: "Own a Gen3 Monke.",
        address: "8Rt3Ayqth4DAiPnW9MDFi63TiQJHmohfTWLMQFHi4KZH",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "greed-academy",
        name: "GREED Academy",
        description: "Season 1 Graduates.",
        address: "",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "cabana-exchange",
        name: "Cabana Exchange",
        description: "Cabana Exchange Community Members.",
        address: "",
    }
]
