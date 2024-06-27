import React from "react";

import image from "../../assets/hello.jpg";
import TypeComponent from "./TypeComponent";
import "./Home.css";

import { PiHandWavingFill } from "react-icons/pi";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="home-container">
        <div className="home-left home-side">
          <div className="home-heading">
            Hi!
            <span className="wave-icon">
              <PiHandWavingFill />
            </span>
            , Shrabya here
          </div>

          <div className="home-role">
            I am a
            <span className="role">
              <TypeComponent />
            </span>
          </div>
          <div className="home-desc">
            I’m <span>Shrabya</span>, a developer dedicated to making the world
            a better place one line of code at a time.
          </div>

          <a href="#Contact" className="home-btn">
            Hire Me
          </a>
        </div>
        <div className="home-right home-side">
          <div className="absolute icons icon-dots">
            <a
              href="https://github.com/Shrabya35"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="absolute icons icon-cube">
            <a
              href="https://www.instagram.com/shrabya35/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c6307f" }}
            >
              <FaInstagram />
            </a>
          </div>
          <div className="absolute icons icon-circle">
            <a
              href="https://www.buymeacoffee.com/shrabya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffdc0c" }}
            >
              <SiBuymeacoffee />
            </a>
          </div>
          <div className="absolute icons icon-zigzag">
            <a
              href="https://www.facebook.com/shrabyaraj.ghimire"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0965fe" }}
            >
              <FaFacebook />
            </a>
          </div>
          <div className="home-img">
            <img src={image} alt="home-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
