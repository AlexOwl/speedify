import { SpeedifyCLI } from "../cli"

export class AbstractAction {
    protected cli: SpeedifyCLI
    protected commandName?: string
    protected parent?: AbstractAction

    protected constructor(cli: SpeedifyCLI, commandName?: string, parent?: AbstractAction) {
        this.cli = cli
        this.commandName = commandName
        this.parent = parent
    }

    protected getPrefix(): string[] {
        const prefixes = this.commandName ? [this.commandName] : []

        let parent = this.parent
        while(true) {
            if(!parent) break

            parent.commandName && prefixes.unshift(parent.commandName)

            parent = parent?.parent
        }
        
        return prefixes
    }
}