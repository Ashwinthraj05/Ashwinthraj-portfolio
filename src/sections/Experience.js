import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ════════════════════════════════════════════════════════
// ✏️  ADD MORE INTERNSHIPS / JOBS — copy a block below.
//     type: "Current" | "Completed" | "Upcoming"  (badge color/label)
// ════════════════════════════════════════════════════════
const experiences = [
  {
    id: 1,
    company: "Mark9 Pte Ltd",
    role: "SAP Practice Intern",
    duration: "Feb 8, 2026 – Jun 30, 2026",
    type: "Current",
    description:
      "Working as an SAP Practice Intern, applying ABAP Cloud development skills in a real-world enterprise environment. Contributing to SAP backend development tasks while strengthening hands-on expertise in RAP, CDS, and SAP Gateway services.",
    tech: ["SAP ABAP Cloud", "RAP", "CDS Views", "SAP Gateway", "OData"],
  },
  {
    id: 2,
    company: "QuantumQLabs",
    role: "Junior Data Scientist",
    duration: "Sep 8, 2025 – Feb 28, 2026",
    type: "Completed",
    description:
      "Actively involved in data collection, data cleaning, and exploratory data analysis to support business and analytical projects. Worked with structured datasets, performed statistical analysis, and assisted in building and evaluating basic machine learning models under senior team guidance. Recognized for clearly interpreting data and presenting findings.",
    tech: ["Python", "Pandas", "EDA", "Statistical Analysis", "Machine Learning"],
  },
  {
    id: 3,
    company: "Tamizhi.AI",
    role: "MERN Stack Developer Intern",
    duration: "May 10, 2025 – Oct 10, 2025",
    type: "Completed",
    description:
      "Successfully completed a 180-day internship program building dynamic and scalable web applications using the MERN stack. Worked on features that improved user experience and application performance, collaborating with a cross-functional team to ship production-ready code.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  // {
  //   id: 4,
  //   company: "Company Name",
  //   role: "Role Title",
  //   duration: "Month Year – Month Year",
  //   type: "Current" | "Completed" | "Upcoming",
  //   description: "What you did here...",
  //   tech: ["Tech1", "Tech2"],
  // },
];

export default function Experience() {
  const hdr = useRef(null);
  useEffect(() => {
    const el = hdr.current; if (!el) return;
    el.classList.add("reveal", "up");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <div className="section-container">
      <div ref={hdr} className="section-header">
        <div className="section-tag">Work Experience</div>
        <h2 className="section-title">Where I've <span>Worked</span></h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id} className="exp-item"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="exp-card"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="exp-header">
                <span className="exp-company">{exp.company}</span>
                <span className={`exp-badge exp-badge-${exp.type.toLowerCase()}`}>{exp.type}</span>
              </div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-duration">{exp.duration}</div>
              <p className="exp-desc">{exp.description}</p>
              <div className="exp-tech-stack">
                {exp.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
