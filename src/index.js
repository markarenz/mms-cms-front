import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Analytics from 'react-router-ga';

ReactDOM.render(
  <BrowserRouter>
    <Analytics id="UA-46308884-1" debug>
      <ScrollToTop />
      <App />
    </Analytics>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
