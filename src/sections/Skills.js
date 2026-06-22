import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaPython, FaAndroid,
  FaCloud, FaCogs, FaLayerGroup, FaExchangeAlt,
  FaCode, FaRobot,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss,
  SiKotlin, SiPandas, SiPostman, SiSap,
} from "react-icons/si";

// ════════════════════════════════════════════════════════
// ✏️  ADD CATEGORIES / SKILLS freely — everything auto-tiles.
//     Icons: pick any from react-icons/fa or react-icons/si.
//     color: icon tint (doesn't affect card background).
// ════════════════════════════════════════════════════════
const categories = [
  {
    label: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "HTML5",      icon: <FaHtml5 />,       color: "#E44D26" },
      { name: "CSS3",       icon: <FaCss3Alt />,      color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />,           color: "#F7DF1E" },
      { name: "React.js",   icon: <FaReact />,        color: "#61DAFB" },
      { name: "Tailwind",   icon: <SiTailwindcss />,  color: "#06B6D4" },
    ],
  },
  {
    label: "Backend & Database",
    emoji: "⚙️",
    skills: [
      { name: "Node.js",    icon: <FaNodeJs />,   color: "#339933" },
      { name: "Express.js", icon: <SiExpress />,  color: "#aaaaaa" },
      { name: "MongoDB",    icon: <SiMongodb />,  color: "#4DB33D" },
      { name: "SQL",        icon: <FaDatabase />, color: "#00758F" },
    ],
  },
  {
    label: "Languages & Tools",
    emoji: "🛠️",
    skills: [
      { name: "Python",   icon: <FaPython />,   color: "#3776AB" },
      { name: "Kotlin",   icon: <SiKotlin />,   color: "#7F52FF" },
      { name: "Git",      icon: <FaGitAlt />,   color: "#F05032" },
      { name: "Pandas",   icon: <SiPandas />,   color: "#7B68EE" },
      { name: "Android",  icon: <FaAndroid />,  color: "#3DDC84" },
      { name: "Postman",  icon: <SiPostman />,  color: "#FF6C37" },
      { name: "VS Code",  icon: <FaCode />,     color: "#007ACC" },
    ],
  },
  {
    label: "SAP Technologies",
    emoji: "🏢",
    skills: [
      { name: "SAP BTP",           icon: <SiSap />,          color: "#0070F2" },
      { name: "SAP CAP",           icon: <FaLayerGroup />,   color: "#0070F2" },
      { name: "SAP Fiori",         icon: <FaCogs />,         color: "#0070F2" },
      { name: "ABAP Cloud",        icon: <FaCode />,         color: "#006FBB" },
      { name: "OData Services",    icon: <FaExchangeAlt />,  color: "#0070F2" },
      { name: "SAP Integration",   icon: <FaCloud />,        color: "#0070F2" },
      { name: "SAP Build PA",      icon: <FaRobot />,        color: "#0070F2" },
    ],
  },
];

function observe(el, dir = "up") {
  if (!el) return () => {};
  el.classList.add("reveal", dir);
  const io = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
    { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
  );
  io.observe(el);
  return () => io.disconnect();
}

function CategoryBlock({ cat }) {
  const blockRef = useRef(null);
  useEffect(() => observe(blockRef.current, "up"), []);

  return (
    <div ref={blockRef} className="skill-category">
      <div className="skill-cat-header">
        <span className="skill-cat-emoji">{cat.emoji}</span>
        <h3>{cat.label}</h3>
        <span className="skill-cat-count">{cat.skills.length}</span>
      </div>
      <div className="skills-grid stagger">
        {cat.skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-chip"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <div className="skill-icon-wrap" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const hdr = useRef(null);
  useEffect(() => observe(hdr.current, "up"), []);

  return (
    <div className="section-container">
      <div ref={hdr} className="section-header">
        <div className="section-tag">Technical Skills</div>
        <h2 className="section-title">My <span>Toolkit</span></h2>
      </div>
      <div className="skills-categories">
        {categories.map((cat) => (
          <CategoryBlock key={cat.label} cat={cat} />
        ))}
      </div>
    </div>
  );
}
