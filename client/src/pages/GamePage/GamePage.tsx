import withAuthentication from "../../hocs/withAuthentication";
import Player from "./Player/Player";
import Page from "../../components/Page/Page";
import { useGameContext } from "../../context/GameContext/GameContext";

const GamePage = () => {
  const { gameData } = useGameContext();

  return (
    <Page loading={gameData.id ? false : true}>
      <Player />
    </Page>
  );
};

export default withAuthentication(GamePage);
