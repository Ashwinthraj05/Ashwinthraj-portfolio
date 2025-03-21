import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaToolbox,
  FaMoon,
  FaSun,
  FaLinkedin
} from "react-icons/fa";
import "./App.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Side - Portfolio Title */}
        {/* <div className="nav-title">Portfolio</div> */}

        {/* Right Side - Nav Items */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item" data-tooltip="Home">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item" data-tooltip="About">
              <FaToolbox />
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/x..ashwinthz..x?igsh=MXRnZ3gxcHlwYWhzbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              data-tooltip="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ashwinthraj05"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              data-tooltip="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashwinthraj-s-g-88b173252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              data-tooltip="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <Link to="/contact" className="nav-item" data-tooltip="Contact">
              <FaEnvelope />
            </Link>
          </li>
          <li>
            <div
              className="theme-toggle"
              onClick={toggleTheme}
              data-tooltip={theme === "dark" ? "Light Mode" : "Dark Mode"}
              style={{ cursor: "pointer" }}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
