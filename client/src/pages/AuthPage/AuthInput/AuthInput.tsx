import React, { ChangeEvent, SetStateAction } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import {formStateInterface} from "../AuthPage"

interface AuthInputProps {
  label: string;
  formState: formStateInterface;
  setFormState:SetStateAction<any>;
  children: JSX.Element;
}

const AuthInput = ({ label, formState, setFormState, children }: AuthInputProps) => {

  const setStateFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({...formState, [label]: event.target.value})
  }

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {children}
      <TextField id="input-with-sx" label={label} variant="standard" onChange={setStateFromInput}/>
    </Box>
  );
};

export default AuthInput;
