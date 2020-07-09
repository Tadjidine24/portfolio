import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './home.css';

class Home extends Component {
    render() {
        const sections = ['Home', 'About', 'Contact'];
        const navLinks = sections.map( section => {
            return (
            <li><a href={'#' + section}>{section}</a></li>
            )
        })
        return (
            <nav>
                <h2>React Project</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Home;