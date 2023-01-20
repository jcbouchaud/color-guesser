import React, { createContext, useContext, useReducer } from "react";

interface GameData {
  score: number;
  colors: string[];
}

const initialState = {
  score: 0,
  colors: ["#000000", "#FFFFFF"],
};

enum GameActionKind {
  INCREMENT_SCORE = "INCREMENT_SCORE",
  RESET_SCORE = "RESET_SCORE",
}

interface GameAction {
  type: GameActionKind;
}

const GameReducer = (state: GameData, action: GameAction) => {
  switch (action.type) {
    case GameActionKind.INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case GameActionKind.RESET_SCORE:
      return { ...state, score: 0 };
    default:
      return state;
  }
};

interface GameContextProps {
  state: GameData;
  handleIncrement: () => void;
  handleReset: () => void;
}

export const GameContext = createContext<GameContextProps>({
  state: initialState,
  handleIncrement: () => {},
  handleReset: () => {},
});

const GameProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: GameActionKind.INCREMENT_SCORE });
  };
  const handleReset = () => {
    dispatch({ type: GameActionKind.RESET_SCORE });
  };

  const value = { state, handleIncrement, handleReset: handleReset };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;

export const useGameContext = () => {
  return useContext(GameContext);
};
