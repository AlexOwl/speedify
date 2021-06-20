import { Protocol } from ".";

export interface Streaming {  
    domains: string[],
    ipv4: string[],
    ipv6: string[],
    ports: {
        protocol: Protocol,
        port: number
    }
}

export interface StreamingBypass extends Streaming {  
    services: {
        title: string,
        enabled: number
    }[]
}