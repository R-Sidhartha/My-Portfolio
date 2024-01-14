import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import mypic from "../Pics/mypic8.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About ME</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={mypic} alt="about img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ year Experience</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+</small>
            </article>
            <article className="about_card">
              <GrProjects className="about_icon" />
              <h5>Projects</h5>
              <small>10 Completed Projects</small>
            </article>
          </div>
          <p>
            I'm R Sidharth, a final-year Mechanical Engineering student at IIT
            Kanpur. Passionate about technology, especially web development.
            Eager to contribute expertise to innovative and growth-oriented
            professional environments.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
