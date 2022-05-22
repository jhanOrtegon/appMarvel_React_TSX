import { TStore } from "../types";
import { EAuth } from './enum'

export const storeLogin: TStore = (state = {}, action) => {
    switch (action.type) {
        case EAuth.login:
            return {
                ...action.payload,
                logged: true
            }
        case EAuth.logout:
            return {
                logged: false
            }

        default:
            return state
    }

}