import React from "react";
import Option from "../Option/Option";
import { useGameContext } from "../../../context/GameContext/GameContext";

const OptionsList = () => {
  const { gameData } = useGameContext();

  return (
    <>
      <div>
        {gameData.round.choices.map((x, index) => (
            <Option key={index} color={x} />
          ))}
      </div>
    </>
  );
};

export default OptionsList;
