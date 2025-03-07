import React from 'react';
import './App.css'; // Ensure styles are applied

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-card">
        <h3>Bachelor of Technology in Computer Science</h3>
        <p><strong>Anna University</strong></p>
        <p>2022 - 2026</p>
        <p>Key Subjects: Data Structures, Web Development, AI & ML, Databases</p>
      </div>

      <div className="education-card">
        <h3>High School</h3>
        <p><strong>ABC Senior Secondary School</strong></p>
        <p>2020 - 2022</p>
        <p>Subjects: Mathematics, Physics, Chemistry, Computer Science</p>
      </div>
    </section>
  );
}

export default Education;
