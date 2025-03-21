import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

import "../App.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <FaDatabase />, color: "#4DB33D" },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill); // Toggle between active and normal state
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-icon ${activeSkill === skill.name ? "active" : ""}`}
            style={{ color: skill.color }}
            onClick={() => toggleSkill(skill.name)}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
