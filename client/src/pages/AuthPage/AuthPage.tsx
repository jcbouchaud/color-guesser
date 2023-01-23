import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import AuthInput from "./AuthInput/AuthInput";
import PasswordIcon from "@mui/icons-material/Password";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoadingButton from "@mui/lab/LoadingButton";
import { useUserContext } from "../../context/UserContext/UserContext";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";

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
      setLoading(false);
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
    <>
      <Box sx={{ width: 300, height: 300 }}>
        <Button onClick={toggleAuthStatus}>{isRegistered ? "Create account" : "Already registered ?"}</Button>
        <FormControl variant="standard">
          <AuthInput
            label="username"
            formState={formState}
            setFormState={setFormState}
          >
            <AccountCircle sx={{ mr: 1, my: 0.5 }} />
          </AuthInput>
          <AuthInput
            label="password"
            formState={formState}
            setFormState={setFormState}
          >
            <PasswordIcon sx={{ mr: 1, my: 0.5 }} />
          </AuthInput>
          {userData.token.accessToken}
          <LoadingButton
            onClick={submitAuth}
            variant="outlined"
            loading={loading}
            disabled={!formState?.username || !formState.password}
          >
            {isRegistered ? "Login" : "Register"}
          </LoadingButton>
        </FormControl>
      </Box>
    </>
  );
};

export default AuthPage;
