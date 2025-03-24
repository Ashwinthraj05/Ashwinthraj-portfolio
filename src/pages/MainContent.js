import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/Userlogo.jpg"; // Ensure correct image path

const MainContent = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero-content">
        <motion.h2
          className="greeting"
          initial={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", opacity: 0, y: 30 }}
          animate={{ textShadow: "none", opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Hey, I'M
        </motion.h2>

        <motion.h1
          className="name"
          initial={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", opacity: 0, y: 30 }}
          animate={{ textShadow: "none", opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          SG ASHWINTH
        </motion.h1>

        <TypeAnimation
          sequence={[
            "A Frontend focused Web Developer...",
            1000,
            "Building the Frontend of Websites...",
            1000,
            "Creating Web Applications for success!",
            1000,
          ]}
          wrapper="p"
          className="description"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className="hero-image-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
    
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
   </>
    
  );
};

export default MainContent;
