import React from 'react';
import {Link} from 'react-router-dom';
import AuthenticationButton from "../auth/AuthenticationButton";
import User from "../auth/User";

function Navigation () {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-exercise">Create Exercise</Link>
        </nav>
        <User /><AuthenticationButton />
        </>
    );
}

export default Navigation;