import { useGameContext } from "../../context/GameContext/GameContext";
import { useUserContext } from "../../context/UserContext/UserContext";
import styled from "styled-components";
import FooterLink, { StyledFooterLink } from "./FooterLink/FooterLink";
import { Link } from "react-router-dom";

const CustomFooter = styled.div`
  width: calc(100% - 15px);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: ${(props) => `1px solid ${props.color}`};
  border-bottom: ${(props) => `1px dashed ${props.color}`};
`;

const Footer = () => {
  const { handleResetGame } = useGameContext();
  const { handleResetUser } = useUserContext();

  const paths = [
    { path: "/play", name: " <PLAY>" },
    { path: "/", name: "<TOP 10>" },
  ];

  const handleLogout = () => {
    handleResetGame();
    handleResetUser();
  };
  return (
    <CustomFooter color={"purple"}>
      {paths.map((x, index) => (
        <FooterLink key={index} path={x.path} name={x.name} />
      ))}
      <StyledFooterLink color="purple">
        <Link onClick={handleLogout} to={"/"}>{"<LOGOUT>"}</Link>
      </StyledFooterLink>
    </CustomFooter>
  );
};

export default Footer;
