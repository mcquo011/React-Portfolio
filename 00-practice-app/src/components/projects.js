import React from "react";
import "../assets/css/project.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        <div className="project-item">
          <img src={project1} alt="Project 1" className="project-image" />
          <div className="project-title">Project 1</div>
        </div>
        <div className="project-item">
          <img src={project2} alt="Project 2" className="project-image" />
          <div className="project-title">Project 2</div>
        </div>
        <div className="project-item">
          <img src={project3} alt="Project 3" className="project-image" />
          <div className="project-title">Project 3</div>
        </div>
        <div className="project-item">
          <img src={project4} alt="Project 4" className="project-image" />
          <div className="project-title">Project 4</div>
        </div>
        <div className="project-item">
          <img src={project5} alt="Project 4" className="project-image" />
          <div className="project-title">Project 4</div>
        </div>
        <div className="project-item">
          <img src={project6} alt="Project 4" className="project-image" />
          <div className="project-title">Project 4</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
