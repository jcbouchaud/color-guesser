import React, { createContext, useContext, useReducer } from "react";
import { UserReducer } from "./reducer";
import { UserContextProps, UserActionKind, UserDataType } from "./types";
import api from "../../services/api";

const initialState: UserDataType = {
  id: "",
  username: "",
  password: "",
  token: {
    accessToken: "",
    tokenType: "",
  },
};

let UserContext: React.Context<UserContextProps>;

UserContext = createContext<UserContextProps>({
  userData: initialState,
  handleAuth: async () => {},
  fetchUser: async () => {},
  setToken: () => {},
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [userData, dispatch] = useReducer(UserReducer, initialState);

  const handleAuth = async (
    username: string,
    password: string,
    registered: boolean
  ) => {
    let user: UserDataType;

    if (registered) {
      user = await api.login(username, password);
    } else {
      user = await api.register(username, password);
    }
    dispatch({ type: UserActionKind.SET_USER_INFOS, payload: user });

    // TODO: Build a route to decode token and get user id
    window.localStorage.setItem("user_id", user.id);
    window.localStorage.setItem(
      "jwt_token",
      `${user.token.tokenType} ${user.token.accessToken}`
    );
  };

  const fetchUser = async () => {
    const user = await api.fetchUser();
    dispatch({ type: UserActionKind.SET_USER_INFOS, payload: user });
  };

  const setToken = async () => {
    const token = window.localStorage.getItem("jwt_token");
    dispatch({ type: UserActionKind.SET_TOKEN, payload: token });
  };

  const value = { userData, handleAuth, fetchUser, setToken };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};
