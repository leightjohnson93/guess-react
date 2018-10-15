import React, { Component } from "react";
import "../App.css";

const initialState = {
  min: 1,
  max: 100,
  guess: 50,
  message: "Is it 50?",
  gameOver: false
};

class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  lowGuess = () => {
    const { guess, min } = this.state;
    let newGuess = Math.round((min + guess - 2) / 2);
    newGuess = newGuess === 0 ? 1 : newGuess;
    const message = `Is it ${newGuess}?`;
    this.setState({ message, guess: newGuess });
  };

  checkForWinHigh = () => {
    let { max, min, guess } = this.state;
    if (max - min <= 2) {
      const message = `Your number was ${guess + 1}!`;
      const gameOver = true;
      this.setState({ message, gameOver });
      return true;
    } else {
      return false;
    }
  };

  checkForWinLow = () => {
    const { guess, min, max } = this.state;
    if (guess === 1) {
      const message = `It can't be lower than ${guess}!`;
      const gameOver = true;
      this.setState({ message, gameOver });
      return true;
    } else if (max - min === 1) {
      const message = `It was higher than ${guess - 1}!`;
      const gameOver = true;
      this.setState({ message, gameOver });
      return true;
    } else {
      return false;
    }
  };

  higherClick = () => {
    if (this.checkForWinHigh()) return;
    const { guess, max } = this.state;
    const newGuess = Math.round((guess + max) / 2);
    const min = guess + 1;
    const message = `Is it ${newGuess}?`;
    this.setState({ min, message, guess: newGuess });
  };

  lowerClick = () => {
    if (this.checkForWinLow()) return;
    this.lowGuess();
    const max = this.state.guess - 1;
    this.setState({ max });
  };

  correctClick = () => {
    const message = `Your number was ${this.state.guess}!`;
    const gameOver = true;
    this.setState({ message, gameOver });
  };

  render() {
    return (
      <div className="Tile">
        <h1>Guess</h1>
        <h3>
          Think of a number between {this.state.min} and {this.state.max}
        </h3>
        <h2>{this.state.message}</h2>
        <button
          className="Correct"
          disabled={this.state.gameOver}
          onClick={this.correctClick}
        >
          Correct
        </button>
        <button
          className="Higher"
          disabled={this.state.gameOver}
          onClick={this.higherClick}
        >
          Higher
        </button>
        <button
          className="Lower"
          disabled={this.state.gameOver}
          onClick={this.lowerClick}
        >
          Lower
        </button>
        <button className="Reset" onClick={() => this.setState(initialState)}>
          Restart
        </button>
      </div>
    );
  }
}

export default Guess;
