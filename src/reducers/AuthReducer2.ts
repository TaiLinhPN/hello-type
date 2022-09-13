// import { AuthActionTpye } from "./type";
// const { TOGGLE_AUTH } = AuthActionTpye

// export interface AuthState {
//   isAuthenticated: boolean;
//   uerName: string;
// }

// type AuthAction = {
//   type: AuthActionTpye;
//   payload: string;
// };


// export const authReducer = (state: AuthState, action: AuthAction) => {

//   switch (action.type) {
//     case TOGGLE_AUTH:
//       return {
//         ...state,
//         isAuthenticated: !state.isAuthenticated,
//         useName: action.payload,
//       };
//     default:
//       return state
//   }
  
// };


import { AuthActionTpye } from './type'

type AuthAction = {
	type: AuthActionTpye;
	payload: string
}

export interface AuthState {
	isAuthenticated: boolean
	username: string
}

const { TOGGLE_AUTH } = AuthActionTpye

export const authReducer = (state: AuthState, action: AuthAction) => {
	switch (action.type) {
		case TOGGLE_AUTH:
			return {
				...state,
				isAuthenticated: !state.isAuthenticated,
				username: action.payload
			}

		default:
			return state
	}
}

