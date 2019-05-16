import React from 'react'
import { Auth } from '../Auth'

export interface AuthContextType {
  auth: Auth | null
  login: () => void
  logout: () => void
}

/**
 * Default state for AuthContextProvider
 * @type {{auth: undefined, login: (function(): boolean), logout: (function(): boolean)}}
 */
const AuthContextDefaultState = {
  auth: null,
  login: () => {},
  logout: () => {},
}

const AuthContext = React.createContext<AuthContextType>(
  AuthContextDefaultState,
)
const { Provider, Consumer } = AuthContext

// todo: AuthContext is exported to support scala.js, see if only exporting Consumer works
export { AuthContext, Provider, Consumer, AuthContextDefaultState }
