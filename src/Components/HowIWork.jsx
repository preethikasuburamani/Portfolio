import React from "react";
import { Element } from "react-scroll";
import "./HowIWork.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I first understand the requirements, users and expected functionality before starting development.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "I break the requirements into components and consider the layout, data flow and responsive behaviour.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop reusable React components and connect the interface with APIs or application data.",
  },
  {
    number: "04",
    title: "Test & Debug",
    description:
      "I test the functionality, identify issues and debug problems across different screen sizes.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "I review the result and improve usability, responsiveness, code structure and overall user experience.",
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "Once the application is ready, I deploy it and verify that the production version works as expected.",
  },
];

function HowIWork() {
  return (
    <Element name="how-i-work" className="section how-work-section">

      <div className="section-label">
        MY APPROACH
      </div>

      <h2 className="section-title">
        How I <span className="gradient-text">work</span>
      </h2>

      <p className="section-subtitle">
        A simple development process that keeps the work organised,
        user-focused and focused on delivering working features.
      </p>

      <div className="work-process">

        {steps.map((step, index) => (
          <div className="work-step" key={step.number}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-content">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>

            {index !== steps.length - 1 && (
              <div className="step-connector"></div>
            )}

          </div>
        ))}

      </div>

    </Element>
  );
}

export default HowIWork;