export class FindInstallLocationError extends Error {
    constructor() {
        super(`The cli location was not found`)
    }
}