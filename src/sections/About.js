import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";

/* ── tiny observe util ── */
function obs(el, dir = "up") {
  if (!el) return () => {};
  el.classList.add("reveal", dir);
  const io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        el.classList.add("visible");
        io.disconnect();
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
  );
  io.observe(el);
  return () => io.disconnect();
}

// ✏️ Edit your personal info here
const INFO = {
  name: "SG Ashwinthraj",
  role: "SAP BTP Developer | Full Stack Developer | Problem Solver",
  education: "CSE Undergrad @ ACET",
  mission: "Building scalable, impactful web apps",
  funFact: "I debug faster at 3 AM 🎧",
};

const META_CARDS = [
  { icon: <FaMapMarkerAlt />, label: "LOCATION", value: "Tamil Nadu, India" },
  {
    icon: <FaBriefcase />,
    label: "EXPERIENCE",
    value: "Intern @ Mark9 Pte Ltd | QuantumQLabs | Tamizhi.AI",
  },
  { icon: <FaCode />, label: "FOCUS", value: "Full-Stack" },
  { icon: <FaPaperPlane />, label: "STATUS", value: "Available" },
];

export default function About() {
  const hdrRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    obs(hdrRef.current, "up");
    obs(leftRef.current, "left");
    obs(rightRef.current, "right");
  }, []);

  return (
    <div className="section-container">
      {/* Header */}
      <div ref={hdrRef} className="section-header">
        <div className="section-tag">// ABOUT ME</div>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>
        <p className="section-sub">
          A passionate developer focused on building exceptional digital
          experiences.
        </p>
      </div>

      <div className="about-v2-grid">
        {/* ── LEFT: bio card ── */}
        <div ref={leftRef} className="about-bio-card">
          {/* Top bar */}
          <div className="abc-topbar">
            <div className="abc-icon">
              <FaCode />
            </div>
            <div>
              <div className="abc-name">{INFO.name}</div>
              <div className="abc-role">{INFO.role}</div>
            </div>
          </div>

          {/* Bio paragraphs */}
          <p className="abc-para">
            I'm <strong>Ashwinthraj S G</strong>, a Computer Science and
            Engineering student with experience in{" "}
            <strong>Full Stack Development</strong>,
            <strong> SAP Technologies</strong>, and{" "}
            <strong>Data Analytics</strong>. I specialize in building scalable
            web applications, enterprise solutions, and data-driven systems that
            create real-world impact.
          </p>

          <p className="abc-para">
            Having worked as a <strong>MERN Stack Developer Intern</strong>,
            <strong> SAP Practice Intern</strong>, and
            <strong> Junior Data Scientist Intern</strong>, I combine technical
            expertise with problem-solving skills to deliver efficient,
            user-focused solutions. Currently, I'm focused on growing as a
            <strong> Software Engineer</strong> and building innovative digital
            products.
          </p>
          <p className="abc-para">
            🔥 <strong>Fun Fact:</strong> If there's a bug, I'll find it. If I
            can't find it, it's probably a feature.
          </p>

          {/* Social row */}
          <div className="abc-socials">
            <a
              href="https://github.com/Ashwinthraj05"
              target="_blank"
              rel="noopener noreferrer"
              className="abc-social-btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.instagram.com/x..ashwinthz..x"
              target="_blank"
              rel="noopener noreferrer"
              className="abc-social-btn"
            >
              <FaInstagram /> Instagram
            </a>
            <a href="/Resume.pdf" download className="abc-social-btn primary">
              Resume ↓
            </a>
          </div>
        </div>

        {/* ── RIGHT: meta cards + code block ── */}
        <div ref={rightRef} className="about-right-col">
          {/* 2×2 meta cards */}
          <div className="about-meta-grid stagger">
            {META_CARDS.map((c) => (
              <div key={c.label} className="about-meta-card">
                <div className="amc-icon">{c.icon}</div>
                <div className="amc-label">{c.label}</div>
                <div className="amc-value">{c.value}</div>
              </div>
            ))}
          </div>

          {/* Code block */}
          <div className="about-code-card">
            <div className="acc-bar">
              <span className="acc-dot red" />
              <span className="acc-dot yellow" />
              <span className="acc-dot green" />
              <span className="acc-filename">about.ts</span>
            </div>
            <pre className="acc-body">
              <code>{`const ashwinth = {
  role:      "${INFO.role}",
  education: "${INFO.education}",
  mission:   "${INFO.mission}",
  funFact:   "${INFO.funFact}"
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
