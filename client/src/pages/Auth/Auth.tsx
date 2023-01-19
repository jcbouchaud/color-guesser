import React from "react";
import {redirect} from "react-router-dom";

export const authLoader = async () => {
    // TODO: redirect to play if authenticated
    return redirect("/play");
};

const AuthPage = () => {
    return <div>Auth page</div>
}

export default AuthPage