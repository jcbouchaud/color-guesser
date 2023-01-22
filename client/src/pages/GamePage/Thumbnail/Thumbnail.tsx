import React from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";

const Thumbnail = () => {
  const { gameData } = useGameContext();
  return <div>{gameData.rounds[0].rightAnswer}</div>;
};

export default Thumbnail;
