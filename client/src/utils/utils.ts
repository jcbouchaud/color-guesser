import { GameData, Round } from "../context/GameContext/types";

const getRandomInt = (length: number) => {
  return Math.floor(Math.random() * length);
};

const genRandomHexColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

const setNewRound = (length: number) => {
  const choices: string[] = [];

  Array.from({ length: length }, () => {
    choices.push(genRandomHexColor());
  });

  const answer = choices[getRandomInt(length)];

  const round: Round = {
    rightAnswer: answer,
    userAnswer: "",
    choices,
  };

  return round;
};

export const setGame = (game: GameData) => {
  const newGame = {
    id: game.id,
    score: game.score,
    round: setNewRound(3)
  };

  return newGame
}
