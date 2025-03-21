import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./NavBar";
import Blog from "./Blog";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import ThemeToggle from "./ThemeToggle";
import MainContent from "./MainContent";

function AppContent() {
  const { theme, toggleTheme } = useTheme(); // Use ThemeContext

  return (
    <Router basename="/Ashwinthraj-portfolio">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Education />
      <Skills />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
