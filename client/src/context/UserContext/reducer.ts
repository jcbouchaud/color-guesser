import { UserAction, UserActionKind, UserDataType } from "./types";

export const UserReducer = (state: UserDataType, action: UserAction) => {
  switch (action.type) {
    case UserActionKind.SET_USER_INFOS:
      return { ...state, ...action.payload };
    case UserActionKind.SET_TOKEN:
      const bearerSplit = action.payload.split(" ");
      return {
        ...state,
        token: {
          accessToken: bearerSplit[1],
          tokenType: bearerSplit[0],
        },
      };
    default:
      return state;
  }
};
