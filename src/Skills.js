import React from "react";
import "./Skills.js";

const skills = [
  { name: "HTML", percentage: 90, color: "#E44D26" },
  { name: "CSS", percentage: 85, color: "#1572B6" },
  { name: "JavaScript", percentage: 80, color: "#F7DF1E" },
  { name: "React.js", percentage: 75, color: "#61DAFB" },
  { name: "Node.js", percentage: 70, color: "#339933" },
  { name: "MongoDB", percentage: 65, color: "#4DB33D" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: skill.color,
                }}
              >
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
