import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    </>

  );
}

export default App;
