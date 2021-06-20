export enum AdapterPriority {
    Always = "always",
    Secondary = "secondary" ,
    Backup = "backup",
    Never = "never"
}

export enum AdapterState {
    Connected = "connected",
    Disconnected = "disconnected"
}

export interface Adapter {
    adapterID: string,
    description: string,
    name: string,
    state: AdapterState,
    type: "Wi-Fi" | string,
    priority: AdapterPriority,
    connectedNetworkName: string,
    connectedNetworkBSSID: string,
    rateLimit: number,
    dataUsage: {
        usageMonthly: number,
        usageDaily: number,
        usageMonthlyLimit: number,
        usageMonthlyResetDay: number,
        usageDailyLimit: number,
        usageDailyBoost: number,
        overlimitRatelimit: number
    }
}