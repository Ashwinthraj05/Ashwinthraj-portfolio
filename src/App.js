import React from "react";
import { motion } from "framer-motion";
import Blog from "./Blog.js";
function App() {
  return (
    <>
      <div className="App">
        <Blog />
      </div>

      <div className="App">
        {/* Main Content */}
        <div className="container">
          <motion.h2
            className="greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey, I'M
          </motion.h2>
          
          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            SG ASHWINTH
          </motion.h1>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            A Backend focused Web Developer building the Frontend of Websites & Web
            Applications that leads to the success of the overall project
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default App;
