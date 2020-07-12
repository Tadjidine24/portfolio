import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact';
import About from './components/About';
import Resume from './components/resume';


function App() {
  return (
    <>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/about" exact component={About} />
      <Route exact path="/contact" exact component={Contact} />
      <Route exact path="/resume" exact component={Resume} />
    </>

  );
}

export default App;
