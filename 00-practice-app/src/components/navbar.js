// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <FontAwesomeIcon icon={faUser} className="icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            <FontAwesomeIcon icon={faFolderOpen} className="icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact
          </Link>
        </li>
      </ul>
      <Footer />
    </nav>
  );
}

export default Navbar;
