import cp from "child_process"

type StdResult = { stdout: string, stderr: string }

const callback = (
    resolve: (value: StdResult) => void, 
    reject: (reason: cp.ExecException | cp.ExecFileException) => void
) => (
    error: cp.ExecException | cp.ExecFileException | null, 
    stdout: string | Buffer, 
    stderr: string | Buffer
) =>
    error ? 
        reject(error) : 
        resolve({ stdout: stdout.toString(), stderr: stderr.toString() })

export async function exec(file: string, options?: cp.ExecOptions) {
    return new Promise<StdResult>((resolve, reject) => cp.exec(file, options, callback(resolve, reject)))
}

export async function execFile(file: string, args?: string[], options?: cp.ExecFileOptions) {
    return new Promise<StdResult>((resolve, reject) => cp.execFile(file, args, options, callback(resolve, reject)))
}