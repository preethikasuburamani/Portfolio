// Skills.jsx
import React from "react";
import { Element } from "react-scroll";
import "../App.css";
import "./Skills.css"


function Skills() {
  return (
    <Element name="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="frontEnd">
        <h1>  FrontEnd Development</h1>
        <h3>JavaScript, TypeScript, SQL, HTML5, CSS3, python</h3>
      </div>

      <div className="framework">
        <h1> Framework</h1> 
        <h3> React, Redux, Tailwind css, Vite </h3>
      </div>

      <div className="others">
        <h1>Version control / API</h1>
        <h3>Git, GitHub, RestAPI, JSON, Postman, CRUD</h3>
      </div>

      <div className="technical">
        <h1>Technical Skills</h1>
        <h3>Agile, Scrum, Jira, Collaboration, Confluence</h3>
      </div>
    </Element>
  );
}

export default Skills;