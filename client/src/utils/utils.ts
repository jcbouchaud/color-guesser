import { GameData, Round } from "../context/GameContext/types";

const getRandomInt = (length: number) => {
  return Math.floor(Math.random() * length);
};

const genRandomHexColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

export const hexToHSL = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result && result.length >= 3) {
    const r = parseInt(result[1], 16) / 255;
    const g = parseInt(result[2], 16) / 255;
    const b = parseInt(result[3], 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = (max + min) / 2;
    let l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h, s, l };
  }
};

const setNewRound = (length: number) => {
  const choices: string[] = [];

  Array.from({ length: length }, () => {
    return choices.push(genRandomHexColor());
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
    round: setNewRound(3),
  };

  return newGame;
};
