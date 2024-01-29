import React, { useEffect, useState } from 'react';
import './Skills.css'; 

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [pythonProgress, setPythonProgress] = useState(0);
  const speed = 20;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(document.getElementById('skills-section'));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let htmlInterval, jsInterval, reactInterval, pythonInterval;

    if (isVisible) {
      htmlInterval = setInterval(() => {
        setHtmlProgress(prevProgress => {
          if (prevProgress >= 90) {
            clearInterval(htmlInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);

      jsInterval = setInterval(() => {
        setJsProgress(prevProgress => {
          if (prevProgress >= 70) {
            clearInterval(jsInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);

      reactInterval = setInterval(() => {
        setReactProgress(prevProgress => {
          if (prevProgress >= 55) {
            clearInterval(reactInterval);
            return prevProgress;
          } else {
            return prevProgress + 1;
          }
        });
      }, speed);

      pythonInterval = setInterval(() => {
        setPythonProgress(prevProgress => {
          if (prevProgress >= 60) {
            clearInterval(pythonInterval);
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
      clearInterval(pythonInterval);
    };
  }, [isVisible]);

  return (
    <div id="skills-section" className="Skills">
      <div className="skill-container">
        <div className="container">
          <div className="circular-progress" style={{ background: `conic-gradient(#e94948 ${htmlProgress * 3.6}deg, #ededed 0deg)` }}>
            <span className="progress-value">{htmlProgress}%</span>
          </div>
          <span className="skill-name">HTML & CSS</span>
        </div>
        <div className="container">
          <div className="circular-progress" style={{ background: `conic-gradient(#e94948 ${jsProgress * 3.6}deg, #ededed 0deg)` }}>
            <span className="progress-value">{jsProgress}%</span>
          </div>
          <span className="skill-name">JavaScript</span>
        </div>
        <div className="container">
          <div className="circular-progress" style={{ background: `conic-gradient(#e94948 ${reactProgress * 3.6}deg, #ededed 0deg)` }}>
            <span className="progress-value">{reactProgress}%</span>
          </div>
          <span className="skill-name">React</span>
        </div>
        <div className="container">
          <div className="circular-progress" style={{ background: `conic-gradient(#e94948 ${pythonProgress * 3.6}deg, #ededed 0deg)` }}>
            <span className="progress-value">{pythonProgress}%</span>
          </div>
          <span className="skill-name">Python</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
