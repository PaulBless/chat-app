import logo from './logo.svg';
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Chat from './components/Chat'

function App() {
  return (
    <Router>
        <Route exact path='/' component={Login} />
        <Route path="/login" component={Login} />
      </Router>
  );
}

export default App;
