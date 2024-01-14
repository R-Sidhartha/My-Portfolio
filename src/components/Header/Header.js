import React from "react";
import './Header.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import mypic2 from '../Pics/mypic3.jpg'
const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>R Sidhartha</h1>
          <h5 className="text-light">Full Stack developer</h5>
          <div className="cta">
            <a href="https://drive.google.com/file/d/1ejwMIkjuyZnoiqHKOtHf3Te9tqXJ5ri7/view?usp=sharing" download="Sidharth Resume.pdf" className="btn" target="_blank">
              My Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
            {/* resume and let's talk buttons */}
          </div>
          <div className="me">
            <img src={mypic2} alt="Me" />
          </div>
          <a href="#contact" className="scroll_down">Scroll Down</a>
          <div className="header_socials">
            <a href="https://instagram.com/sid_an_enigmatic_story_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" ><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/r-sidhartha-003a17262" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
            <a href="https://www.threads.net/@sid_an_enigmatic_story_" target="_blank" rel="noopener noreferrer" ><FaThreads /></a>
            <a href="https://github.com/R-Sidhartha" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
