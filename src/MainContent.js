import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "./assets/Userlogo.jpg"; // Ensure correct image path

const MainContent = () => {
  return (
    
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
    
  );
};

export default MainContent;
