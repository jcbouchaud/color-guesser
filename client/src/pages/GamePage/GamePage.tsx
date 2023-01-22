import withAuthentication from "../../hocs/withAuthentication";
import Player from "./Player/Player";
import StartGameScreen from "./StartGameScreen/StartGameScreen";
import { useGameContext } from "../../context/GameContext/GameContext";

const GamePage = () => {
  const { gameData } = useGameContext();

  if (gameData.id) {
    return <StartGameScreen />;
  }

  return <Player />;
};

export default withAuthentication(GamePage);
