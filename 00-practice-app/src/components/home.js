// src/pages/HomePage.js
import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


function Home() {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Maggie McQuown</h1>
        <p>I'm a developer lol not really</p>
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
