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
        <h3><span>JavaScript</span> <span>TypeScript</span> <span>SQL</span> <span>SQL</span>
          <span>HTML5</span> <span>CSS3</span> <span>Python</span> </h3>
      </div>

      <div className="framework">
        <h1> Framework</h1> 
        <h3> <span>React</span> <span>Redux</span><span>TailWind css</span><span>Vite</span></h3>
      </div>

      <div className="others">
        <h1>Version control / API</h1>
        <h3><span>Git</span> <span>GitHub</span> <span>RestAPI</span> <span>JSON</span> 
        <span>Postman</span> <span>CRUC</span></h3>
      </div>

      <div className="technical">
        <h1>Technical Skills</h1>
        <h3><span>Agile</span> <span>Scrum</span> <span>Jira</span> <span>Collaboration</span>
        <span>Confluence</span></h3>
      </div>
    </Element>
  );
}

export default Skills;