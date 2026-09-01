import React from "react";
import { Element } from "react-scroll";
import "./Projects.css";

const projects = [
  {
    featured: true,
    category: "AI / React / TypeScript",
    title: "GRFI — AI Interview Practice Platform",
    description:
      "An AI-powered interview practice platform designed to help candidates prepare for interviews through AI-generated questions, voice interaction and real-time interview features.",
    technologies: [
      "React",
      "TypeScript",
      "AI",
      "Speech-to-Text",
      "Text-to-Speech",
    ],
    image: "https://github.com/user-attachments/assets/99e5d5e9-388b-4e84-8672-5c2c385d9524",
    github: "https://github.com/preethikasuburamani/GRFI",
    live: "https://grfi-hyclapp6d-preethikas-projects-749b9ea0.vercel.app/",
    status: "Featured Project",
  },

  {
    category: "React / TypeScript / Firebase",
    title: "Trackly — AI Job Tracker",
    description:
      "An AI-powered job application tracker with a responsive dashboard, Firebase authentication, Firestore data storage and AI-assisted features for managing the job search process.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "AI",
      "Shadcn UI",
    ],
    image:
      "https://github.com/user-attachments/assets/2529f58d-bff9-4bc9-a630-afed45676edc",
    github:
      "https://github.com/preethikasuburamani/AI-Powered-Job-Tracker",
    live: "https://ai-powered-job-tracker-fawn.vercel.app/",
    status: "Live Project",
  },

  {
    category: "React / Redux / REST API",
    title: "ShopHub — E-Commerce Application",
    description:
      "A responsive e-commerce application using React and Redux Toolkit, integrating REST APIs for product data with product filtering, cart management and reusable UI components.",
    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "REST API",
      "CSS",
    ],
    image:
      "https://github.com/user-attachments/assets/597a9109-250f-4148-8135-c176eaf22783",
    github: "https://github.com/preethikasuburamani/ShopHub",
    live: "https://shop-hub-lime.vercel.app/",
    status: "Live Project",
  },

  {
    category: "React / Dashboard / Data Visualisation",
    title: "Telecom Call Analysis Dashboard",
    description:
      "A responsive analytics dashboard for monitoring call records, activity, customer engagement, success rates, call costs and calling patterns through data visualisation.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Recharts",
    ],
    image:
      "https://github.com/user-attachments/assets/51dc65da-c221-40ee-b0b4-e34ef65e7cf3",
    github:
      "https://github.com/preethikasuburamani/Telecom-Call-Dashboard",
    live: "https://telecom-call-dashboard.vercel.app/",
    status: "Live Project",
  },

  {
  category: "React / JavaScript / SASS",
  title: "TaskFlow — Task Management App",
  description:
    "A responsive task management application that allows users to create, edit, complete and delete tasks through a clean and intuitive interface. Built with reusable React components and interactive state management.",
  technologies: [
    "React",
    "JavaScript",
    "SASS",
    "HTML5",
    "CSS3",
  ],
  image:
    "https://github.com/user-attachments/assets/2b3d1460-6f12-4260-91b6-121e99df9eb2",
  github:
    "https://github.com/preethikasuburamani/TODOList",
  live:
    "https://todo-list-silk-gamma-62.vercel.app/",
  status: "Live Project",
},
];

function Projects() {
  return (
    <Element name="projects" className="section projects-section">

      <div className="section-label">
        SELECTED WORK
      </div>

      <h2 className="section-title">
        Projects that show what I can <span className="gradient-text">build</span>
      </h2>

      <p className="section-subtitle">
        A selection of projects demonstrating React development,
        API integration, responsive UI development and application logic.
      </p>

      <div className="projects-container">

        {projects.map((project, index) => (
          <article
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            key={project.title}
          >

            <div className="project-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="image-overlay">
                <span>{project.status}</span>
              </div>

            </div>

            <div className="project-content">

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">

                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary-project-link"
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <span className="project-link disabled-link">
                    GitHub
                  </span>
                )}

                {project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary-project-link"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="project-link disabled-link">
                    Live Demo
                  </span>
                )}

              </div>

            </div>

          </article>
        ))}

      </div>

      <div className="projects-note">
        <p>
          More projects and experiments are available on my GitHub.
        </p>

        <a
          href="https://github.com/preethikasuburamani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub →
        </a>
      </div>

    </Element>
  );
}

export default Projects;