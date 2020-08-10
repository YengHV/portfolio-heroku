import React from "react";
import JumbotronComp from "../JumbotronComp/JumbotronComp";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutme.css";

function AboutMeComp() {

    
    return (
        <div>
            <Container className = "aboutme-container">
            <JumbotronComp></JumbotronComp>
            </Container>
            <Container  className = "aboutme-container paragraph">
            <h1>Hello, my name is Yeng</h1>
            <Row>
            <Col>
            <h4>My Software Development Journey</h4>
            <p>I have worked in customer service for the past eight years, dedicated to client’s satisfaction and providing high quality service. Interactions with clients were either face to face or via phone, particularly in retail, representative customer service with phone support included, as well as sales consultant. Earlier in 2020, I decided to do more research about coding and decided to make a career change. This led me to pursue my education with the University of Minnesota, where I learned Full-Stack Web Development.  Some of my projects that I’ve created will be linked under the repositories tab. 
            </p>
            <p>Fun Facts: From the great state of MN, known for it's 10, 000 lakes. I Enjoy to go fishing, hunting, and camping in my free time.  </p>
            </Col>
            <Col>
            <h4>
            TECHNICAL SKILLS:
            </h4>
            <p> JavaScript, HTML5, CSS3, Node.js, jQuery, MySQL, Sequelize, MongoDB, Github, Bootstrap, Bootstrap React, React.js, APIs, Heroku, Media Query. </p>
            
            </Col>
            </Row>
            </Container>
            
        </div>
    )
};

export default AboutMeComp;