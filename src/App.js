import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InitialPage from './views/InitialPage.js';
import LoginPage from './views/LoginPage.js';


class App extends Component {
  render() {
    // Need to implement Route in this component
    return (
      <div className="App">
        <InitialPage />
        <LoginPage />
      </div>
    );
  }
}

export default App;
