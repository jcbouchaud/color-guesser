import { useGameContext } from "../../../context/GameContext/GameContext";
import styled from "styled-components";

const StyledScore = styled.div`
  width: 100%;
  font-size: 150px;
  color: white;
  text-align: center;
`;

const StyledThumbnail = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

const Thumbnail = () => {
  const { gameData } = useGameContext();
  return (
    <StyledThumbnail color={gameData.round.rightAnswer || "purple"}>
      <StyledScore color={gameData.round.rightAnswer || "purple"}>
        {gameData.score}
      </StyledScore>
    </StyledThumbnail>
  );
};

export default Thumbnail;
