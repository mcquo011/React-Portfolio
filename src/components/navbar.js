import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../assets/css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faFileAlt,
  faBars
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
return (
  <nav className="navbar">
    <div className="mm-link">M.M.</div>
    <button onClick={toggleNavbar} className="navbar-toggle">
      <FontAwesomeIcon icon={faBars} />
    </button>
    <ul className={`nav-links ${isCollapsed ? "collapsed" : ""}`}>
      <li>
        <Link to="/" className="nav-link" onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={faHome}
            className="icon"
            style={{ fontSize: "1.2rem" }}
          />{" "}
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link" onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={faUser}
            className="icon"
            style={{ fontSize: "1.2rem" }}
          />{" "}
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" className="nav-link" onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={faFolderOpen}
            className="icon"
            style={{ fontSize: "1.2rem" }}
          />{" "}
          Projects
        </Link>
      </li>
      <li>
        <Link to="/resume" className="nav-link" onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={faFileAlt}
            className="icon"
            style={{ fontSize: "1.2rem" }}
          />{" "}
          Resume
        </Link>
      </li>

      <li>
        <Link to="/contact" className="nav-link" onClick={toggleNavbar}>
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
