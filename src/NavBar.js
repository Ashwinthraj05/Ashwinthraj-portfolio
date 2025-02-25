import React from "react";
import { FaHome, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";
import "./App.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo"> SG Ashwinth</div> {/* Name without icon */}
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-item">
            <FaHome  /> Home
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/x..ashwinthz..x?igsh=MXRnZ3gxcHlwYWhzbw==" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="nav-item">
            <FaInstagram className="icon" /> Instagram
          </a>
        </li>
        <li>
          <a href="https://github.com/Ashwinthraj05" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="nav-item">
            <FaGithub className="icon" /> GitHub
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-item">
            <FaEnvelope className="icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
