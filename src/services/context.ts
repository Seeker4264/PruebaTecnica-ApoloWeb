import { createContext, Dispatch, SetStateAction } from "react";

/**
 * "User" type
 * 
 * Tipo para "usuario"
 */

export type User = {
  username: string;
  password: string;
};

/**
 * "User context" interface
 * 
 * Interfaz del "contexto de usuario"
 */

export interface IUserContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>
};

/**
 * Default value for the interface
 * 
 * Valores por defecto para la interfaz
 */

const defaultState = {
  user: {
    username: "",
    password: ""
  },
  setUser: (_user: User) => {}
} as IUserContext;

export const UserContext = createContext<IUserContext>(defaultState);