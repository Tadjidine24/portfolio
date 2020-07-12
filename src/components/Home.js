import React, { Component } from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import Navbare from './Navbar';

export default class Home extends Component {

    render() {
        return (
            <Container className="container1">
                <Navbare/>
            <header className='img'>
                <h1>My Stylish Portfolio</h1>
                <p>Bienvenu dans mon espace personel mais professionel !</p>
                <a href="/about">Find Out More</a>
            </header>
            </Container>
        )
    }
}