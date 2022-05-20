type TAction = {
    type: string
    payload: any
}

export type TStore = {
    (state, action: TAction): any
}