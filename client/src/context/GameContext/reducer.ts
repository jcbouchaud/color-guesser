import { GameAction, GameActionKind, GameData } from "./types";

export const GameReducer = (state: GameData, action: GameAction) => {
  switch (action.type) {
    case GameActionKind.INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case GameActionKind.RESET_SCORE:
      return { ...state, score: 0 };
    case GameActionKind.CREATE_GAME:
      return { ...state, ...action.payload };
    case GameActionKind.SET_GAME:
      if (action.payload.rounds) {
        return { ...state, ...action.payload, round: action.payload.rounds[0] };
      }
      return { ...state, ...action.payload, round: action.payload.rounds[0] };
    case GameActionKind.SET_NEW_ROUND:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};