// Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Preethika Subramani</h2>
        <div className="nav-links">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;