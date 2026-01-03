import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Contact.css";

function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: "kur.ker.cev@gmail.com",
      href: "mailto:kur.ker.cev@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/KursatKerem56",
      href: "https://github.com/KursatKerem56",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/kursat-kerem-cevlik",
      href: "https://www.linkedin.com/in/kursat-kerem-cevlik/",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you'd like to collaborate
              or just say hello!
            </p>

            <div className="contact-items">
              {contactMethods.map(({ label, value, href, icon: Icon }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    href={href}
                    className="contact-item"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon size={24} />
                    <div>
                      <h4>{label}</h4>
                      <p>{value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
