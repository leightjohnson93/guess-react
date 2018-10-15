import React, { Component } from "react";
import "../App.css";
import "./TicTacToe.css";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Tile">
        <h2>Tic Tac Toe</h2>
        <h3>Waiting for game...</h3>
        <form>
          <label>
            X:
            <input id="player-1" defaultValue="Player 1" />
          </label>
          <label>
            O:
            <input id="player-2" defaultValue="Player 2" />
          </label>
        </form>
        <button>Start</button>
        <div className="board">
          <div id="row-1">
            <div id="cell-0" />
            <div id="cell-1" />
            <div id="cell-2" />
          </div>
          <div id="row-2">
            <div id="cell-3" />
            <div id="cell-4" />
            <div id="cell-5" />
          </div>
          <div id="row-3">
            <div id="cell-6" />
            <div id="cell-7" />
            <div id="cell-8" />
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
