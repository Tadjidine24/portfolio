import { Container, Card, Button } from "react-bootstrap";
import React, { Component } from 'react';
import Navbar from './Navbar';
import './About.css';

// import Footer from './footer/footer';

export default class About extends Component {


    render() {

        return (
            <Container fluid className="container" >
                <Navbar />
                <Card className={'text-center'}>
                    <Card.Header className="header" >About Me</Card.Header>
                    <Card.Body className="bodys">
                        <Card.Title className='title'>Etudiant Developpeur Web</Card.Title>
                        <Card.Text className='text'>
                            Je suis Etudiant Développeur web au Samsung Campus,
                            en première année. Je suis en echerche d’un contrat de
                            professionnalisation pour la deuxième année au
                            Samsung Campus qui se déroulera en alternance du
                            02/11/2020 au 30/10/2021.
                            Rythme : 3 semaines entreprise / 1 semaine école
                            Je suis polyvalent, déterminé et créatif
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}