import { SpeedifyCLI } from "../cli";
import { AbstractAction } from "./abstract-action";
import { Action } from "./action";
import { Adapter, ConnectMethod, CurrentServer, Directory, Privacy, Server, Settings, SpeedTest, Streaming, StreamingBypass, User } from "./interfaces";

export class ShowAction extends AbstractAction {
    constructor(cli: SpeedifyCLI, parent: Action) {
        super(cli, "show", parent)
    }

    async servers() {
        const json: {
            public: Server[],
            private: Server[]
        } = await this.cli.run(...this.getPrefix(), "servers")
        return json
    }

    async settings() {
        const json: Settings = await this.cli.run(...this.getPrefix(), "settings")
        return json
    }

    async privacy() {
        const json: Privacy = await this.cli.run(...this.getPrefix(), "privacy")
        return json
    }

    async adapters() {
        const json: Adapter[] = await this.cli.run(...this.getPrefix(), "adapters")
        return json
    }

    async currentServer() {
        const json: CurrentServer = await this.cli.run(...this.getPrefix(), "currentserver")
        return json
    }

    async user() {
        const json: User = await this.cli.run(...this.getPrefix(), "user")
        return json
    }

    async directory() {
        const json: Directory = await this.cli.run(...this.getPrefix(), "directory")
        return json
    }

    async connectMethod() {
        const json: ConnectMethod = await this.cli.run(...this.getPrefix(), "connectmethod")
        return json
    }

    async streamingBypass() {
        const json: StreamingBypass = await this.cli.run(...this.getPrefix(), "streamingbypass")
        return json
    }

    async disconnect() {
        const json: { disconnectReason: string } = await this.cli.run(...this.getPrefix(), "disconnect")
        return json
    }

    async streaming() {
        const json: Streaming = await this.cli.run(...this.getPrefix(), "streaming")
        return json
    }

    async speedTest() {
        const json: SpeedTest[] = await this.cli.run(...this.getPrefix(), "speedtest")
        return json
    }
}