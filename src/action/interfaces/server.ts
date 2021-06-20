export interface Server {
    tag: string,
    country: string,
    city: string,
    num: number,
    isPrivate: boolean
}

export interface CurrentServer extends Server {
    friendlyName: string,
    torrentAllowed: boolean,
    publicIP: string[]
}