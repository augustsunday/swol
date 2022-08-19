import React from 'react';
import {Link} from 'react-router-dom';
import AuthenticationButton from "./AuthenticationButton";

function Navigation () {
    return (
        <>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/add-exercise">Create Exercise</Link>
        </nav>
        <AuthenticationButton />
        </>
    );
}

export default Navigation;