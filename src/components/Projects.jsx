import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and mobile-responsive design.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "✅",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Interactive weather application with real-time data, location-based forecasts, and beautiful data visualizations.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      image: "🌤️",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Social Media Feed",
      description:
        "Modern social media feed with infinite scroll, likes, comments, and user profiles. Built with React and Express.js backend.",
      tech: ["React", "Express", "PostgreSQL"],
      image: "📱",
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description:
        "Business analytics dashboard with charts, graphs, and real-time data updates. Custom analytics and reporting features.",
      tech: ["React", "D3.js", "Node.js"],
      image: "📊",
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "AI Chat Application",
      description:
        "Conversational AI application with natural language processing, chat history, and user authentication.",
      tech: ["React", "OpenAI API", "Firebase"],
      image: "🤖",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="link-btn" title="View Live">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="link-btn"
                    title="View Code"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
