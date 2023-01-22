import React, { createContext, useContext, useReducer } from "react";
import { GameContextProps, GameActionKind, GameData, Round } from "./types";
import { GameReducer } from "./reducer";
import api from "../../services/api";

const initialState = {
  id: "",
  score: 0,
  round: {
    userAnswer: "",
    rightAnswer: "",
    choices: []
  },
};

export const GameContext = createContext<GameContextProps>({
  gameData: initialState,
  handleIncrement: () => {},
  handleReset: () => {},
  handleCreateGame: async () => {},
  handleSetGame: () => {},
  handleSubmitAnswer: () => {}
});

const GameProvider = ({ children }: { children: JSX.Element }) => {
  const [gameData, dispatch] = useReducer(GameReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: GameActionKind.INCREMENT_SCORE });
  };
  const handleReset = () => {
    dispatch({ type: GameActionKind.RESET_SCORE });
  };

  const handleCreateGame = async (userId: string) => {
    const game = await api.createGame(userId);
    dispatch({type: GameActionKind.CREATE_GAME, payload: game})
  }

  const handleSetGame = (game: GameData) => {
    dispatch({type: GameActionKind.SET_GAME, payload: game})
  }

  const handleSubmitAnswer = async (answer: string) => {
    const game = await api.submitAnswer(gameData.id, {
      userAnswer: answer,
      rightAnswer: gameData.round.rightAnswer,
      choices: gameData.round.choices
    })

    // TODO: Generate new round
    const newGame = {
      id: game.id,
      score: game.score,
      round : {
        rightAnswer: "",
        choices: []
      }
    }

    dispatch({type: GameActionKind.SET_NEW_ROUND, payload: newGame})
  }

  const value = { gameData, handleIncrement, handleReset, handleCreateGame, handleSetGame, handleSubmitAnswer };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;

export const useGameContext = () => {
  return useContext(GameContext);
};
