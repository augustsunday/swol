import React from 'react';
import {Link} from 'react-router-dom';
import LoginButton from "./LoginButton";

function Navigation () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-exercise">Create Exercise</Link>
            <><LoginButton>Log In</LoginButton></>
        </nav>
    );
}

export default Navigation;