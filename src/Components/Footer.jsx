import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-box'>
        <div>
            <p> &copy; 2026 Preethika Subramani. All rights reserved.</p>

        </div>
        <div className='social-link'>
            <a href="https://github.com/preethikasuburamani/" target='parent'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/preethika-subramani/" target='parent'><CiLinkedin /></a>
            <a href='mailto:preethikasubramani02@gamil.com' target="parent"> <MdEmail /> </a>
        </div>

    </div>
  )
}

export default Footer