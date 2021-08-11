import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './assets/css/index.css';
import App from './App';
import Login from './login';
import LogList from './logList';
import TopNav from './partials/topNav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <TopNav />
        <App />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/list">
        <TopNav />
        <LogList />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
