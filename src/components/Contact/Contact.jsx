import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import "./Contact.css";

import { FaTelegramPlane } from "react-icons/fa";

import ConImg from "../../assets/contact.png";
import ConWhat from "../../assets/con-what.png";
import ConCal from "../../assets/con-cal.png";
import ConMail from "../../assets/con-mail.png";
import ConPhone from "../../assets/con-phone.png";
import ConMob from "../../assets/cont-mob.png";
import AlertMsg from "./AlertMsg";

const Contact = () => {
  
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(true);

    emailjs
      .sendForm('service_zdxwkni', 'template_nk4vukh', form.current, {
        publicKey: 'KT9cNypxtdH2dSJDP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
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
          <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              className="form-data"
              id="form-email"
              placeholder="Enter your Email address"
              required
            />
            <input
              type="text"
              name="user_subject"
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
              name="message"
              rows="4"
              cols="50"
              required
            ></textarea>
            <button
              type="submit"
              className="submit-btn"
              id="submit"
            >
              Send Message <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>
      <AlertMsg showAlert={showModal} handleClose={closeModal} />
    </div>
  );
};

export default Contact;
