import React from "react";

import Education from "./Education";
import Skills from "./SKills";

import AboutImg from "../../assets/about.png";
import AboutMob from "../../assets/about-mob.png";
import SrchImg from "../../assets/search.png"
import Curly from "../../assets/curly.png"
import PHP from "../../assets/php.png"
import Div from "../../assets/div.png"
import CV from "../../assets/CV.pdf";

import { IoMdCloudDownload } from "react-icons/io";

import "./About.css";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="about-title">About Me</div>
      <div className="about-container">
        <div className="about-left">
          <p>
            Hi there! 👋 I'm Shrabya, a passionate programmer dedicated to
            crafting user-friendly and responsive web applications. My skills
            span across various technologies, including HTML, CSS, JavaScript,
            and Python.
            <br />
            <br />
            I'm on a journey to enhance my expertise in full-stack web
            development, and I'm currently delving into technologies like
            Node.js and React. My mission is to create applications that not
            only streamline people's lives but also add significant value to
            businesses.
            <br />
            <br />
            If you have a project in mind or simply want to connect and share
            ideas, feel free to reach out! I'm always excited to collaborate and
            explore new opportunities. 🚀
          </p>
          <br />
          <a href={CV} download="cv.pdf">
            <button class="cv-btn">
              download CV <IoMdCloudDownload />{" "}
            </button>
          </a>
        </div>
        <div className="about-right">
          <div className="about-img">
          <div class="absolute icons icon-php">
        <img src={PHP} alt="about-img" />
        </div>
        <div class="absolute icons icon-search">
        <img src={SrchImg} alt="about-img" />
        </div>
        <div class="absolute icons icon-div">
        <img src={Div} alt="about-img" />
        </div>
        <div class="absolute icons icon-curly">
        <img src={Curly} alt="about-img" />
        </div>
        <div className="about-img">
        <img src={AboutImg}className="about-lap" alt="about-img" />
          <img src={AboutMob} className="about-mob" alt="about-img" />  
        </div>        
          </div>
        </div>
      </div>
      <Skills />
      <Education />
    </div>
  );
};

export default About;
