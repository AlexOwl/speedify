import { SpeedifyCLI } from "../cli";
import { AbstractAction } from "./abstract-action";
import { Action } from "./action";
import { Adapter, AdapterPriority, Settings } from "./interfaces";

export class AdapterAction extends AbstractAction {
    dataLimit = new AdapterDataLimitAction(this.cli, this)

    constructor(cli: SpeedifyCLI, parent: Action) {
        super(cli, "adapter", parent)
    }

    async encryption(adapter: string, enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "encryption", adapter, enabled ? "on" : "off")
        return json
    }

    // speed in bits per second|0 to stop
    async overlimitRatelimit(adapter: string, speed: number) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "overlimitratelimit", adapter, speed.toFixed())
        return json 
    }

    async overlimitRatelimitStop(adapter: string) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "overlimitratelimit", adapter, "0")
        return json 
    }

    async priority(adapter: string, priority: AdapterPriority) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "priority", adapter, priority)
        return json 
    }

    // speed in bits per second|unlimited
    async rateLimit(adapter: string, speed: number) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "ratelimit", adapter, speed.toFixed())
        return json 
    }

    async rateLimitDisable(adapter: string) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "ratelimit", adapter, "unlimited")
        return json 
    }

    async resetUsage(adapter: string) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "resetusage", adapter)
        return json  
    }
}

export class AdapterDataLimitAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: AdapterAction) {
        super(cli, "datalimit", parent)
    }
    
    // data usage in bytes|unlimited
    async daily(adapter: string, dataUsage: number) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "daily", adapter, dataUsage.toFixed())
        return json 
    }

    async dailyDisable(adapter: string) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "daily", adapter, "unlimited")
        return json 
    }

    // additional bytes
    async dailyBoost(adapter: string, dataUsage: number) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "dailyboost", adapter, dataUsage.toFixed())
        return json 
    }

    // data usage in bytes|unlimited, day of the month to reset on|0 for last 30 days
    async monthly(adapter: string, dataUsage: number, day: number = 0) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "daily", adapter, dataUsage.toFixed(), day.toFixed())
        return json 
    }

    async monthlyDisable(adapter: string) {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "daily", adapter, "unlimited", "0")
        return json 
    }
}