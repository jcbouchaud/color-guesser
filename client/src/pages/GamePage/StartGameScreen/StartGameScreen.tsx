import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useUserContext } from "../../../context/UserContext/UserContext";
import { useGameContext } from "../../../context/GameContext/GameContext";

const StartGameScreen = () => {
  const { userData } = useUserContext();
  const { handleCreateGame } = useGameContext();
  const startGame = () => {
    const userId = userData.id;
    handleCreateGame(userId);
  };
  return (
    <Box>
      <LoadingButton onClick={startGame} variant="outlined" loading={false}>
        Start Game
      </LoadingButton>
    </Box>
  );
};
export default StartGameScreen;
