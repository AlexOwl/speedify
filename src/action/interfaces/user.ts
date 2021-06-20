export interface User {
    email: string,
    isAutoAccount: boolean,
    isTeam: boolean,
    bytesUsed: number,
    bytesAvailable: number,
    minutesUsed: number,
    minutesAvailable: number,
    paymentType: "yearly" | "free" | string,
    dataPeriodEnd: string
}