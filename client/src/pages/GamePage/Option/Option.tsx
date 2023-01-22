import React from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";

type OptionProps = {
  color: string;
};

const Option = ({ color }: OptionProps) => {
  const { gameData } = useGameContext();
  return <div>{color}</div>;
};

export default Option;
