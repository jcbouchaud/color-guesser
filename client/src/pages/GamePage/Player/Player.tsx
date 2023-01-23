import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, Paper, Box } from "@mui/material";
import Thumbnail from "../Thumbnail/Thumbnail";
import OptionsList from "../OptionsList/OptionsList";
import { useGameContext } from "../../../context/GameContext/GameContext";
import { useUserContext } from "../../../context/UserContext/UserContext";

const Player = () => {
  const { userData } = useUserContext();
  const { gameData, handleCreateGame } = useGameContext();
  const startGame = () => {
    const userId = userData.id;
    handleCreateGame(userId);
  };
  return (
    <Grid
      direction="column"
      alignContent="center"
      sx={{ height: "100%" }}
      container
      spacing={2}
    >
      <Grid item>
        <Paper
          sx={{
            height: 300,
            width: 400,
            maxWidth: "100%",
            border: "#111111",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Thumbnail />
          {gameData.id ? (
            <OptionsList />
          ) : (
            <LoadingButton
              onClick={startGame}
              variant="outlined"
              loading={false}
            >
              Start Game
            </LoadingButton>
          )}
        </Paper>
      </Grid>
      {gameData.id && (
        <Grid item justifyContent="center">
          <Box>{`Your score is ${gameData.score} !`}</Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Player;
