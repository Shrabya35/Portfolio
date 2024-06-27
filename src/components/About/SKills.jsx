import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [mongoProgress, setmongoProgress] = useState(0);
  const speed = 20;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(document.getElementById("skills-section"));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let htmlInterval, jsInterval, reactInterval, mongoInterval;

    if (isVisible) {
      htmlInterval = setInterval(() => {
        setHtmlProgress((prevProgress) => {
          if (prevProgress >= 85) {
            clearInterval(htmlInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);

      jsInterval = setInterval(() => {
        setJsProgress((prevProgress) => {
          if (prevProgress >= 75) {
            clearInterval(jsInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);

      reactInterval = setInterval(() => {
        setReactProgress((prevProgress) => {
          if (prevProgress >= 65) {
            clearInterval(reactInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);

      mongoInterval = setInterval(() => {
        setmongoProgress((prevProgress) => {
          if (prevProgress >= 60) {
            clearInterval(mongoInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);
    }

    return () => {
      clearInterval(htmlInterval);
      clearInterval(jsInterval);
      clearInterval(reactInterval);
      clearInterval(mongoInterval);
    };
  }, [isVisible]);

  return (
    <div id="skills-section" className="Skills">
      <div className="skill-container">
        <div className="container">
          <div
            className="circular-progress"
            style={{
              background: `conic-gradient(#e94948 ${
                htmlProgress * 3.6
              }deg, #ededed 0deg)`,
            }}
          >
            <span className="progress-value">{htmlProgress}%</span>
          </div>
          <span className="skill-name">HTML & CSS</span>
        </div>
        <div className="container">
          <div
            className="circular-progress"
            style={{
              background: `conic-gradient(#e94948 ${
                jsProgress * 3.6
              }deg, #ededed 0deg)`,
            }}
          >
            <span className="progress-value">{jsProgress}%</span>
          </div>
          <span className="skill-name">JavaScript</span>
        </div>
        <div className="container">
          <div
            className="circular-progress"
            style={{
              background: `conic-gradient(#e94948 ${
                reactProgress * 3.6
              }deg, #ededed 0deg)`,
            }}
          >
            <span className="progress-value">{reactProgress}%</span>
          </div>
          <span className="skill-name">React</span>
        </div>
        <div className="container">
          <div
            className="circular-progress"
            style={{
              background: `conic-gradient(#e94948 ${
                mongoProgress * 3.6
              }deg, #ededed 0deg)`,
            }}
          >
            <span className="progress-value">{mongoProgress}%</span>
          </div>
          <span className="skill-name">MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
