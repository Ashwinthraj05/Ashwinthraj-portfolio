import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaHome, FaWrench, FaProjectDiagram, FaGraduationCap, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import "../App.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "education"];
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500} className={activeSection === "home" ? "active" : ""} data-tooltip="Home">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className={activeSection === "skills" ? "active" : ""} data-tooltip="Skills">
              <FaWrench />
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className={activeSection === "projects" ? "active" : ""} data-tooltip="Projects">
              <FaProjectDiagram />
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className={activeSection === "education" ? "active" : ""} data-tooltip="Education">
              <FaGraduationCap />
            </Link>
          </li>
          <li>
            <div className="theme-toggle" onClick={toggleTheme} data-tooltip={theme === "dark" ? "Light Mode" : "Dark Mode"}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
