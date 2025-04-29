import deanslistGen1 from './snapshots/deanslist-gen1.json' assert {type: 'json'}
import islanddaoPerks from './snapshots/islanddao-perks.json' assert {type: 'json'}
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
import superteamBalkans from './snapshots/superteam-balkans.json' assert {type: 'json'}
import superteamCanada from './snapshots/superteam-canada.json' assert {type: 'json'}
import superteamGermany from './snapshots/superteam-germany.json' assert {type: 'json'}
import superteamIndia from './snapshots/superteam-india.json' assert {type: 'json'}
import superteamJapan from './snapshots/superteam-japan.json' assert {type: 'json'}
import superteamPoland from './snapshots/superteam-poland.json' assert {type: 'json'}
import superteamUK from './snapshots/superteam-uk.json' assert {type: 'json'}
import streamflowCommunity from './snapshots/streamflow-community.json' assert {type: 'json'}
import triadCommunity from './snapshots/triad-community.json' assert {type: 'json'}

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
    image?: string
}

export const snapshotMap = new Map<string, SnapshotWallet[]>()
    .set('deanslist-gen1', deanslistGen1)
    .set('islanddao-perks', islanddaoPerks)
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
    .set('superteam-balkans', superteamBalkans)
    .set('superteam-canada', superteamCanada)
    .set('superteam-germany', superteamGermany)
    .set('superteam-india', superteamIndia)
    .set('superteam-japan', superteamJapan)
    .set('superteam-poland', superteamPoland)
    .set('superteam-uk', superteamUK)
    .set('streamflow-community', streamflowCommunity)
    .set('triad-community', triadCommunity)

