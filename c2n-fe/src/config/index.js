// boba token
export const STAKED_TOKEN_ADDRESS =
    process.env.NEXT_PUBLIC_STAKED_TOKEN_ADDRESS;

// bre token
export const EARNED_TOKEN_ADDRESS =
    process.env.NEXT_PUBLIC_EARNED_TOKEN_ADDRESS;

// staking address
export const stakingPoolAddresses = [
    {
        chainId: 11155111,
        stakingAddress: "0x98a02881c132ad26750c20929b96719BDcFDf039",
        depositTokenAddress: "0x98a02881c132ad26750c20929b96719BDcFDf039",
        earnedTokenAddress: "0x98a02881c132ad26750c20929b96719BDcFDf039",
    },
];

export const API_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const VALID_CHAIN_IDS = [
    // Boba Network
    288,
    // Boba Rinkeby test
    28,
    // bsc main network
    56,
    // bsc test network
    97,
];

export * from "./valid_chains";

// 0: bre pool 1: boba pool
export const STAKING_POOL_ID = 0;

export const APPROVE_STAKING_AMOUNT_ETHER = 1000000;

export const TELEGRAM_BOT_ID = process.env.NEXT_PUBLIC_TG_BOT_ID;

export const BASE_URL = "https://pancakeswap.finance";
export const BASE_BSC_SCAN_URL = "https://bscscan.com";

export const tokenAbi = [
    // Read-Only Functions
    "function deposited(uint256 pid, address to) view returns (uint256)",
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function userInfo(uint pid, address spender) view returns (uint256)",
    "function poolInfo(uint pid) view returns (uint256)",

    // Authenticated Functions
    "function deposit(uint256 pid, uint256 amount) returns (bool)",
    "function withdraw(uint256 pid, uint256 amount) returns (bool)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function transfer(address to, uint amount) returns (bool)",

    // Events
];

export const tokenImage =
    "http://bobabrewery.oss-ap-southeast-1.aliyuncs.com/brewery_logo.jpg";

export const AIRDROP_TOKEN = "0xf4ea4684e4F22C0aA759e4B20D9a5E560BD08f97"
export const AIRDROP_CONTRACT = "0x94cb038CC512AFaCd4b1c93787bDE133077e5d67"
