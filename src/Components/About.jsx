import React from "react";
import { Element } from "react-scroll";
import "./About.css";

function About() {
  return (
    <Element name="about" className="section about-section">

      <div className="about-header">
        <div className="section-label">
          ABOUT ME
        </div>

        <h2 className="section-title">
          A developer who enjoys <span className="gradient-text">building</span>
        </h2>

        <p className="section-subtitle">
          I enjoy turning ideas and designs into responsive, functional
          web applications while continuously improving my frontend skills.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-story">

          <div className="about-card">

            <div className="card-heading">
              <span className="heading-icon">01</span>
              <h3>My Journey</h3>
            </div>

            <p>
              I started my development journey by learning HTML, CSS and
              JavaScript and gradually moved into building dynamic
              applications with React.
            </p>

            <p>
              Through hands-on projects and professional experience, I have
              developed an interest in creating responsive interfaces,
              integrating APIs and building practical applications that
              solve real problems.
            </p>

            <p>
              I'm currently focused on growing as a Front-End Developer,
              strengthening my React and TypeScript skills and learning
              modern development practices.
            </p>

          </div>

        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <span className="timeline-date">
                Dec 2025 — Present
              </span>

              <h3>Front-End Developer Intern</h3>

              <p className="timeline-company">
                Tegasys Solutions UK Ltd · London
              </p>

              <p>
                Working with frontend technologies to build and improve
                web interfaces and develop practical development experience.
              </p>
            </div>
          </div>

         

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <span className="timeline-date">
                May 2023 — May 2025
              </span>

              <h3>Mobile Phone Tester</h3>

              <p className="timeline-company">
                Innofinity Worldwide, London, UK
              </p>

              <p>
                Tested mobile devices, identified technical issues, documented defects,
                and reported results accurately.
              </p>
            </div>
          </div>

        
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <span className="timeline-date">
                Jan 2024 — Dec 2025
              </span>

              <h3>Coding Diploma</h3>

              <p className="timeline-company">
                BCS, The Chartered Institute for IT · UK
              </p>

              <p>
                Studied software development and strengthened my foundation
                in programming and web development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <span className="timeline-date">
                Jan 2019 — Aug 2022
              </span>

              <h3>BBA</h3>

              <p className="timeline-company">
                Thiruvalluvar University · India
              </p>
            </div>
          </div>

        </div>

      </div>

    </Element>
  );
}

export default About;