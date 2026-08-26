import React from "react";
import { Element } from "react-scroll";
import "../App.css";
import "./Projects.css";

function Projects() {
  return (
    <Element name="projects" className="section projects-section">
      <h2>Projects</h2>

      <div className="project">

        {/* Trackly */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/user-attachments/assets/2529f58d-bff9-4bc9-a630-afed45676edc"
              alt="Trackly Job Tracker"
            />
          </div>

          <div className="project-content">
            <h2>Trackly [Job Tracker]</h2>

            <p className="tech-stack">
              React, TypeScript, JavaScript, SASS/SCSS, AI, Shadcn
            </p>

            <p>
              AI-powered job tracker using React, TypeScript, and Shadcn UI
              with a responsive dashboard. Integrated Firebase for
              authentication and real-time data storage. Added LLM-based AI
              features to simplify and optimize job application management.
            </p>
          </div>

          <div className="links">
            <a
              href="https://github.com/preethikasuburamani/AI-Powered-Job-Tracker"
              target="_blank"
              rel="noreferrer"
              className="gitlink"
            >
              Code
            </a>

            <a
              href="https://ai-powered-job-tracker-fawn.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="livelink"
            >
              Live Demo
            </a>
          </div>
        </div>


        {/* ShopHub */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/user-attachments/assets/597a9109-250f-4148-8135-c176eaf22783"
              alt="ShopHub E-Commerce"
            />
          </div>

          <div className="project-content">
            <h2>E-Commerce SHOPHUB</h2>

            <p className="tech-stack">
              React, JavaScript, CSS
            </p>

            <p>
              Built a responsive e-commerce application using React and Redux Toolkit, 
              integrating REST APIs for product data and implementing product filtering, cart management and reusable UI components.
            </p>
          </div>

          <div className="links">
            <a
              href="https://github.com/preethikasuburamani/ShopHub"
              target="_blank"
              rel="noreferrer"
              className="gitlink"
            >
              Code
            </a>

            <a
              href="https://shop-hub-lime.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="livelink"
            >
              Live Demo
            </a>
          </div>
        </div>


        {/* Telecom */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/user-attachments/assets/51dc65da-c221-40ee-b0b4-e34ef65e7cf3"
              alt="Telecom Call Analysis Dashboard"
            />
          </div>

          <div className="project-content">
            <h2>Telecom Call Analysis</h2>

            <p className="tech-stack">
              React, JavaScript, Tailwind CSS, Shadcn, Recharts
            </p>

            <p>
              Developed analytics dashboards to monitor call records,
              track call activity, analyze customer engagement, monitor
              success rates, analyze call costs, and identify calling
              patterns.
            </p>
          </div>

          <div className="links">
            <a
              href="https://github.com/preethikasuburamani/Telecom-Call-Dashboard"
              target="_blank"
              rel="noreferrer"
              className="gitlink"
            >
              Code
            </a>

            <a
              href="https://telecom-call-dashboard.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="livelink"
            >
              Live Demo
            </a>
          </div>
        </div>


        {/* TODO */}
        <div className="project-card">
          <div className="project-image">
            <img
              src= "https://github.com/user-attachments/assets/2b3d1460-6f12-4260-91b6-121e99df9eb2"
              alt="TODO List Application"
            />
          </div>

          <div className="project-content">
            <h2>TODO List</h2>

            <p className="tech-stack">
              React, JavaScript, Sass
            </p>

            <p>
              Built a task management application that allows users to add,
              edit, and delete tasks with persistent state updates.
              Showcases practical skills in DOM manipulation, event handling,
              and clean UI design.
            </p>
          </div>

          <div className="links">
            <a
              href="https://github.com/preethikasuburamani/TODOList"
              target="_blank"
              rel="noreferrer"
              className="gitlink"
            >
              Code
            </a>

            <a
              href="https://todo-list-silk-gamma-62.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="livelink"
            >
              Live Demo
            </a>
          </div>
        </div>


        {/* NOVA */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/user-attachments/assets/e33d161b-06a2-4318-8276-cecf636ee5cd"
              alt="NOVA Static Website"
            />
          </div>

          <div className="project-content">
            <h2>NOVA Static Web Application</h2>

            <p className="tech-stack">
              HTML5, CSS3
            </p>

            <p>
              A sleek and professional responsive website designed with a
              modern dark theme and high-contrast UI, demonstrating skills
              in web design and development.
            </p>
          </div>

          <div className="links">
            <a
              href="https://github.com/preethikasuburamani/Black-and-White-responsive-cross-browser-compatible-interfaces"
              target="_blank"
              rel="noreferrer"
              className="gitlink"
            >
              Code
            </a>

            <a
              href="https://preethikasubramani.github.io/Black-and-White-responsive-cross-browser-compatible-interfaces/index.html"
              target="_blank"
              rel="noreferrer"
              className="livelink"
            >
              Live Demo
            </a>
          </div>
        </div>


        {/* Weather */}
        <div className="project-card">
          <div className="project-image">
            <img
              src= "https://github.com/user-attachments/assets/0696b2ca-c4f5-4de7-819f-a7bac5ea9432"
              alt="Weather Reporter Application"
            />
          </div>

          <div className="project-content">
            <h2>Weather Reporter</h2>

            <p className="tech-stack">
              React, JavaScript, Tailwind CSS
            </p>

            <p>
              Developed a responsive weather application that retrieves
              real-time weather data using an external API and displays
              temperature and weather conditions dynamically.
            </p>
          </div>

          <div className="links">
            <a
              href="https://github.com/preethikasuburamani/WeatherAPI"
              target="_blank"
              rel="noreferrer"
              className="gitlink"
            >
              Code
            </a>

            <a
              href="https://weather-api-five-virid.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="livelink"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </Element>
  );
}

export default Projects;