import { SpeedifyCLI } from "../cli";
import { AbstractAction } from "./abstract-action";
import { Action } from "./action";
import { Privacy } from "./interfaces";

export class PrivacyAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: Action) {
        super(cli, "privacy", parent)
    }

    async crashReports(enabled: boolean) {
        const json: Privacy = await this.cli.run(...this.getPrefix(), "crashreports", enabled ? "on" : "off")
        return json
    }

    async dnsLeak(enabled: boolean) {
        const json: Privacy = await this.cli.run(...this.getPrefix(), "dnsleak", enabled ? "on" : "off")
        return json
    } 
    
    async killSwitch(enabled: boolean) {
        const json: Privacy = await this.cli.run(...this.getPrefix(), "killswitch", enabled ? "on" : "off")
        return json
    }

    async ipLeak(enabled: boolean) {
        const json: Privacy = await this.cli.run(...this.getPrefix(), "ipleak", enabled ? "on" : "off")
        return json
    }
}