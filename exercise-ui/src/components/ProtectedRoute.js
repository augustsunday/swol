import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, auth, path, ...rest }) {

    console.log('ProtectedRoute ' + auth);
    console.log({...rest})
    return (
        <Route
            path={path}
            render={() => {
                return auth ? children : <Redirect to='/' />;
            }}
            {...rest}
        />
    );
}

export default ProtectedRoute;