export class PlatformNotSupportedError extends Error {
    platform: string

    constructor(platform: string) {
        super(`The platform ${platform} is not supported`)

        this.platform = platform
    }
}