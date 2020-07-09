import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './contact.css'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tadjidine Tamou</h2>
                        <img src="./img/image2.jpeg"/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;