// About.jsx
import React from "react";
import { Element } from "react-scroll";
import "./About.css"

function About() {
  return (
    <Element name="about" className="about-sec">
      <div className="section about-section">
        <h2>About Me</h2>
        <p>
          Passionate React Developer with hands-on experience building E-commerce applications,
          creating responsive and user-friendly interfaces. Proficient in HTML, CSS, JavaScript,
          React, and familiar with backend technologies including Python, SQL, and core Java.
        </p>
      </div>

      <div className="about-me">
          <h1>My Journey</h1>
          <p>
            I began my journey by learning HTML, CSS, and JavaScript and gradually moved into building dynamic applications with React.
            Through hands-on projects and professional internship experience, I focus on creating responsive, user-friendly 
            web interfaces while continuously improving my development skills.
          </p>
      </div>

      <div className="Exp-Edu">
        <div className="Experience">
          <h1>Experience</h1>
          <div>
            <p className="title">FrontEnd Developer Intern</p>
            <p className="company">Tegasys Solutions UK Ltd,London</p>
            <p className="year">Dec 2025 - present</p>
          </div>
          <div>
            <p className="title">Dispatcher Part-time</p>
            <p className="company">Innofinity Worldwide,Sloane Square, London</p>
            <p className="year">May 2023 – April 2025</p>
          </div>
        </div>


        <div className="Education">
          <h1>Education</h1>
          <div className="qualification">
            <h1>Coding Diploma</h1>
            <p className="uni"> bcs The Chartered Institute for IT ,UK</p>
            <p className="year"> 2024-2025</p>
          </div>

            <div className="qualification">
            <h1>BBA</h1>
            <p className="uni"> Thiruvalluvar University,India</p>
            <p className="year"> 2019-2022</p>
          </div>
         

        </div>

      </div>
      
    </Element>
  );
}

export default About;