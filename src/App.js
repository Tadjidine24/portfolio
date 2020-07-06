 
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import HomePage from './pages/HomePage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Garrett Love',
      headerLinks: [
        { title: 'Home', path: '/' },
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Tamou Tadjidine</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          

        </Container>
      </Router>
    );
  }
}

export default App;