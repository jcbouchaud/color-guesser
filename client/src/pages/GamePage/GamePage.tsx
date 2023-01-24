import withAuthentication from "../../hocs/withAuthentication";
import Player from "./Player/Player";
import Page from "../../components/Page/Page";


interface GamePageInterface {
  loader: boolean
}

const GamePage = ({ loader }: GamePageInterface) => {

  return (
    <Page loading={loader}>
      <Player />
    </Page>
  );
};

export default withAuthentication(GamePage);
