import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Full Stack Engineer | Transforming Ideas Into Powerful Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src="./assets/images/img11.jpg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img-nextjs.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
