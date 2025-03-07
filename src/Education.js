import React from 'react';
import './App.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="title">Education</h2>
      
      <table className="education-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech in Computer Science</td>
            <td>Anna University</td>
            <td>2022 - 2026</td>
          </tr>
          <tr>
            <td>High School</td>
            <td>ABC Senior Secondary School</td>
            <td>2020 - 2022</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
