import fs from "fs"
import { FindInstallLocationError, PlatformNotSupportedError, APIError } from "./exceptions"
import { execFile } from "./helpers/child-process"

export class SpeedifyCLI {
    private path: string
  
    constructor(path?: string) {
        this.path = path || SpeedifyCLI.getPath()
    }

    private static getPath() {
        const defaultPath = SpeedifyCLI.getDefaultPath()
    
        try {
            fs.accessSync(defaultPath, fs.constants.R_OK)
        } catch(e) {
            throw new FindInstallLocationError()
        }
    
        return defaultPath
    }

    private static getDefaultPath() {
        const { platform } = process
    
        switch(platform) {
            case "darwin": 
                return "/Applications/Speedify.app/Contents/Resources/speedify_cli"
            case "linux":
                return ""
            case "win32": 
                return ""
            default:
                throw new PlatformNotSupportedError(platform)
        }
    }

    setPath(path: string) {
        this.path = path
    }

    async run(...args: string[]) {
        const { stdout, stderr } = await execFile(this.path, args, {
            //cwd: "/Applications/Speedify.app/Contents/Resources/",
            timeout: 10000,
            windowsHide: true
        })
        
        const json = JSON.parse(stderr || stdout || "{}")

        if(stderr) throw APIError.fromStdErr(json)
        
        return json
    }
}