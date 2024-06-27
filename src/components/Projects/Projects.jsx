import React from "react";

import Project1 from "../../assets/lynxline.png";
import Project2 from "../../assets/net-nest.png";
import Project3 from "../../assets/sangeet.png";
import "./Projects.css";

import { FaGithub } from "react-icons/fa";
import { FaLink, FaCodeMerge } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="ptitle">
        <div className="project-title">My Projects</div>
      </div>
      <div className="project-container">
        <div className="project-1 project-card">
          <img src={Project1} alt="" />
          <div className="project-detail">
            <div className="project-card-title">LynxLine</div>
            <div className="project-desc">
              A modern e-commerce platform built with the MERN stack.
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/Shrabya35/Flooring"
                target="_blank"
                rel="noopener noreferrer"
                className="project-rm"
              >
                Read More
              </a>
              <a
                href="https://github.com/Shrabya35/LynxLine"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                <FaGithub />
              </a>
              <div
                href="https://shrabya35.github.io/Flooring/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-none project-link "
              >
                <FaLink />
              </div>
            </div>
          </div>
        </div>

        <div className="project-2 project-card">
          <img src={Project2} alt="" />
          <div className="project-detail">
            <div className="project-card-title">Net Nest</div>
            <div className="project-desc">
              Premier League Real Time stats site powered by React.js.
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/Shrabya35/Movie-Hub/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="project-rm"
              >
                Read More
              </a>
              <a
                href="https://github.com/Shrabya35/Movie-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                <FaGithub />
              </a>
              <a
                href="https://shrabya35.github.io/Movie-Hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>

        <div className="project-3 project-card">
          <img src={Project3} alt="" />
          <div className="project-detail">
            <div className="project-card-title">Sangeet </div>
            <div className="project-desc">
              A spotify clone made with Html,Css and Javascript
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/Shrabya35/sangeet/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="project-rm"
              >
                Read More
              </a>
              <a
                href="https://github.com/Shrabya35/sangeet"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                <FaGithub />
              </a>
              <a
                href="https://shrabya35.github.io/sangeet/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/Shrabya35?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="more-projects project-rm"
      >
        More Projects <FaCodeMerge />
      </a>
    </div>
  );
};

export default Projects;
