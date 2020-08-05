import React from "react";
import "./socialfollow.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faGithub,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"

function SocialFollow (){
    return (
        <div className ="social-container">
            <h3>My Email yenghuevang@gmail.com</h3>
            <a href="https://github.com/YengHV" className="github social"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/yeng-vang-b510a71a3/" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/yeng-vang-b510a71a3/" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
            

        </div>
    )
}

export default SocialFollow;
