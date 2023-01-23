import styled from "styled-components";
import React from "react";
import { useGameContext } from "../../context/GameContext/GameContext";

const StyledPaged = styled.div`
  width: calc(100% - 15px);
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
          20deg,
          hsl(${props => 50}, 60%, 65%),
          hsl(${props => 600 - 305}, 64%, 60%)
  );
  // background-color: ${(props) => props.color};
`;

interface PageProps {
  children: React.ReactNode;
}


const Page = ({ children }: PageProps) => {
  const { gameData } = useGameContext();
  return <StyledPaged color={gameData.round.rightAnswer || "purple"}>{children}</StyledPaged>;
};

export default Page;
