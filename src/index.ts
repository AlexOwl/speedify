import { SpeedifyCLI } from "./cli"
import { Action } from "./action"

export default class Speedify {
  private cli: SpeedifyCLI
  action: Action

  constructor(cliPath?: string) {
    this.cli = new SpeedifyCLI(cliPath)
    this.action = new Action(this.cli)
  }

  setCliPath(path: string) {
    this.cli.setPath(path)
  }
  
}