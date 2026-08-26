import React from "react";
import { Link } from "react-scroll";
import "../App.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="logo"
        >
          Preethika<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>

          <Link to="about" smooth={true} duration={500}>
            About
          </Link>

          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>

          <Link to="how-i-work" smooth={true} duration={500}>
            How I Work
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-cta"
        >
          Let's Talk
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;