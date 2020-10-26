// import React, { Component } from 'react';
// import { Grid, Cell, ListItemContent, ListItem, List } from 'react-mdl';
import './contact.css'
// import { Row, Col, Container, Form } from 'react-bootstrap';
import Navbare from './Navbar';
import avatar from './img/image2.jpeg'
// export default class Contact extends Component {
//     render() {
//         return (
// <>
//             {/* // <body className="body"> */}
//                 <Navbare />
//                 <div className="contact-body">
//                     {/* <Row className="col-6 float-left" style={{ textAlign: "center", paddingLeft: "12rem", paddingRight: "12rem" }}> */}
//                         <Grid className="contact-grid">
//                             <Cell col={6}>
//                                 <h2>Tadjidine Tamou</h2>
//                                 {/* <img src={avatar} /> */}
//                             </Cell>
//                         </Grid>
//                     {/* </Row> */}
//                     {/* <Row className="col-6 float-right" style={{ paddingRight: "6rem" }}> */}
//                         <Grid className="contacte-grid">


//                         <Cell col={6}>
//                                 <h2>Contact Me</h2>
//                                 <hr />

//                                 <div className="contact-list">
//                                     <List>
//                                         <ListItem>
//                                             <ListItemContent className="ListItemContent">
//                                                 <i className="fa fa-phone-square" aria-hidden="true" />
//                                             076568802
//                                         </ListItemContent>
//                                         </ListItem>

//                                         <ListItem>
//                                             <ListItemContent className="ListItemContent">
//                                                 <i className="fa fa-envelope" aria-hidden="true" />
//                                             tadjidine.tamou@epitech.eu
//                                         </ListItemContent>
//                                         </ListItem>

//                                         <ListItem>
//                                             <ListItemContent className="ListItemContent">
//                                                 <a href="https://www.linkedin.com/in/tadjidine-tamou-frontenddev/"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
//                                                     Tadjidine Tamou
//                                                 </ListItemContent>
//                                         </ListItem>


//                                     </List>
//                                 </div>
//                             </Cell>
//                         </Grid>
//                     {/* </Row> */}

//                 </div>
//             {/* // </body> */}
//             </>
//         )
//     }
// }

import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <>
                <body className="body">

                    <Navbare />
                    <div className="contact-body">
                        <Grid className="contact-grid">
                            <Cell col={6}>
                                <Cell col={6}>
                                    <h2>Tadjidine Tamou</h2>
                                    <img src={avatar} />
                                </Cell>
                            </Cell>
                            <Cell col={6}>
                                <h2>Contact Me</h2>
                                <hr />

                                <div className="contact-list">                                     <List>
                                    <ListItem>
                                        <ListItemContent className="ListItemContent">
                                            <i className="fa fa-phone-square" aria-hidden="true" />
                                             076568802
                                         </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="ListItemContent">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                             tadjidine.tamou@epitech.eu
                                         </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="ListItemContent">
                                            <a href="https://www.linkedin.com/in/tadjidine-tamou-frontenddev/"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                                                     Tadjidine Tamou
                                                 </ListItemContent>
                                    </ListItem>


                                </List>
                                </div>
                            </Cell>
                        </Grid>
                    </div>
                </body>
            </>
        )
    }
}

export default Contact;


