import React from "react";
import "../assets/css/about.css";
import aboutImage from "../assets/images/about.jpg";

function AboutPage() {
  return (
    <div className="about-page">
      <img src={aboutImage} alt="About" className="about-image" />
      <div className="about-title">
        <h1>About</h1>
        <p className="about-text">
          Hi there! My name is Maggie and I am an emerging Full Stack Web
          Developer with a background in Fisheries Biology. With a deep passion
          for both technology and the environment, I am excited to combine my
          skills to create innovative solutions that can help address some of
          the pressing challenges facing our planet today. If you are looking
          for a Full Stack Web Developer with a passion for environmental
          conservation and a commitment to innovation, please feel free to get
          in touch!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
