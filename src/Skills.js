import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import "./App.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26", desc: "Markup language for structuring web pages." },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", desc: "Styles web pages with colors, layouts, and animations." },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", desc: "Programming language for web interactivity." },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB", desc: "Library for building dynamic user interfaces." },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", desc: "JavaScript runtime for backend development." },
  { name: "MongoDB", icon: <FaDatabase />, color: "#4DB33D", desc: "NoSQL database for scalable applications." },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front" style={{ backgroundColor: skill.color }}>
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>

              {/* Back Side */}
              <div className="card-back">
                <p>{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
