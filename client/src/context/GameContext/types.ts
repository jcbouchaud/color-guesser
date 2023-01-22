export interface GameData {
  id: string;
  score: number;
  round: Round;
}

export enum GameActionKind {
  INCREMENT_SCORE = "INCREMENT_SCORE",
  RESET_SCORE = "RESET_SCORE",
  CREATE_GAME = "CREATE_GAME",
  SET_GAME = "SET_GAME",
  SET_USER_ANSWER = "SET_USER_ANSWER",
  SET_NEW_ROUND = "SET_NEW_ROUND"
}

export interface GameAction {
  type: GameActionKind;
  payload?: any
}

export interface GameContextProps {
  gameData: GameData;
  handleIncrement: () => void;
  handleReset: () => void;
  handleCreateGame: (userId: string) => void;
  handleSetGame: (game: GameData) => void;
  handleSubmitAnswer: (answer: string) => void;
}

export interface Round {
  userAnswer: string;
  rightAnswer: string;
  choices: string[];
}