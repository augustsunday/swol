import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = function ({component: Component, ...rest}) {
    return <Route {...rest}></Route>;
}

export default ProtectedRoute;
