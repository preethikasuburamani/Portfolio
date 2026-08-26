import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-box">

      <div className="footer-content">

        <p>
          © 2026 Preethika Subramani. Built with React.
        </p>

        <div className="social-link">

          <a
            href="https://github.com/preethikasuburamani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/preethika-subramani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:preethikasubramani02@gmail.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;