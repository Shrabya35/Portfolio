import React from "react";
import { ReactTyped } from "react-typed";

const TypeComponent = () => (
  <div className="role">
    <ReactTyped
      strings={[
        "Web Designer",
        "Web Developer",
        "Problem Solver",
        "Coder",
        "Pro Learner",
      ]}
      typeSpeed={100}
      loop
    />
  </div>
);

export default TypeComponent;
