import React from "react";
import { redirect } from "react-router-dom";

export const mainLoader = async () => {
  return redirect("/login");
};

const Main = () => {
    return <div>Texte</div>
}

export default Main