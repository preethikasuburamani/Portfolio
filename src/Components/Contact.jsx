// Contact.jsx
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Element } from "react-scroll";
import "../App.css";
import "./Contact.css"



function Contact() {

  


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
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
      alert("Failed to send message.");
    });
  };


  return (
    <Element name="contact" className="section contact-section">
       <h2>Get In Touch</h2>
       <p className="message">Have a question or want to work together? Feel free to reach out!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

      <div className="details">
        <p>or</p>
        <p> Email: preethikasubramani02@gmail.com</p>
        <p> LinkedIn: https://www.linkedin.com/in/preethika-subramani/</p>
        <p> Phone: +44 7575121126</p>
      </div>
    
    </Element>
  );
}

export default Contact;