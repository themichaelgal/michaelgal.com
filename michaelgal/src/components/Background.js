import React from "react";
import "../styles/GradientBackground.css";

const Background = () => {
  return (
    <div className="animated-gradient">
      <svg className="wave-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgba(255, 255, 255, 0.1)" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,138.7C840,171,960,213,1080,202.7C1200,192,1320,128,1380,96L1440,64L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Background;