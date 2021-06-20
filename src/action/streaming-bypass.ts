import { SpeedifyCLI } from "../cli";
import { AbstractAction } from "./abstract-action";
import { Action } from "./action";
import { Protocol, StreamingBypass } from "./interfaces";

export class StreamingBypassAction extends AbstractAction {
    domains = new StreamingBypassDomainsAction(this.cli, this)
    ipv4 = new StreamingBypassIPAction(this.cli, "ipv4", this)
    ipv6 = new StreamingBypassIPAction(this.cli, "ipv6", this)
    ports = new StreamingBypassPortsAction(this.cli, this)

    constructor(cli: SpeedifyCLI, parent: Action) {
        super(cli, "streamingbypass", parent)
    }

    async service(service: string, enabled: boolean) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "service", service, enabled ? "on" : "off")
        return json
    }
}

export class StreamingBypassDomainsAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: StreamingBypassAction) {
        super(cli, "domains", parent)
    }

    async add(domain: string) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "add", domain)
        return json
    }

    async remove(domain: string) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "rem", domain)
        return json
    }

    async set(domain: string) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "set", domain)
        return json
    }
}

export class StreamingBypassIPAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, type: "ipv4" | "ipv6", parent: StreamingBypassAction) {
        super(cli, type, parent)
    }

    async add(ip: string) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "add", ip)
        return json
    }

    async remove(ip: string) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "rem", ip)
        return json
    }

    async set(ip: string) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "set", ip)
        return json
    }
}

export class StreamingBypassPortsAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: StreamingBypassAction) {
        super(cli, "ports", parent)
    }

    async add(port: string, proto: Protocol) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "add", `${port}/${proto}`)
        return json
    }

    async remove(port: string, proto: Protocol) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "rem", `${port}/${proto}`)
        return json
    }

    async set(port: string, proto: Protocol) {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "set", `${port}/${proto}`)
        return json
    }
}