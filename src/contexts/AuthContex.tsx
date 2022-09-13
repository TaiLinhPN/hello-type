import {ReactNode,createContext, useReducer}  from 'react'
import { authReducer } from '../reducers/AuthReducer'

interface AuthContexProps {
    children: ReactNode
}

   

const authDefaultValue = {
    isAuthenticated: false,
    useName:''
}

export const AuthContext = createContext({
    authInfo: authDefaultValue,
    toggleAuth: () => {}
})

const AuthContexProvider = ({children}:AuthContexProps) => {

  const [authInfo, dispatch] = useReducer(authReducer, authDefaultValue)
  const toggleAuth = (userName: string) => {

  }
  // return (
  //   <AuthContext.Provider value={authDefaultValue}>{children}</AuthContext.Provider>
  // )
}

export default AuthContexProvider