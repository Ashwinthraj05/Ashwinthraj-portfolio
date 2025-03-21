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
      <Education />
      <Skills />
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
      <Projects />
    </div>
    </>
  );
}

export default App;
