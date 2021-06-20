import { SpeedifyCLI } from "../cli";
import { AbstractAction } from "./abstract-action";
import { Action } from "./action";
import { Protocol, Streaming } from "./interfaces";

export class StreamingAction extends AbstractAction {
    domains = new StreamingDomainsAction(this.cli, this)
    ipv4 = new StreamingIPAction(this.cli, "ipv4", this)
    ipv6 = new StreamingIPAction(this.cli, "ipv6", this)
    ports = new StreamingPortsAction(this.cli, this)

    constructor(cli: SpeedifyCLI, parent: Action) {
        super(cli, "streaming", parent)
    }
}

export class StreamingDomainsAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: StreamingAction) {
        super(cli, "domains", parent)
    }

    async add(domain: string) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "add", domain)
        return json
    }

    async remove(domain: string) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "rem", domain)
        return json
    }

    async set(domain: string) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "set", domain)
        return json
    }
}

export class StreamingIPAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, type: "ipv4" | "ipv6", parent: StreamingAction) {
        super(cli, type, parent)
    }

    async add(ip: string) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "add", ip)
        return json
    }

    async remove(ip: string) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "rem", ip)
        return json
    }

    async set(ip: string) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "set", ip)
        return json
    }
}

export class StreamingPortsAction extends AbstractAction {
     constructor(cli: SpeedifyCLI, parent: StreamingAction) {
        super(cli, "ports", parent)
    }

    async add(port: string, proto: Protocol) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "add", `${port}/${proto}`)
        return json
    }

    async remove(port: string, proto: Protocol) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "rem", `${port}/${proto}`)
        return json
    }

    async set(port: string, proto: Protocol) {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "set", `${port}/${proto}`)
        return json
    }
}