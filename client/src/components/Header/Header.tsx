import { useGameContext } from "../../context/GameContext/GameContext";
import { useUserContext } from "../../context/UserContext/UserContext";
import styled from "styled-components";
import HeaderLink, { StyledHeaderLink } from "./HeaderLink/HeaderLink";

const CustomHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: ${props => `1px solid ${props.color}`};
`;

const Header = () => {
  const { handleResetGame } = useGameContext();
  const { handleResetUser } = useUserContext();

  const paths = [
    { path: "/play", name: " <play>" },
    { path: "/", name: "<top 10>" },
  ];

  const logout = () => {
    handleResetGame();
    handleResetUser();
  };
  return (
    <CustomHeader color={"purple"}>
      {paths.map((x, index) => (
        <HeaderLink key={index} path={x.path} name={x.name} />
      ))}
      <StyledHeaderLink onClick={() => logout()} color="purple">{"<logout>"}</StyledHeaderLink>
    </CustomHeader>
  );
};

export default Header;
