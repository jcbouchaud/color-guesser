import React, { ComponentType, FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext/UserContext";

const withAuthentication =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props) => {
    const { userData, fetchUser, setToken } = useUserContext();
    const token = window.localStorage.getItem("jwt_token")
    if (token) {
      useEffect(() => {
        if (!userData.id) {
          setToken()
          fetchUser()
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
