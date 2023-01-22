import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import AuthInput from "./AuthInput/AuthInput";
import PasswordIcon from "@mui/icons-material/Password";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoadingButton from "@mui/lab/LoadingButton";
import { useUserContext } from "../../context/UserContext/UserContext";

export interface formStateInterface {
  username: string;
  password: string;
}

const AuthPage = () => {
  const { state, handleLogin } = useUserContext();

  const initialFormState = {
    username: "",
    password: "",
  };

  const [formState, setFormState] =
    useState<formStateInterface>(initialFormState);

  const [loading, setLoading] = useState<boolean>(false);

  const submitLogin = async () => {
    if (formState?.username && formState.password) {
      setLoading(true);
      await handleLogin(formState?.username, formState?.password);
      setLoading(false);
    }
  };

  return (
    <>
      <Box sx={{ width: 300, height: 300 }}>
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
          {state.token}
          <LoadingButton
            onClick={submitLogin}
            variant="outlined"
            loading={loading}
            disabled={!formState?.username || !formState.password}
          >
            Login
          </LoadingButton>
        </FormControl>
      </Box>
    </>
  );
};

export default AuthPage;
