import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN}
                   clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                   redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
