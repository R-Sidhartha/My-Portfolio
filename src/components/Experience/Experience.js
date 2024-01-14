import React from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="frontend_experience">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend_experience">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details_icons"/>
              <div>
                <h4>WebSockets</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
