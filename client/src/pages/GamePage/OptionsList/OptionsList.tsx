import React, { useEffect, useState } from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";
import styled from "styled-components";
import CustomButton from "../../../components/CustomButton/CustomButton";

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
        <CustomButton key={index} onClick={() => onSubmit(x)} color={color}>{x}</CustomButton>
      ))}
    </StyledStack>
  );
};

export default OptionsList;
