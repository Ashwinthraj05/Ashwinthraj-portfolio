import React from "react";
import "./App.css"; // Ensure your CSS is updated for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <p>
        🚀 Hello! I'm <strong>SG Ashwinth</strong>, a passionate 
        <strong> MERN Stack Developer</strong> and <strong>Data Enthusiast</strong>.
      </p>

      <p>
        I'm a <strong>3rd-year Computer Science and Engineering student</strong> with a strong interest in full-stack development and data analysis.
        Currently, I'm honing my skills as a <strong>MERN Stack Developer intern at Tamizhi.AI</strong>, where I build dynamic and scalable web applications.
      </p>

      <h2>💻 What I Do</h2>
      <ul className="about-list">
        <li><strong>Full-Stack Development:</strong> Building responsive and interactive web applications using MongoDB, Express.js, React.js, and Node.js.</li>
        <li><strong>Data Analysis:</strong> Working with Python, Pandas, and Matplotlib to extract insights from data.</li>
        <li><strong>Android Development:</strong> Developed projects like <strong>Owl-M, Snack Squad, and Podcast Plus</strong> using Android Studio (Kotlin).</li>
      </ul>

      <h2>🔍 Currently Exploring</h2>
      <ul className="about-list">
        <li>🌱 Advanced MERN Stack concepts (GraphQL, microservices, authentication).</li>
        <li>📈 Data-driven projects to strengthen my analytical skills.</li>
        <li>💼 Preparing for placements with a focus on technical skills and problem-solving.</li>
      </ul>

      <p>⚡ Fun Fact: I love tech, but debugging at 3 AM is my superpower. 😆</p>

      <h2>📲 Let's Connect!</h2>
      <p>
        Check out my work on <a href="https://github.com/Ashwinthraj05" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;
        or say hi on <a href="https://www.instagram.com/x..ashwinthz..x" target="_blank" rel="noopener noreferrer">Instagram</a>. 🚀
      </p>
    </div>
  );
};

export default About;
