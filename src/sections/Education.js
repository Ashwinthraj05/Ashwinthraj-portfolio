import React from "react";
import { motion } from "framer-motion";

// ✏️ ADD MORE EDUCATION — copy a block below
const educationData = [
  { id: 1, year: "2022 – Present", degree: "B.E Computer Science & Engineering", institution: "Angel College Of Engineering And Technology", icon: "🎓" },
  { id: 2, year: "2020 – 2022", degree: "Higher Secondary (12th Grade)", institution: "Lions Matriculation And Higher Secondary School", icon: "📚" },
  { id: 3, year: "2019 – 2020", degree: "Secondary School (10th Grade)", institution: "Sakthi Matriculation School", icon: "🏫" },
];

export default function Education() {
  return (
    <div className="section-container">
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="section-tag">Academic Background</div>
        <h2 className="section-title">My <span>Education</span></h2>
      </motion.div>

      <div className="education-grid">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.id} className="edu-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-year">{edu.year}</div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.institution}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
