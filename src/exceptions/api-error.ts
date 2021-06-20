export class APIError extends Error {
    code: number
    type: string

    constructor(message: string, code: number, type: string) {
        super(message)

        this.code = code
        this.type = type
    }

    static fromStdErr({
        errorMessage,
        errorCode,
        errorType
    }: {
        errorMessage: string,
        errorCode: number,
        errorType: string
    }) {
        return new APIError(errorMessage, errorCode, errorType)
    }
}