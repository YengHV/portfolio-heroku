import React from "react";
import { Container } from "react-bootstrap";
import "./contact.css"
import SocialFollow from "../SocialFollow/SocialFollow"

function ContactComp() {
    return (
        <div>
            <Container>
            <div>
                <SocialFollow></SocialFollow>
            </div>
            </Container>
        </div>
    )
}

export default ContactComp;