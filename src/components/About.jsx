import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 5+ years of experience
              building web applications that users love. I specialize in
              creating responsive, intuitive interfaces and robust backend
              systems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>💡 Problem Solving</h3>
              <p>
                Breaking down complex problems into simple, elegant solutions
              </p>
            </div>
            <div className="highlight-card">
              <h3>🎨 UI/UX Design</h3>
              <p>
                Creating beautiful and user-friendly interfaces that engage
                users
              </p>
            </div>
            <div className="highlight-card">
              <h3>⚡ Performance</h3>
              <p>
                Building fast, optimized applications that scale with your needs
              </p>
            </div>
            <div className="highlight-card">
              <h3>🤝 Collaboration</h3>
              <p>Working effectively with teams to deliver projects on time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
