import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/app';
import ErrorBoundry from './components/error-boundry'

import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

