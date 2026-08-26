import React from "react";
import { Element, scroller } from "react-scroll";
import "./Home.css";

function Home() {
  const handleViewWork = () => {
    scroller.scrollTo("projects", {
      smooth: true,
      duration: 700,
      offset: -60,
    });
  };

  const handleContact = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 700,
      offset: -60,
    });
  };

  return (
    <Element name="home" className="home-section">

      <div className="home-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="home-content">

        <div className="availability">
          <span></span>
          Open to Junior Front-End Opportunities
        </div>

        <p className="hello">Hello, I'm Preethika 👋</p>

        <h1>
          Junior Front-End Developer
          <br />
          <span className="gradient-text">Specialising in React</span>
        </h1>

        <p className="home-description">
          I build responsive, user-focused web applications using React,
          JavaScript, TypeScript, REST APIs and modern frontend technologies.
        </p>

        <div className="home-buttons">

          <button
            className="primary-btn"
            onClick={handleViewWork}
          >
            View My Projects
            <span>→</span>
          </button>

          <button
            className="secondary-btn"
            onClick={handleContact}
          >
            Let's Connect
          </button>
          <a
            href={`${import.meta.env.BASE_URL}CV/Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            Download CV
          </a>

        </div>

        <div className="home-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>REST APIs</span>
        </div>

      </div>

      <div className="profile-container">

        <div className="profile-ring"></div>

        <div className="profile-image">
          <img
            src="/Image/ProfilePic.png"
            alt="Preethika Subramani"
          />
        </div>

        <div className="floating-card card-react">
          <span>⚛</span>
          React
        </div>

        <div className="floating-card card-code">
          <span>{"</>"}</span>
          Frontend
        </div>

      </div>

    </Element>
  );
}

export default Home;