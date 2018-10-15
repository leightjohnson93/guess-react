import React, { Component } from "react";
import logo from "./logo.svg";
import Guess from "./components/Guess.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Games</h1>
        </header>
        <Guess />
      </div>
    );
  }
}

export default App;
