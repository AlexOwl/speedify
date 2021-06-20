export enum Connection {
    Closest = "closest",
    Public = "public",
    Private = "private",
    P2P = "p2p"
}

export interface ConnectMethod {
    connectMethod: Connection,
    country: string,
    city: string,
    num: number
}