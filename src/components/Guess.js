import React, { Component } from "react";
import '../App.css';

const initialState = {
    tries: 1,
    min: 1,
    max: 100,
    guess: 50,
    message: "Is it ",
    punctuation: "?",
    gameOver: false
}

class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.higherClick = this.higherClick.bind(this);
    this.lowerClick = this.lowerClick.bind(this);
    this.correctClick = this.correctClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  resetClick = () => {
    this.setState(initialState)
  }

  lowGuess = () => {
    if (Math.round((this.state.min + this.state.guess - 2) / 2) === 0) {
      this.setState({ guess: 1 });
    } else {
      this.setState({
        guess: Math.round((this.state.min + this.state.guess - 2) / 2)
      });
    }
  };

  checkForWinHigh = () => {
    if (this.state.max - this.state.min <= 2) {
      this.setState({ message: "Your number was " });
      this.setState({ gameOver: true });
      this.setState({ punctuation: "!" });
      return true;
    }
  };

  checkForWinLow = () => {
    if (this.state.guess === 1) {
      this.setState({
        message: "It can't be lower than "
      });
      this.setState({ punctuation: "!" });
      this.setState({ gameOver: true });
      return true;
    } else if (this.state.max - this.state.min === 1) {
      this.setState({
        message: "It was higher than "
      });
      this.setState({ gameOver: true });
      this.setState({ punctuation: "!" });
      return true;
    }
  };

  higherClick() {
    this.setState({
      guess: Math.round((this.state.guess + this.state.max) / 2)
    });
    if (this.checkForWinHigh()) {
      return;
    }
    this.setState({ tries: this.state.tries + 1 });
    this.setState({ min: this.state.guess + 1 });
    this.setState({ message: "Is it " });
  }

  lowerClick() {
    this.lowGuess();
    if (this.checkForWinLow()) {
      return;
    }
    this.setState({ tries: this.state.tries + 1 });
    this.setState({ max: this.state.guess - 1 });
    this.setState({ message: "Is it " });
  }

  correctClick() {
    this.setState({ message: "Your number was " });
    this.setState({ gameOver: true });
    this.setState({ punctuation: "!" });
  }

  render() {
    return (
      <div className="Tile">
      <h1>Guess</h1>
        <h3>
          Think of a number between 1 and 100
        </h3>
        <h2>
          {this.state.message}
          {this.state.guess}
          {this.state.punctuation}
        </h2>
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
        <button
        className="Reset"
        onClick={this.resetClick}
        >
        Restart
        </button>
      </div>
    );
  }
}

export default Guess;
