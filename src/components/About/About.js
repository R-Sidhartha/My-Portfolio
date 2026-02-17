import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
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
              <small>2+ year Experience</small>
            </article>
            <article className="about_card">
              <FaUniversity className="about_icon" />
              <h5>Education</h5>
              <small>Mechanical Engineering, IITK 2024</small>
            </article>
            <article className="about_card">
              <GrProjects className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
          I'm R Sidhartha, an IIT Kanpur graduate and Software Developer currently leading high-impact product engineering initiatives in a production-grade B2B SaaS environment. I specialize in architecting scalable full-stack systems, migrating legacy monoliths to modern modular architectures, and driving measurable performance improvements across complex applications. As the Founder of an AI-powered SaaS platform, I’ve built and scaled secure, high-performance systems integrating OpenAI APIs, Redis caching, real-time PDF generation, and subscription billing workflows. With advanced expertise in Next.js, React, Node.js, TypeScript, Prisma, PostgreSQL, and system design, I combine deep technical ownership with strong product thinking to build reliable, scalable, and business-driven software solutions for ambitious teams.
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
