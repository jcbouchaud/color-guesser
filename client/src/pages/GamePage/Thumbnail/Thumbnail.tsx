import React from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";
import Box from "@mui/material/Box";

const Thumbnail = () => {
  const { gameData } = useGameContext();
  return <Box
    sx={{
      backgroundColor: gameData.round.rightAnswer ? gameData.round.rightAnswer : "#111111",
      borderRadius: "5px",
      height: "200px"
    }}
  />;
};

export default Thumbnail;
