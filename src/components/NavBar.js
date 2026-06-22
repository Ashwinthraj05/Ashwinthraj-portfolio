import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaHome, FaCode, FaBriefcase, FaFolderOpen, FaGraduationCap,
  FaBars, FaTimes, FaUser, FaEnvelope, FaCertificate,
} from "react-icons/fa";
import "../App.css";

// ✏️ Add/remove nav items here — Navbar, scrollspy, and mobile
//    menu all stay in sync automatically.
const navItems = [
  { to: "home",         label: "Home",         icon: <FaHome /> },
  { to: "about",         label: "About",        icon: <FaUser /> },
  { to: "skills",        label: "Skills",       icon: <FaCode /> },
  { to: "experience",    label: "Experience",   icon: <FaBriefcase /> },
  { to: "projects",      label: "Projects",     icon: <FaFolderOpen /> },
  { to: "certifications",label: "Certs",        icon: <FaCertificate /> },
  { to: "education",     label: "Education",    icon: <FaGraduationCap /> },
  { to: "contact",       label: "Contact",      icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > 20);

      const sections = navItems.map((n) => n.to);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${progress})`;
    }
  }, [progress]);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ width: "100%" }} />
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <Link to="home" smooth duration={800} className="nav-logo">
          &lt;Ashwinth /&gt;
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to} smooth duration={800} offset={-64}
                className={active === to ? "active" : ""}
                onClick={() => { setActive(to); setMenuOpen(false); }}
              >
                {icon} <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="/Resume.pdf" download className="nav-cta">Resume</a>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}
