import { UserWithScore } from "../RankingPage";
import styled from "styled-components";

const StyledUserRow = styled.div`
  min-width: 300px;
  border: 1px solid black;
  height: 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding-right: 10px;
  padding-left: 10px;
  color: ${(props) => props.color};
  border: ${(props) => `1px solid ${props.color}`};
  background-color: white;
`;

const UserRow = ({ username, bestScore }: UserWithScore) => {
  return (
    <StyledUserRow color={"purple"}>
      <div>{username} </div>
      <div style={{fontWeight: "bold"}}>{bestScore} points</div>
    </StyledUserRow>
  );
};

export default UserRow;
