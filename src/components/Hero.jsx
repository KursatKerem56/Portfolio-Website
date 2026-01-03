import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Kürşat Kerem Çevlik</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <p className="hero-description">
            I build beautiful, responsive websites and applications that make a
            difference. With expertise in React, Node.js, and modern web
            technologies, I'm ready to bring your ideas to life.
          </p>
          <div className="hero-cred">
            <span>Node.js</span>
            <span>React</span>
            <span>AWS</span>
            <span>MongoDB</span>
            <span>PostgreSQL</span>
          </div>
          {/* <div className="hero-buttons">
            <button className="btn btn-primary">
              View My Work
            </button>
            <button className="btn btn-secondary">Download CV</button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
