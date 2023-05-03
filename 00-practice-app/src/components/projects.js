import React from "react";
import "../assets/css/project.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";


function Projects() {
  const projects = [
    {
      name: "Be For Reel",
      image: project1,
      github: "https://github.com/example/project1",
      liveUrl: "https://be-for-reel.herokuapp.com/",
      technologies: ["React/", "Node/", "Express/", "JavaScript"],
    },
    {
      name: "Hungee!",
      image: project2,
      github: "https://github.com/example/project2",
      liveUrl: "https://example.com/project2", // Add the correct live URL
      technologies: ["JavaScript/", "Edamam API/", "Bulma"],
    },
    {
      name: "Note Taker",
      image: project3,
      github: "https://github.com/example/project3",
      liveUrl: "https://example.com/project3", // Add the correct live URL
      technologies: ["Node.js/", "Express"],
    },
    {
      name: "Text Editor",
      image: project4,
      github: "https://github.com/example/project4",
      liveUrl: "https://example.com/project4", // Add the correct live URL
      technologies: ["idb/", "Webpack/", "Workbox"],
    },
    {
      name: "Employee Tracker",
      image: project5,
      github: "https://github.com/example/project5",
      liveUrl: "https://example.com/project5", // Add the correct live URL
      technologies: ["Node.js/", "MySQL/", "JavaScript"],
    },
    {
      name: "Weather App",
      image: project6,
      github: "https://github.com/example/project6",
      liveUrl: "https://example.com/project6", // Add the correct live URL
      technologies: ["JavaScript/", "Open Weather API"],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </a>
            <div className="project-image-overlay">
              <div
                className="project-name"
                style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
              >
                {project.name}
              </div>
              <div className="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
