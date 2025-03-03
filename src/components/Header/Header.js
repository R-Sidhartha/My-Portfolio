import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import mypic2 from "../Pics/mypic.jpg";
import TypeAnimationComponent from "./TypeAnimationComponent";
const Header = () => {
  const [borderRadius, setBorderRadius] = useState(
    "30% 70% 62% 38% / 44% 28% 72% 56%"
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate random values for border-radius
      const randomValues = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ];

      // Set the new border-radius values
      setBorderRadius(
        `${randomValues[0]}% ${randomValues[1]}% ${randomValues[2]}% ${randomValues[3]}% / 44% 28% 72% 56%`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>R Sidhartha</h1>
          {/* <h5 className="text-light">Full Stack developer</h5> */}
          <TypeAnimationComponent />
          <div className="cta">
            <a
              href="https://drive.google.com/file/d/1ejwMIkjuyZnoiqHKOtHf3Te9tqXJ5ri7/view?usp=sharing"
              download="Sidharth Resume.pdf"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
            {/* resume and let's talk buttons */}
          </div>
          <div
            className="me"
            style={{
              borderRadius: borderRadius,
              transition: "border-radius 1s ease-in-out",
            }}
          >
            <img width={100} height={380} src={mypic2} alt="Me" />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
          <div className="header_socials">
            <a
              href="https://instagram.com/_enigmatic_journey?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/r-sidhartha-003a17262"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.threads.net/@_enigmatic_journey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaThreads />
            </a>
            <a
              href="https://github.com/R-Sidhartha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
