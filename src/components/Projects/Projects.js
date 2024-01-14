import React from "react";
import "./Projects.css";
import aistory from '../Pics/aistory2.png';
import inotebook from "../Pics/inotebook1.png";
import game from "../Pics/2048app.png";
import newsapp from "../Pics/news1.png";
import weatherapp from "../Pics/weatherapp1.png";
const projects=[
  {
    id:1,
    image:aistory,
    title:"FictionFusionAI - A Cutting-Edge Social Storytelling Platform using MERN Stack",
    github:"https://github.com/R-Sidhartha/AI-StoryGenerator_Frontend.git",
    demo:"https://fictionfusionai.onrender.com/"
  },
  {
    id:2,
    image:inotebook,
    title:"iNoteBook - A Dynamic MERN stack Application for a Note-Taking Solution",
    github:"https://github.com/R-Sidhartha/iNoteBookFrontend.git",
    demo:"https://inotebook-cloudstoring.netlify.app/"
  },
  {
    id:2,
    image:game,
    title:"2048-Game: Seamlessly Crafted Game with p5 Integration and Strategic Logic",
    github:"https://github.com/R-Sidhartha/2048-Game.git",
    demo:"https://two048-game-awca.onrender.com/"
  },
  {
    id:2,
    image:newsapp,
    title:"NewsExpress: A React-Powered News platform with Engaging UI and Fluid Navigation",
    github:"https://github.com/R-Sidhartha/NewsExpressApp",
    demo:"http://demo"
  },
  {
    id:2,
    image:weatherapp,
    title:"ForecastCentral: Aesthetic Weather insights with Real-time Data and Intuitive Design",
    github:"https://github.com/R-Sidhartha/Weather-App.git",
    demo:"https://forecastcentral.netlify.app/"
  },
]
const Projects = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       {
        projects.map(({id,image,title,github,demo})=>{
          return (
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt="1st project" />
            </div>
            <h5>{title}</h5>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  );
};

export default Projects;
