// Education.js

import React from "react";
import { IoSchoolSharp } from "react-icons/io5"; // Import the IoSchoolSharp icon
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <h1 className="education-title">My Education</h1>

      <div className="box-container">
        <div className="box box1">
          <IoSchoolSharp className="icon" />
          <span>2015-2020</span>
          <h2>School</h2>
          <p>
            I have completed my school in Pokhariya secondary school in Nepal. It
            is the place where my interest in coding developed.
          </p>
        </div>

        <div className="box box2">
          <IoSchoolSharp className="icon" />
          <span>2020-2022</span>
          <h2>High School</h2>
          <p>
            I completed my high school education at Pokhariya Secondary School
            in Nepal. This pivotal period not only equipped me with academic
            knowledge but also imparted invaluable life lessons.
          </p>
        </div>
        <div className="box box3">
          <IoSchoolSharp className="icon" />
          <span>2023-Present</span>
          <h2>Bachelor</h2>
          <p>
            I am currently pursuing my bachelor's degree in Bsc.Csit at MMAMC,
            Brt, honing my skills in computer science and information
            technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
