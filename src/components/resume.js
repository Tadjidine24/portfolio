import React, { Component } from 'react';
import { Grid, Cell, ListItemContent, ListItem } from 'react-mdl';
import Experience from './experience';
import Competence from './competence';
import Material from 'react-mdl/extra/material';
// import MaterialCss from 'react-mdl/extra/material.css';
import Navbar from './Navbar';
import './resume.css'
import Formation from './formation';
import CV from './assets/CV.pdf';
import ecommerce from './img/e-commerce.png'
import { Image } from 'react-bootstrap';
class Resume extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="div">
          <Grid>
            <Cell col={4}>

              <h2 className="h2" style={{ paddingTop: '2em' }}>Tadjidine Tamou</h2>
              <h4 className="h4" style={{ color: 'grey' }}>Developpeur Web (Front-end)</h4>
              <hr className="hr" style={{ borderTop: '4px solid red', width: '50%' }} />
              <p className="p">Je suis Etudiant Développeur web au Samsung Campus, en première année. Je suis en echerche d’un contrat de professionnalisation pour la deuxième année au Samsung Campus qui se déroulera en alternance du 02/11/2020 au 30/10/2021. Rythme : 3 semaines entreprise / 1 semaine école Je suis polyvalent, déterminé et créatif</p>
              <hr className="hr" style={{ borderTop: '4px solid red', width: '50%' }} />
              <h5 className="h5">Address</h5>
              <p className="p">23 Avenue de Verdun 1916, La Garenne Colombe</p>
              <h5 className="h5">Téléphone</h5>
              <p className="p">0761568802</p>
              <h5 className="h5">Email</h5>
              <p className="p">tadjidine.tamou@epitech.eu</p>
              <hr className="hr" style={{ borderTop: '4px solid red', width: '50%' }} />
              <h2 className="h2">Projet</h2>
              <h5 className="h5">E-commerce</h5>
              <p className="p">L'objectif est de créer une plateforme générique de site
              marchand avec un maximum de fonctionnalités. En
collaboration avec l'ESSEC au niveau marketing.</p>
<Image src={ecommerce}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2 className="h2">Education</h2>


              <Formation
                startYear={2019}
                endYear={2021}
                schoolName="Samsung Campus"
                schoolDescription="Ecole de Développeur web avec une formation sur 2 ans (équivalent a un BTS) crée par Samsung France, 
                Supdeco et Epitech"
              />
              <hr className="hr" style={{ borderTop: '4px solid blue' }} />


              <h2 className="h2">Expérience</h2>

              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Sushi Shop"
                jobDescription="Livreur de Sushi pour la franchise Sushi Shop"
              />

              <hr className="hr" style={{ borderTop: '4px solid blue' }} />
              <h2 className="h2">Compétence</h2>
              <Competence
                skill="HTML/CSS"
                progress={100}
              />
              <Competence
                skill="SQL"
                progress={80}
              />
              <Competence
                skill="MongoDB"
                progress={80}
              />
              <Competence
                skill="ReactJS"
                progress={80}
              />
              <Competence
                skill="Laravel"
                progress={70}
              />
              <Competence
                skill="Symphony"
                progress={70}
              />
              <Competence
                skill="PHP"
                progress={70}
              />
              <ListItem>
                <ListItemContent className="ListItemContent">
                  <a href={CV}><i className="fa fa-file" aria-hidden="true" /></a>
                  CV
                </ListItemContent>
              </ListItem>

            </Cell>
          </Grid>
        </div>
      </>
    )
  }
}

export default Resume;