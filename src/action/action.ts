import { SpeedifyCLI } from "../cli"
import { AbstractAction } from "./abstract-action"
import { AdapterAction } from "./adapter"
import { CaptivePortalAction } from "./captiveportal"
import { Connection, ConnectMethod, CurrentServer, Directory, Mode, Protocol, Settings, SpeedTest, State } from "./interfaces"
import { PrivacyAction } from "./privacy"
import { ShowAction } from "./show"
import { StreamingAction } from "./streaming"
import { StreamingBypassAction } from "./streaming-bypass"

export class Action extends AbstractAction {
    adapter = new AdapterAction(this.cli, this)
    captivePortal = new CaptivePortalAction(this.cli, this)
    privacy = new PrivacyAction(this.cli, this)
    show = new ShowAction(this.cli, this)
    streaming = new StreamingAction(this.cli, this)
    streamingBypass = new StreamingBypassAction(this.cli, this)

    constructor(cli: SpeedifyCLI) {
        super(cli)
    }

    async headerCompression(enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "headercompression", enabled ? "on" : "off")
        return json 
    }
    
    async connect(method: Connection | "last") {
        const json: CurrentServer = await this.cli.run(...this.getPrefix(), "connect", method)
        return json 
    }
    
    async connectLocation(country: string, city?: string, number?: number) {
        const json: CurrentServer = await this.cli.run(...this.getPrefix(), "connect", country, ...(city ? [city] : []), ...(city && number ? [number.toFixed()] : []))
        return json 
    }
    
    async connectMethod(method: Connection) {
        const json: ConnectMethod = await this.cli.run(...this.getPrefix(), "connectmethod", method)
        return json 
    }
    
    async connectMethodLocation(country: string, city?: string, number?: number) {
        const json: ConnectMethod = await this.cli.run(...this.getPrefix(), "connectmethod", country, ...(city ? [city] : []), ...(city && number ? [number.toFixed()] : []))
        return json 
    }
    
    /* Directory */
    async directory(directory?: string) {
        const json: Directory = await this.cli.run(...this.getPrefix(), "directory", ...(directory ? [directory] : []))
        return json 
    }

    async esni(enabled: boolean) {
        const json: Directory = await this.cli.run(...this.getPrefix(), "esni", enabled ? "on" : "off")
        return json 
    }

    async gateway(uri: string) {
        const json: Directory = await this.cli.run(...this.getPrefix(), "gateway", uri)
        return json 
    }
    /* */
    
    async dns(ip: string) {
        const json = await this.cli.run(...this.getPrefix(), "dns", ip)
        return json 
    }
    
    async encryption(enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "encryption", enabled ? "on" : "off")
        return json 
    }

    

    async jumbo(enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "jumbo", enabled ? "on" : "off")
        return json 
    }
    
    /* State */
    async state() {
        const { state }: State = await this.cli.run(...this.getPrefix(), "state")
        return state 
    }

    async disconnect() {
        const { state } : State = await this.cli.run(...this.getPrefix(), "disconnect")
        return state 
    }

    async login(username: string, password?: string) { // why optional?
        const { state } : State = await this.cli.run(...this.getPrefix(), "login", username, ...(password ? [password] : []))
        return state
    }

    async loginAuto() {
        const { state } : State = await this.cli.run(...this.getPrefix(), "login", "auto")
        return state
    }

    async loginOauth(encryptedToken?: string) { // why optional?
        const { state } : State = await this.cli.run(...this.getPrefix(), "login", "oauth", ...(encryptedToken ? [encryptedToken] : []))
        return state
    }

    async logout() {
        const { state } : State = await this.cli.run(...this.getPrefix(), "logout")
        return state 
    }
    /* */

    async mode(method: Mode) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "mode", method)
        return json 
    }

    // speed in mbps
    async overflow(speed: number) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "overflow", speed.toFixed(1))
        return json 
    }

    async packetAggregation(enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "packetaggr", enabled ? "on" : "off")
        return json 
    }

    async transport(proto: Protocol) { // transportMode
        const json: Settings = await this.cli.run(...this.getPrefix(), "transport", proto)
        return json 
    }

    async ports(port: string, proto: Protocol) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "ports", `${port}/${proto}`)
        return json 
    }

    async portsClear() {
        const json: Settings = await this.cli.run(...this.getPrefix(), "ports")
        return json 
    }

    async routeDefault(enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "route", "default", enabled ? "on" : "off")
        return json 
    }

    async speedTest() {
        const json: SpeedTest = await this.cli.run(...this.getPrefix(), "speedtest")
        return json 
    }

    async startupConnect(enabled: boolean) {
        const json: Settings = await this.cli.run(...this.getPrefix(), "startupconnect", enabled ? "on" : "off")
        return json 
    }

    async version() {
        const json: {
            maj: number,
            min: number,
            bug: number,
            build: number
        } = await this.cli.run(...this.getPrefix(), "version")
        return json 
    }

    async daemonExit() {
        await this.cli.run(...this.getPrefix(), "daemon", "exit")
    }
}