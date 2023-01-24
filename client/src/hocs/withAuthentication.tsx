import React, { ComponentType, FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext/UserContext";
import { useGameContext } from "../context/GameContext/GameContext";
import Footer from "../components/Footer/Footer";

const withAuthentication =
  <P extends object>(Component: ComponentType<any>): FC<any> =>
  (props) => {
    const { userData, setToken, fetchUser } = useUserContext();
    const { gameData, handleSetGame } = useGameContext();
    const [loader, setLoader] = useState(false);
    const token = window.localStorage.getItem("jwt_token");

    const setDataFromUser = () => {
      setLoader(true)
      fetchUser().then(user => {

        if (user.games.length){
          handleSetGame(user.games.reverse()[0]);
        }
        setLoader(false)

      });
    };

    useEffect(() => {
      if (token) {
        if (!userData.token.accessToken) setToken();
        if (!userData.id || !gameData.id) {
          setDataFromUser();
        }
      }
    }, []);

    if (!token) {
      return <Navigate to={{ pathname: "/auth/" }} />;
    }
    return (
      <>
        <Component {...(props as P)} loader={loader} />
        <Footer />
      </>
    );
  };

export default withAuthentication;
