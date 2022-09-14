// import { createContext, ReactNode, useReducer } from "react";
// import { authReducer, AuthState } from "../reducers/AuthReducer";
// import { AuthActionTpye } from "../reducers/type";

// const { TOGGLE_AUTH } = AuthActionTpye;

// interface AuthContextProps {
//   children: ReactNode;
// }

// interface AuthContextDefault {
//   authInfo: AuthState;
//   toggleAuth: (useName: string) => void;
// }
// const authDefault = {
//   isAuthenticated: false,
//   useName: '',
// }

// export const AuthContext = createContext<AuthContextDefault>({
//   authInfo: authDefault,
//   toggleAuth: () => {},
// });

// const AuthContextProvider = ({ children }: AuthContextProps) => {
//   const [authInfo, dispatch] = useReducer(authReducer, authDefault);

//   const toggleAuth = (username: string) =>
//     dispatch({ type: TOGGLE_AUTH, payload: username });

//   const authContextData = {
//     authInfo,
//     toggleAuth,
//   }

//   return (
//     <AuthContext.Provider value={authContextData}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;




import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthState } from "../reducers/AuthReducer";
import { AuthActionTpye } from "../reducers/type";

interface AuthContextProps {
  children: ReactNode;
}

const { TOGGLE_AUTH } = AuthActionTpye;

interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}

const authDefault: AuthState = {
  isAuthenticated: false,
  userName: "",
};

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefault,
  toggleAuth: () => null,
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  const toggleAuth = (username: string) => {
    console.log(username);
    dispatch({ type: TOGGLE_AUTH, payload: username });
  };

  const authContextData = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
