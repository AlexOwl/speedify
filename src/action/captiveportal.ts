import { SpeedifyCLI } from "../cli";
import { AbstractAction } from "./abstract-action";
import { Action } from "./action";

export class CaptivePortalAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: Action) {
        super(cli, "captiveportal", parent)
    }

    async check() {
        const json: string[] = await this.cli.run(...this.getPrefix(), "check")
        return json 
    }

    async login(enabled: boolean, adapter: string) {
        const json: { enabled: boolean, adapterID: string } = await this.cli.run(...this.getPrefix(), "login", enabled ? "on" : "off", adapter)
        return json
    }
}