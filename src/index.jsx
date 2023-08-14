import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.less';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';

import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import App from './App';

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </Router>,

  document.getElementById('root')
);
