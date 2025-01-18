import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Sidharth</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://instagram.com/_enigmatic_journey?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" ><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/r-sidhartha-003a17262" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
            <a href="https://www.threads.net/@_enigmatic_journey" target="_blank" rel="noopener noreferrer" ><FaThreads /></a>
            <a href="https://github.com/R-Sidhartha" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; R Sidhartha. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
