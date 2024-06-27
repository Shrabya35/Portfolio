import React from "react";

import "./Footer.css";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="footer-container">
        <div className="footer-start">
          <div className="footer-start-title">Shrabya | Portfolio</div>
          <div className="footer-detail">
            <p>
              <MdEmail /> shrabyaraj@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt /> Morang,Nepal
            </p>
          </div>
        </div>
        <div className="footer-mid">
          <ul className="social-links">
            <li className="social-icons">
              <a
                href="https://www.instagram.com/shrabya35/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/shrabyaraj.ghimire"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/9779746890222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:shrabyaraj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
          <ul className="footer-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <p className="footer-copyright">
            &#169; 2024 Shrabya | All rights reserved.
          </p>
        </div>
        <div className="footer-end">
          <div className="footer-end-title">More projects on :</div>
          <div className="footer-github">
            <div className="footer-github-icon">
              <a
                href="https://github.com/Shrabya35"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <p className="footer-github-text">
              {" "}
              @<span>Shrabya35</span> on github
            </p>
          </div>
        </div>
        <div className="footer-mobile">
          <p className="footer-copyright">
            &#169; 2024 Shrabya | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
