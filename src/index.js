import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import * as serviceWorker from './serviceWorker';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Home LogoTitle="React Project" />
        <Header title="My Stylish Portfolio" button="Find Out More"/>

      </Container>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
