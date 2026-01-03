import React from "react";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Vue.js",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "GitHub", "VS Code"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Team Work",
        "Agile",
        "Mentoring",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
