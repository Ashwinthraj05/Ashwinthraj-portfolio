import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./NavBar"; 
import Blog from "./Blog.js";
import About from "./About.js";
import Education from "./Education.js";
import Skills from "./Skills";
import ThemeToggle from "./ThemeToggle"; 
import profileImage from "./assets/Portfolio6.jpg"; // Replace with actual image path

function App() {
  
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Router basename="/Ashwinthraj-portfolio">
        <Navbar theme={theme} toggleTheme={toggleTheme} /> 
        <Routes>
          <Route
            path="/"
            element={
              <div className={`App ${theme}`}>
                <Blog />
                
                {/* Hero Section */}
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



              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Education />
      <Skills />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <profileImage />
    </>
  );
}

export default App;
