import withAuthentication from "../../hocs/withAuthentication";
import Player from "./Player/Player";
import Page from "../../components/Page/Page";

const GamePage = () => {
  return (
    <Page>
      <Player />
    </Page>
  );
};

export default withAuthentication(GamePage);
