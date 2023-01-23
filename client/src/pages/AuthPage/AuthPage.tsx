import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { FormControl,  Box, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AuthInput from "./AuthInput/AuthInput";
import Page from "../../components/Page/Page";
import { useUserContext } from "../../context/UserContext/UserContext";

export interface formStateInterface {
  username: string;
  password: string;
}

const AuthPage = () => {
  const { userData, handleAuth } = useUserContext();

  const initialFormState = {
    username: "",
    password: "",
  };

  const [formState, setFormState] =
    useState<formStateInterface>(initialFormState);

  const [loading, setLoading] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);

  const toggleAuthStatus = () => {
    setIsRegistered(!isRegistered);
  };

  const submitAuth = async () => {
    if (formState?.username && formState.password) {
      setLoading(true);
      await handleAuth(formState?.username, formState?.password, isRegistered);
    }
  };

  if (window.localStorage.getItem("jwt_token")) {
    return (
      <Navigate
        to={{
          pathname: "/play/",
        }}
      />
    );
  }

  return (
    <Page>
      <Box sx={{ width: 300, height: 300 }}>
        <FormControl variant="standard">
          <AuthInput
            label="username"
            formState={formState}
            setFormState={setFormState}
          />
          <AuthInput
            label="password"
            formState={formState}
            setFormState={setFormState}
          />
          {userData.token.accessToken}
          <LoadingButton
            sx={{width: "300px"}}
            onClick={submitAuth}
            variant="outlined"
            loading={loading}
            disabled={!formState?.username || !formState.password}
          >
            {isRegistered ? "Login" : "Register"}
          </LoadingButton>
          <Button onClick={toggleAuthStatus}>
            {isRegistered ? "New member ?" : "Already registered ?"}
          </Button>
        </FormControl>
      </Box>
    </Page>
  );
};

export default AuthPage;
