import withAuthentication from "../../hocs/withAuthentication";
import Player from "./Player/Player";
import { useGameContext } from "../../context/GameContext/GameContext";

const GamePage = () => {
  const { state, handleIncrement, handleDecrement } = useGameContext();

  return (
    <>
      <div>
        <div onClick={() => handleIncrement()}>Game Page</div>
        <div>{state.score}</div>
        <div>
          <Player />
        </div>
      </div>
    </>
  );
};

export default withAuthentication(GamePage);
