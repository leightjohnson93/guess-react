import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library'
import App from './App';
import Guess from './components/Guess';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';

it('renders App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Guess', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Guess />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Titles', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Titles />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Weather', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
  ReactDOM.unmountComponentAtNode(div);
});
