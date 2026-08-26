import React from "react";
import { Element } from "react-scroll";
import "./WhatICanDo.css";

const abilities = [
  {
    number: "01",
    icon: "⚛",
    title: "Build React Applications",
    description:
      "Build responsive and maintainable interfaces using React, reusable components, hooks and modern frontend practices.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Integrate REST APIs",
    description:
      "Connect frontend applications with APIs, handle responses, manage loading and error states, and display dynamic data.",
  },
  {
    number: "03",
    icon: "◈",
    title: "Responsive UI Development",
    description:
      "Create responsive interfaces that work across desktop, tablet and mobile devices using HTML, CSS and modern layout techniques.",
  },
  {
    number: "04",
    icon: "◇",
    title: "Convert Designs to Code",
    description:
      "Translate Figma and UI designs into clean, responsive React interfaces while maintaining consistent spacing and visual structure.",
  },
  {
    number: "05",
    icon: "⚙",
    title: "Build Functional Features",
    description:
      "Develop forms, CRUD functionality, dashboards, filtering, authentication and interactive user experiences.",
  },
  {
    number: "06",
    icon: "</>",
    title: "Debug & Improve",
    description:
      "Identify frontend issues, debug application behaviour and continuously improve usability, functionality and code quality.",
  },
];

function WhatICanDo() {
  return (
    <Element name="what-i-can-do" className="section what-section">

      <div className="section-label">
        WHAT I CAN DO
      </div>

      <h2 className="section-title">
        Turning ideas into <span className="gradient-text">working interfaces</span>
      </h2>

      <p className="section-subtitle">
        I focus on building practical frontend applications rather than
        simply writing code. Here's what I can bring to a development team.
      </p>

      <div className="ability-grid">

        {abilities.map((ability) => (
          <div className="ability-card" key={ability.number}>

            <div className="ability-top">
              <span className="ability-number">
                {ability.number}
              </span>

              <span className="ability-icon">
                {ability.icon}
              </span>
            </div>

            <h3>{ability.title}</h3>

            <p>{ability.description}</p>

            <div className="ability-line"></div>

          </div>
        ))}

      </div>

    </Element>
  );
}

export default WhatICanDo;