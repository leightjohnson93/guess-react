import React, { Component } from 'react';
import logo from './logo.svg';
import Guess from './components/Guess.js';
import Weather from './components/Weather.js';
import Form from './components/Form.js';
import Titles from './components/Titles.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Games</h1>
          </header>
          <Guess />
          <div className="Tile">
            <Titles />
            <Form />
            <Weather />
          </div>
      </div>
    );
  }
}

export default App;
