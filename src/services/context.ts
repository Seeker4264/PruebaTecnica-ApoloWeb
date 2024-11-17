import { createContext, Dispatch, SetStateAction } from "react";

export type User = {
  username: string;
  password: string;
};

export interface IUserContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>
};

const defaultState = {
  user: {
    username: "",
    password: ""
  },
  setUser: (_user: User) => {}
} as IUserContext;

export const UserContext = createContext<IUserContext>(defaultState);