import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./components/NavBar";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import MainContent from "./pages/MainContent";
import Footer from "./components/Footer"; 

function AppContent() {
  const { theme, toggleTheme } = useTheme(); // Use ThemeContext

  return (
    <Router basename="/Ashwinthraj-portfolio">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <div id="skills"><Skills /></div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </Router>
    
  );
}

function App() {
  return (
    <>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
    <div>
    <div id="projects"><Projects /></div>
    </div>
    <div id="education"><Education /></div>

    <Footer />
    </>
  );
}

export default App;
