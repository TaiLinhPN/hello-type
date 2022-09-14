
import { AuthActionTpye } from "./type";

type AuthAction = {
  type: AuthActionTpye
  payload: string
};

export interface AuthState {
  isAuthenticated: boolean
  userName: string
}

const { TOGGLE_AUTH } = AuthActionTpye

export const authReducer = (state: AuthState, action: AuthAction) => {

  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        userName: action.payload,
      };
    default:
      return state
  }
  
};
