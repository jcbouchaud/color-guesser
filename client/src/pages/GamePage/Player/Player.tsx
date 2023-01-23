import styled from "styled-components";
import Thumbnail from "../Thumbnail/Thumbnail";
import OptionsList from "../OptionsList/OptionsList";
import { useGameContext } from "../../../context/GameContext/GameContext";
import { useUserContext } from "../../../context/UserContext/UserContext";
import CustomColorButton from "../../../components/CustomColorButton/CustomColorButton";

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  height: 500px;
`;

const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  height: 300px;
  width: 400px;
  max-width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: ${(props) => `1px solid ${props.color}`};
  background-color: white;
`;

const Player = () => {
  const { userData } = useUserContext();
  const { gameData, handleCreateGame } = useGameContext();
  const startGame = () => {
    const userId = userData.id;
    handleCreateGame(userId);
  };
  return (
    <StyledPlayer>
      <StyledGameContainer color={gameData.round.rightAnswer || "purple"}>
        <Thumbnail />
        {gameData.id ? (
          <OptionsList />
        ) : (
          <CustomColorButton
            onClick={startGame}
            color={gameData.round.rightAnswer || "purple"}
            text="start game"
          />
        )}
      </StyledGameContainer>
    </StyledPlayer>
  );
};

export default Player;
