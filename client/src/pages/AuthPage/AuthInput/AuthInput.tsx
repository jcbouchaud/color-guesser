import React, { ChangeEvent, SetStateAction } from "react";
import { TextField } from "@mui/material";
import {formStateInterface} from "../AuthPage"
import styled from "styled-components";

interface AuthInputProps {
  label: string;
  formState: formStateInterface;
  setFormState:SetStateAction<any>;
}


const StyledAuthInput = styled.div`
  margin-bottom: 10px;
`

const AuthInput = ({ label, formState, setFormState }: AuthInputProps) => {

  const setStateFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({...formState, [label]: event.target.value})
  }

  return (
    <StyledAuthInput>
      <TextField sx={{width: "300px"}} label={label} variant="standard" onChange={setStateFromInput}/>
    </StyledAuthInput>
  );
};

export default AuthInput;
