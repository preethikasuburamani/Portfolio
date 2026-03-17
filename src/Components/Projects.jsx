// Projects.jsx
import React from "react";
import { Element } from "react-scroll";
import "../App.css";
import "./Projects.css"

function Projects() {


  return (
    <Element name="projects" className="section projects-section">
      <h2>Projects</h2>
     
      <div className="project">

        <div>
          <h2>E-Commerce SHOPHUB</h2>
          <p>React, JS, CSS</p>
          <p>Developed a high-performance e-commerce interface with dynamic product 
            filtering and responsive UI.
          </p>
          <div className="links">
            <a href="https://github.com/preethikasuburamani/ShopHub" target="_blank" className="gitlink">Code</a>
            <a href="https://shop-hub-lime.vercel.app/" target="_blank" className="livelink"> Live Demo</a>
          </div>
        </div>

         <div>
          <h2>Telecom Call Analysis</h2>
          <p>React, JS, Tailwind css,shadcn, Recharts</p>
          <p>Developed analytics dashboards to monitor these call records in order to:Track call activity, Analyze customer engagement
             Monitor call success rates, Analyze call costs, Identify calling patterns
          </p>
          <div className="links">
           <a href="https://github.com/preethikasuburamani/Telecom-Call-Dashboard" target="_blank" className="gitlink">code</a>
            <a href="https://telecom-call-dashboard.vercel.app/" target="_blank" className="livelink"> Live Demo</a>
          </div>
        </div>
        

        <div>
          <h2>TODO Lsit</h2>
          <p>React, JS, Tailwind css</p>
          <p>Built a task management application that allows users to add, edit, and delete tasks with persistent state updates. 
            Showcases practical skills in DOM manipulation, event handling, and clean UI design using HTML, CSS, and JavaScript
          </p>
          <div className="links">
            <a href="https://github.com/preethikasuburamani/TODOList" target="_blank" className="gitlink">Code</a>
            <a href="https://todo-list-silk-gamma-62.vercel.app/" target="_blank" className="livelink"> Live Demo</a>
          </div>
        </div>

        <div>
          <h2>NOVA static web application</h2>
          <p>HTML5 , css3</p>
          <p>This website serves as a personal portfolio to showcase my skills in web design and development.
             I specialize in crafting captivating online experiences that balance form and function. 
             The site is designed to be sleek and professional, using a dark theme to create a modern, high-contrast look.
          </p>
          <div className="links">
           <a href="https://github.com/preethikasuburamani/Black-and-White-responsive-cross-browser-compatible-interfaces" target="_blank" className="gitlink">code</a>
            <a href="https://preethikasuburamani.github.io/Black-and-White-responsive-cross-browser-compatible-interfaces/index.html" target="_blank" className="livelink"> Live Demo</a>
          </div>
        </div>


          <div>
          <h2>Weather Reporter</h2>
          <p>React, JS, Tailwind css</p>
          <p>Developed a responsive weather application that retrieves real-time weather data using an external API and displays key information such as temperature and weather conditions. 
            Demonstrates skills in API integration, JavaScript, and dynamic data rendering
          </p>
          <div className="links">
           <a href="https://github.com/preethikasuburamani/WeatherAPI" target="_blank" className="gitlink">code</a>
            <a href="https://weather-api-five-virid.vercel.app/" target="_blank" className="livelink"> Live Demo</a>
          </div>
        </div>


      </div>
    </Element>
  );
}

export default Projects;