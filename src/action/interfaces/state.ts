export enum SpeedifyState {
    LoggedOut = "LOGGED_OUT",
    LoggingIn = "LOGGING_IN",
    LoggedIn = "LOGGED_IN",
    AutoConnecting = "AUTO_CONNECTING",
    Connecting = "CONNECTING",
    Disconnecting = "DISCONNECTING",
    Connected = "CONNECTED",
    OverLimit = "OVERLIMIT",
    Unknown = "UNKNOWN"
}

export interface State {
    state: SpeedifyState
}