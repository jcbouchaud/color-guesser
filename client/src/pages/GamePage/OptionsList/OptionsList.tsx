import React, { useEffect, useState } from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
      setColor("#111111")
    }
  }, [gameData.round.rightAnswer])

  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={3}
      sx={{ margin: "35px" }}
    >
      {gameData.round.choices.map((x, index) => (
        <Button
          sx={{
            borderColor: color,
            color: color
          }}
          key={index}
          variant="outlined"
          onClick={() => onSubmit(x)}
        >
          {x}
        </Button>
      ))}
    </Stack>
  );
};

export default OptionsList;
