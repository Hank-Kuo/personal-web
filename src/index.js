import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/UserContext';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable 
      />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
