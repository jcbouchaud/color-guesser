import styled from "styled-components";
import React from "react";
import { useGameContext } from "../../context/GameContext/GameContext";
import { CircularProgress } from "@mui/material";

const StyledPaged = styled.div`
  width: calc(100% - 15px);
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    20deg,
    hsl(${(props) => 50}, 60%, 65%),
    hsl(${(props) => 600 - 305}, 64%, 60%)
  );
`;

interface PageProps {
  children: React.ReactNode;
  loading?: boolean;
}

const Page = ({ children, loading }: PageProps) => {
  const { gameData } = useGameContext();
  return (
    <StyledPaged color={gameData.round.rightAnswer || "purple"}>
      {loading ? <CircularProgress /> : children}
    </StyledPaged>
  );
};

export default Page;
