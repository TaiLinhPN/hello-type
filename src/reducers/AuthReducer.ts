import { AuthActionType } from "./type"

export interface AuthState {
    isAuthenticated: boolean,
    useName: string

}

type AuthAction = {
    type: AuthActionType,
    payload: string
}

export const authReducer = (state: AuthState, action:AuthAction) =>{
    return state
}