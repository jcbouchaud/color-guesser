export interface Token {
  accessToken: string;
  tokenType: string;
}

export interface UserDataType {
  id: string
  username: string;
  password: string;
  token: Token;
}

export enum UserActionKind {
  SET_USER_INFOS = "SET_USER_INFOS",
  SET_TOKEN = "",
}

export interface UserAction {
  type: UserActionKind;
  payload: any;
}

export interface UserContextProps {
  userData: UserDataType;
  handleAuth: (username: string, password: string, registered: boolean) => void;
  fetchUser: () => void
  setToken: () => void
}
