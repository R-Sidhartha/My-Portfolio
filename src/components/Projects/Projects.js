import React, { useState } from "react";
import "./Projects.css";
import aistory from '../Pics/aistory2.png';
import inotebook from "../Pics/inotebook1.png";
import game from "../Pics/2048app.png";
import newsapp from "../Pics/news1.png";
import weatherapp from "../Pics/weatherapp1.png";
import RapidTalk from '../Pics/RapidTalk.png';
import ThreadsClone from '../Pics/ThreadsClone.png';
const projects=[
    {
      id:1,
      image:ThreadsClone,
      title:"Threads App Clone: Dynamic Communities Powered by Next.js Magic.",
      tag:"Next Js",
      github:"https://github.com/R-Sidhartha/threads-clone.git",
      demo:"https://threads-clone-silk.vercel.app/"
    },
    {
      id:2,
      image:RapidTalk,
      title:"RapidTalk - A real-time chat application built using websockets.",
      tag:"MERN Stack",
      github:"https://github.com/R-Sidhartha/RapidTalk.git",
      demo:"https://rapidtalk.onrender.com"
    },
    {
    id:3,
    image:aistory,
    title:"FictionFusionAI - A Cutting-Edge Social Storytelling Platform using MERN Stack",
    tag:"MERN Stack",
    github:"https://github.com/R-Sidhartha/AI-StoryGenerator_Frontend.git",
    demo:"https://fictionfusionai.onrender.com/"
  },
  {
    id:4,
    image:inotebook,
    title:"iNoteBook - A Dynamic MERN stack Application for a Note-Taking Solution",
    tag:"MERN Stack",
    github:"https://github.com/R-Sidhartha/iNoteBookFrontend.git",
    demo:"https://inotebook-cloudstoring.netlify.app/"
  },
  {
    id:5,
    image:game,
    title:"2048-Game - Seamlessly Crafted Game with p5 Integration and Strategic Logic",
    tag:"Frontend",
    github:"https://github.com/R-Sidhartha/2048-Game.git",
    demo:"https://two048-game-awca.onrender.com/"
  },
  {
    id:6,
    image:newsapp,
    title:"NewsExpress - A React-Powered News platform with Engaging UI and Fluid Navigation",
    tag:"Frontend",
    github:"https://github.com/R-Sidhartha/NewsExpressApp",
    demo:""
  },
  {
    id:7,
    image:weatherapp,
    title:"ForecastCentral - Aesthetic Weather insights with Real-time Data and Intuitive Design",
    tag:"Frontend",
    github:"https://github.com/R-Sidhartha/Weather-App.git",
    demo:"https://forecastcentral.netlify.app/"
  },
 
]
const tags = ["All", "MERN Stack", "Next Js", "Frontend"];
const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter(project => project.tag && project.tag.includes(selectedTag));
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="tag-buttons">
        {tags.map(tag => (
          <button
            key={tag}
            className={selectedTag === tag ? "active" : ""}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="container portfolio_container">
       {
        filteredProjects.map(({id,image,title,github,demo})=>{
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
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer" style={{display:`${demo.length===0? ' none ' : ''}`}}>
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
