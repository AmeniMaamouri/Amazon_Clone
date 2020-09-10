import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthContextProvider from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
