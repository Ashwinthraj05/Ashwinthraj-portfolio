import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Blog from "./Blog.js";
import About from "./About.js";
import Education from "./Education.js";
function App() {
  return (
   <>
   <Router  basename="/Ashwinthraj-portfolio"> 
      {/* ✅ Navbar should be inside Router but outside Routes */}
      {/* {<NavBar /> */} 

      <Routes>
        <Route path="/" element={
          <div className="App">
            <Blog />
            
            <div className="container">
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

              <motion.p
                className="description"
                initial={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", opacity: 0, y: 30 }}
                animate={{ textShadow: "none", opacity: 1, y: 0 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                A Frontend focused Web Developer building the Frontend of Websites & Web
                Applications that leads to the success of the overall project
              </motion.p>
            </div>
          </div>
        } />
       

        {/* ✅ Route for About Page */}
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
    
    <div>
     <Education/>
     </div>
     </>
  );
}

export default App;
