import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../assets/css/navbar.css";
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
            <FontAwesomeIcon
              icon={faHome}
              className="icon"
              style={{ fontSize: "1.2rem" }}
            />{" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <FontAwesomeIcon
              icon={faUser}
              className="icon"
              style={{ fontSize: "1.2rem" }}
            />{" "}
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="icon"
              style={{ fontSize: "1.2rem" }}
            />{" "}
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon"
              style={{ fontSize: "1.2rem" }}
            />{" "}
            Contact
          </Link>
        </li>
      </ul>
      {/* <Footer /> */}
    </nav>
  );
}

export default Navbar;
