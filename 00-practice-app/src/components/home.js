import React from "react";
import "../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../assets/images/me.jpg";
import Typewriter from "./typewriter"; // Import the Typewriter component

function Home() {
  const phrases = [
    "Full stack web developer",
    "Woman in Tech",
    "Deep passion for both technology and the environment",
  ];

  return (
    <div className="home-container">
      <img src={myPhoto} alt="Maggie McQuown" className="profile-photo" />
      <div>
        <h1 className="title">Maggie McQuown</h1>
        <Typewriter phrases={phrases} />
        <div className="social-media-icons">
          <a
            href="https://www.github.com/mcquo011"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.twitter.com/your_username"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/maggie-mcquown/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
