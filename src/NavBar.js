import React from "react";
import { Link } from "react-router-dom";

import { FaHome, FaEnvelope, FaInstagram, FaGithub , FaAbout} from "react-icons/fa";
import { FaInfoCircle, FaUser } from "react-icons/fa";
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
  <Link to="/about" className="nav-item">About</Link>
</li>
        <li>
          <Link to="https://www.instagram.com/x..ashwinthz..x?igsh=MXRnZ3gxcHlwYWhzbw==" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="nav-item">
            <FaInstagram className="icon" /> Instagram
          </Link>
        </li>
        <li>
          <Link to="https://github.com/Ashwinthraj05" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="nav-item">
            <FaGithub className="icon" /> GitHub
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">
            <FaEnvelope className="icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
