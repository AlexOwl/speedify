export interface SpeedTest {
    time: number,
    isError: boolean,
    country: string,
    city: string,
    downloadSpeed: number,
    uploadSpeed: number
}