import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_z6oiyw9",
        "template_f32436e",
        form.current,
        "lbzQzAY7R2OU2-kQC"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <Element name="contact" className="section contact-section">

      <div className="section-label">
        CONTACT
      </div>

      <h2 className="section-title">
        Let's build something <span className="gradient-text">together</span>
      </h2>

      <p className="section-subtitle">
        I'm currently open to Junior Front-End Developer and React
        Developer opportunities. Feel free to get in touch.
      </p>

      <div className="contact-grid">

        <div className="contact-info">

          <h3>Let's connect</h3>

          <p>
            Whether you have an opportunity, a project or simply want
            to connect, I'd be happy to hear from you.
          </p>

          <div className="contact-details">

            <a href="mailto:preethikasubramani02@gmail.com">
              <span>✉</span>
              <div>
                <small>Email</small>
                <strong>preethikasubramani02@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/preethika-subramani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>in</span>
              <div>
                <small>LinkedIn</small>
                <strong>Connect with me</strong>
              </div>
            </a>

            <a
              href="https://github.com/preethikasuburamani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>↗</span>
              <div>
                <small>GitHub</small>
                <strong>View my repositories</strong>
              </div>
            </a>

          </div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="form-group">
            <label>Your Name</label>

            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              placeholder="Tell me about the opportunity or project..."
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message →"}
          </button>

        </form>

      </div>

    </Element>
  );
}

export default Contact;