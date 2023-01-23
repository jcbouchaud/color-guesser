import React, { useEffect, useState } from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";
import CustomColorButton from "../../../components/CustomColorButton/CustomColorButton";
import styled from "styled-components";

const StyledStack = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: stretch;
    margin-top: auto;
    margin-bottom: auto;
  `

const OptionsList = () => {
  const { gameData, handleSubmitAnswer } = useGameContext();

  const onSubmit = (value: string) => {
    handleSubmitAnswer(value);
  };

  const [color, setColor] = useState("")

  useEffect(() => {
    if (gameData.round.rightAnswer) {
      setColor(gameData.round.rightAnswer)
    } else {
      setColor("purple")
    }
  }, [gameData.round.rightAnswer])

  return (
    <StyledStack  >
      {gameData.round.choices.map((x, index) => (
        <CustomColorButton key={index} text={x} color={color} onClick={() => onSubmit(x)}/>
      ))}
    </StyledStack>
  );
};

export default OptionsList;
