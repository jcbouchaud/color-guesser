import React, { createContext, Dispatch, useContext, useReducer } from "react";
import api from "../../services/api";

interface UserData {
  username: string;
  password: string;
  token: string;
}

const initialState: UserData = {
  username: "",
  password: "",

  token: ""
};

enum UserActionKind {
  SET_USER_INFOS = "SET_USER_INFOS",
}

interface UserAction {
  type: UserActionKind;
  payload: any;
}

const UserReducer = (state: UserData, action: UserAction) => {
  switch (action.type) {
    case UserActionKind.SET_USER_INFOS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

interface UserContextProps {
  state: UserData;
  handleLogin: (username: string, password: string) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({
  state: initialState,
  handleLogin: async () => {
  },
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const handleLogin = async (username: string, password: string) => {
    const res = await api.login(username, password)
    dispatch({ type: UserActionKind.SET_USER_INFOS, payload: res.data });
  };

  const value = { state, handleLogin };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};
