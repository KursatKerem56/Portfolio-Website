import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Kürşat Kerem Çevlik</h1>
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="nav-link"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="nav-link"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <a
            href="https://github.com/KursatKerem56"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kursat-kerem-cevlik/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
