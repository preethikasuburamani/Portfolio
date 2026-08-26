import React from "react";
import { Element } from "react-scroll";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Technologies I use to build modern web interfaces.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS / SCSS",
      "Responsive Design",
    ],
  },
  {
    title: "State & Frameworks",
    description: "Tools I use to structure and manage frontend applications.",
    skills: [
      "Redux Toolkit",
      "React Hooks",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "API & Data",
    description: "Working with external services and application data.",
    skills: [
      "REST APIs",
      "JSON",
      "Firebase",
      "Firestore",
      "SQL",
      "Postman",
      "CRUD",
    ],
  },
  {
    title: "Development Tools",
    description: "Tools and practices used in my development workflow.",
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Confluence",
      "Agile",
      "Scrum",
      "Figma",
    ],
  },
];

function Skills() {
  return (
    <Element name="skills" className="section skills-section">

      <div className="section-label">
        TECHNICAL SKILLS
      </div>

      <h2 className="section-title">
        Tools I use to <span className="gradient-text">build</span>
      </h2>

      <p className="section-subtitle">
        A practical toolkit built through projects, learning and
        hands-on development experience.
      </p>

      <div className="skills-grid">

        {skillGroups.map((group, index) => (
          <div className="skill-card" key={group.title}>

            <div className="skill-card-number">
              0{index + 1}
            </div>

            <h3>{group.title}</h3>

            <p className="skill-description">
              {group.description}
            </p>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </Element>
  );
}

export default Skills;