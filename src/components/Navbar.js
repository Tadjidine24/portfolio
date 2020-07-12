import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    handleLogout = e => {
        localStorage.removeItem('token')
        window.location.reload()
    }
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/resume">Resumer</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;