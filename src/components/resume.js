import React from "react";
import "../assets/css/resume.css";
import resumeFile from "../assets/images/resume.pdf";


function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resumeTitle">Skills</h2>
      <ul className="skills-list">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>

      <h2 className="resumeTitle">Certification</h2>
      <p>
        Full Stack Web Development Certificate from The University of Minnesota
      </p>

      <a href={resumeFile} download>
        <button className="download-button">Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
