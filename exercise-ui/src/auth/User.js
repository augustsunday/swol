import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function User () {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <p>{user.name}</p>
            </div>
        )

    )

}