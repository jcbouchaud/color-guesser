import withAuthentication from "../../hocs/withAuthentication";
import Player from "./Player/Player";
import StartGameScreen from "./StartGameScreen/StartGameScreen";
import { useGameContext } from "../../context/GameContext/GameContext";
import Grid from "@mui/material/Grid";

const GamePage = () => {
  return (
    <Grid container>
      <Player />
    </Grid>
  );
};

export default withAuthentication(GamePage);
