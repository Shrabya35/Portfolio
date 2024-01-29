import React from "react";

import Typed from 'react-typed';

const TypeComponent = () => {
  return (
    <Typed
      className="role"
      strings={[
        'Web Designer',
        'Web Developer',
        'Problem Solver',
        'Coder',
        'Pro Learner',
      ]}
      typeSpeed={100}
      backSpeed={80}
      backDelay={1000}
      loop
    />
  );
};

export default TypeComponent;
