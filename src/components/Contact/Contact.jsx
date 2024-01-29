import React from "react";

import "./Contact.css";

import { FaTelegramPlane } from "react-icons/fa";

import ConImg from "../../assets/contact.png";
import ConWhat from "../../assets/con-what.png";
import ConCal from "../../assets/con-cal.png";
import ConMail from "../../assets/con-mail.png";
import ConPhone from "../../assets/con-phone.png";
import ConMob from "../../assets/cont-mob.png";

const Contact = () => {
  const ClickAlert = () => {
    window.alert(
      "The contact form is under construction so consider emailing me in shrabyaraj@gmail.com, instead"
    );
  };

  return (
    <div className="Contact" id="Contact">
      <div className="contact-title">Contact Me</div>
      <div className="contact-container">
        <div className="contact-left">
          <div class="absolute cont-icons icon-what">
            <img src={ConWhat} alt="ConImg" />
          </div>
          <div class="absolute cont-icons icon-cal">
            <img src={ConCal} alt="ConImg" />
          </div>
          <div class="absolute cont-icons icon-mail">
            <img src={ConMail} alt="ConImg" />
          </div>
          <div class="absolute cont-icons icon-phone">
            <img src={ConPhone} alt="ConImg" />
          </div>

          <div class="contact-img">
            <img src={ConImg} className="cont-lap" alt="ConImg" />
            <img src={ConMob} className="cont-mob" alt="ConImg" />
          </div>
        </div>
        <div className="contact-right">
          <form action="" className="contact-form">
            <input
              type="email"
              className="form-data"
              id="form-email"
              placeholder="Enter your Email address"
              required
            />
            <input
              type="text"
              className="form-data"
              id="form-name"
              placeholder="Enter your Subject"
              list="subjects"
              required
            />
          <datalist id="subjects">
            <option value="Let's Collaborate!"></option>
            <option value="Connect with Me"></option>
            <option value="Ready to Start a Project?"></option>
            <option value="Let's Discuss Your Project"></option>
            <option value="Have a Question? Ask Away!"></option>
            <option value="Talk Web Development with Me"></option>
          </datalist>
            <textarea
              className="form-data"
              id="form-desc"
              placeholder="Enter Message"
              name="text"
              rows="4"
              cols="50"
              required
            ></textarea>
            <button
              type="submit"
              className="submit-btn"
              id="submit"
              onClick={ClickAlert}
            >
              Send Message <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
