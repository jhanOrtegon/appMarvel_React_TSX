export type TLoginContext = {
    stateAuth?: {
        user?: string
        password?: string
        logged?: boolean
    }
    dispatch?: (e: any) => void
}