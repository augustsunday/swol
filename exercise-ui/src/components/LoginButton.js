import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect({redirectUri: 'https://localhost:8000/home'})}>Log In</button>
};

export default LoginButton