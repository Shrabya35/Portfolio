import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

import { FaTelegramPlane } from "react-icons/fa";

import ConImg from "../../assets/contact.png";
import ConWhat from "../../assets/con-what.png";
import ConCal from "../../assets/con-cal.png";
import ConMail from "../../assets/con-mail.png";
import ConPhone from "../../assets/con-phone.png";
import ConMob from "../../assets/cont-mob.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setEmail("");
    setSubject("");
    setMessage("");

    toast.success("Message sent");

    emailjs
      .sendForm("service_zdxwkni", "template_nk4vukh", form.current, {
        publicKey: "KT9cNypxtdH2dSJDP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="Contact" id="Contact">
      <ToastContainer />
      <div className="contact-title">Contact Me</div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="absolute cont-icons icon-what">
            <img src={ConWhat} alt="ConImg" />
          </div>
          <div className="absolute cont-icons icon-cal">
            <img src={ConCal} alt="ConImg" />
          </div>
          <div className="absolute cont-icons icon-mail">
            <img src={ConMail} alt="ConImg" />
          </div>
          <div className="absolute cont-icons icon-phone">
            <img src={ConPhone} alt="ConImg" />
          </div>

          <div className="contact-img">
            <img src={ConImg} className="cont-lap" alt="ConImg" />
            <img src={ConMob} className="cont-mob" alt="ConImg" />
          </div>
        </div>
        <div className="contact-right">
          <form
            action=""
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-data"
              id="form-email"
              placeholder="Enter your Email address"
              required
            />
            <input
              type="text"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              rows="4"
              cols="50"
              required
            ></textarea>
            <button type="submit" className="submit-btn" id="submit">
              Send Message <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
