import React from "react";
import "../assets/css/resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resumeTitle">Resume</h1>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>

      <h2>Certification</h2>
      <p>Full Stack Web Development Certificate from X University</p>

      <a href="/path/to/your/resume.pdf" download>
        <button className="download-button">Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
