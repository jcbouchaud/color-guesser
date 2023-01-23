import React, { ComponentType, FC, useCallback, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext/UserContext";
import { useGameContext } from "../context/GameContext/GameContext";
import Header from "../components/Header/Header";

const withAuthentication =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props) => {
    const { userData, setToken, fetchUser } = useUserContext();
    const { gameData, handleSetGame } = useGameContext();
    const token = window.localStorage.getItem("jwt_token");

    const setDataFromUser = useCallback(async () => {
      const user = await fetchUser();
      if (user.games.length) {
        handleSetGame(user.games.reverse()[0]);
      }
    }, []);

    if (token) {
      useEffect(() => {
        if (!userData.token.accessToken) setToken();
        if (!userData.id || !gameData.id) {
          setDataFromUser();
        }
      }, []);
      return (
        <>
          <Header />
          <Component {...(props as P)} />
        </>
      );
    }
    return <Navigate to={{ pathname: "/auth/" }} />;
  };

export default withAuthentication;
