import React, { Component } from 'react';
import './Header.css';
// const mystyles = {
//     // 'background-image':'./img/imgfoot.jpg',
//     background : './img/imgfoot.jpg',
//     height : '300px'
// }

class Header extends Component {

    render() {
        return (
            <header className='img'>
                <h1>{this.props.title}</h1>
                <p>Bienvenu dans mon espace personel mais professionel !</p>
                <a href="#button">{this.props.button}</a>
            </header>
        )
    };
}

export default Header;