export const snapshots: Snapshot[] = [
    {
        type: 'nft',
        minimumAmount: 1,
        id: "deanslist-gen1",
        name: "IslandDAO NFT Gen 1",
        description: "Own a IslandDAO (formerly known as Dean's List) NFT Gen 1.",
        address: "5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri",
        image: "https://pbs.twimg.com/profile_images/1828831320140632078/tSQjzteO_400x400.jpg",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "islanddao-perks",
        name: "IslandDAO PERKS NFT",
        description: "Own a IslandDAO PERKS NFT.",
        address: "5XSXoWkcmynUSiwoi7XByRDiV9eomTgZQywgWrpYzKZ8",
        image: "https://uploader.irys.xyz/8GYvKSGCV5NXNViixqLTyb2Y8cQqSTqGoPEQU56uifFy",
    },
    {
        type: 'token',
        minimumAmount: 69000000000,
        id: "deanslist-token-holders",
        name: "$ISLAND Token Holders",
        description: "Own 69,000 $ISLAND (formerly known as $DEAN) tokens or more.",
        address: "Ds52CDgqdWbTWsua1hgT3AuSSy4FNx2Ezge1br3jQ14a",
        image: "https://pbs.twimg.com/profile_images/1828831320140632078/tSQjzteO_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-athensdao",
        name: "AthensDAO Participants",
        description: "Attended any AthensDAO.",
        address: "",
        image: "https://pbs.twimg.com/profile_images/1716506328254873600/NjpXZWrs_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-islanddao",
        name: "IslandDAO Participants",
        description: "Attended any IslandDAO.",
        address: "",
        image: "https://pbs.twimg.com/profile_images/1828831320140632078/tSQjzteO_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-futards",
        name: "Futard",
        description: "Traded on at least one Futarchy proposal.",
        address: "2K9ZpC3LVqRfR8Vveo92LhiofbDcF6PuDRJbaPp9V34m",
        image: "https://pbs.twimg.com/profile_images/1717367001776099328/MbO6f8Su_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "dl-vota",
        name: "Vota",
        description: "Used Vota governance.",
        address: "82vybRHyD6X6g4xMn8WZtQ3VxppQfGHTu9jF5Mnqwc1X",
        image: "https://pbs.twimg.com/profile_images/1803054853331009537/KFzEaIe8_400x400.png",
    },
    {
        type: 'domain',
        minimumAmount: 1,
        id: "dl-dot-ser",
        name: ".ser Domain Holder",
        description: "Own at least one .ser domain.",
        address: "4U6kwibVcLwtXGkh2k6DYhvkYrTRGxF1e4tVv4SCgN6e",
        image: "https://pbs.twimg.com/profile_images/1859723004705398785/LoFnPgJa_400x400.jpg",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "solana-saga",
        name: "Solana Saga Owner",
        description: "Own a SAGA Genesis NFT.",
        address: "46pcSL5gmjBrPqGKFaLbbCmR6iVuLJbnQy13hAe7s6CC",
        image: "https://pbs.twimg.com/profile_images/1890559511011692544/xy69-3gJ_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "solana-seeker",
        name: "Solana Seeker Pre-order",
        description: "Pre-ordered a Solana Seeker phone.",
        address: "2DMMamkkxQ6zDMBtkFp8KH7FoWzBMBA1CGTYwom4QH6Z",
        image: "https://pbs.twimg.com/profile_images/1894058643017867264/pRxSCynQ_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "solflare-ambassadors",
        name: "Solflare",
        description: "Solfare Ambassadors.",
        address: "",
        image: "https://pbs.twimg.com/profile_images/1902360413561565184/EqQUAbuD_400x400.jpg",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "smb-gen2",
        name: "SMB Gen2",
        description: "Own a Gen2 Monke.",
        address: "SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W",
        image: "https://pbs.twimg.com/profile_images/1520205713221382144/TM27IHMP_400x400.jpg",
    },
    {
        type: 'nft',
        minimumAmount: 1,
        id: "smb-gen3",
        name: "SMB Gen3",
        description: "Own a Gen3 Monke.",
        address: "8Rt3Ayqth4DAiPnW9MDFi63TiQJHmohfTWLMQFHi4KZH",
        image: "https://pbs.twimg.com/profile_images/1520205713221382144/TM27IHMP_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "greed-academy",
        name: "GREED Academy",
        description: "Season 1 Graduates.",
        address: "",
        image: "https://pbs.twimg.com/profile_images/1882485649493643264/n-Y_Nn3H_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "cabana-exchange",
        name: "Cabana Exchange",
        description: "Cabana Exchange Community Members.",
        address: "",
        image: "https://pbs.twimg.com/profile_images/1896755183964807168/PCiNYtO4_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-balkans",
        name: "Superteam Balkans",
        description: "Member of Superteam Balkans.",
        address: "2oboxGFg9m3tBsvsAg4jLgWo1TRHMqPi7XPvBi1pAFjx",
        image: "https://pbs.twimg.com/profile_images/1900198476664770560/9Nzfdb93_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-canada",
        name: "Superteam Canada",
        description: "Member of Superteam Canada.",
        address: "HbYWz8Tp1PZT2udiYUwhjdG2YUVGSapYT1BHgjA5wWuM",
        image: "https://pbs.twimg.com/profile_images/1859396240280375296/1THFvBWY_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-germany",
        name: "Superteam Germany",
        description: "Member of Superteam Germany.",
        address: "UeXfwweGMBV8JkTQ7pFF6shPR9EiKEg8VnTNF4qKjhh",
        image: "https://pbs.twimg.com/profile_images/1818012057859407872/lHJEv03V_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-india",
        name: "Superteam India",
        description: "Member of Superteam India.",
        address: "E4ToMjm8YtRyfPUhZ7hxRMxe4J8FnSr9CcprytZBYFua",
        image: "https://pbs.twimg.com/profile_images/1623575742411051008/oFqnid5X_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-japan",
        name: "Superteam Japan",
        description: "Member of Superteam Japan.",
        address: "EcseidwKLqvXDbkjFs9uNBzBaq5vkJ4NJTjc3nuaVViT",
        image: "https://pbs.twimg.com/profile_images/1788400878455783424/0dBONvWy_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-poland",
        name: "Superteam Poland",
        description: "Member of Superteam Poland.",
        address: "GxAsSQswCsUhw75Fq4C7LVcJrQ1cY2r2Y5ZR1R97W3oa",
        image: "https://pbs.twimg.com/profile_images/1897046241441116160/1ltFGahp_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "superteam-uk",
        name: "Superteam UK",
        description: "Member of Superteam UK.",
        address: "6cRtkJVNQkE5p74PSohPhJQJxvooeHoCrmpDH9Q9q7qm",
        image: "https://pbs.twimg.com/profile_images/1694127468670566400/CApNBoKT_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "streamflow-community",
        name: "Streamflow",
        description: "Streamflow Community Member.",
        address: "",
        image: "https://pbs.twimg.com/profile_images/1808796187258187776/3ly8jWci_400x400.jpg",
    },
    {
        type: 'static',
        minimumAmount: 1,
        id: "triad-community",
        name: "Triad",
        description: "Triad Community Member.",
        address: "69CLccefLRmvDSAJP7Er632dvn878qkpdcnvq5ZUspSm",
        image: "https://pbs.twimg.com/profile_images/1885150448882950144/RUraa98O_400x400.jpg",
    }
]
