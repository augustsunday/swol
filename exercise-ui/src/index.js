import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <Auth0ProviderWithHistory domain={process.env.REACT_APP_AUTH0_DOMAIN}
                   clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                   redirectUri={window.location.origin}>
    <App />
    </Auth0ProviderWithHistory>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
