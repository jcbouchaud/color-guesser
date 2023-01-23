import React, { ComponentType, FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext/UserContext";
import { useGameContext } from "../context/GameContext/GameContext";

const withAuthentication =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props) => {
    const { userData, fetchUser, setToken } = useUserContext();
    const { gameData, handleSetGame }= useGameContext()
    const token = window.localStorage.getItem("jwt_token")

    const setDataFromUser = async () => {
      const user = await fetchUser()
      if (user.games.length && !gameData.id) {
        handleSetGame(user.games.reverse()[0])
      }
    }
    if (token) {
      useEffect(() => {
        if (!userData.id) {
          setDataFromUser().then(setToken)
        }
      }, [])
      return <Component {...(props as P)} />;
    }
    return (
      <Navigate
        to={{
          pathname: "/auth/",
        }}
      />
    );
  };

export default withAuthentication;
