import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const educationData = [
  { year: "2022 - Present", degree: "B.E CSE", institution: "Angel College Of Engineering And Technology" },
  { year: "2020 - 2022", degree: "Higher Secondary", institution: "Lions Matriculation And Higher Secondary School" },
  { year: "2019 - 2020", degree: "Secondary School", institution: "Sakthi Matriculation School" },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="title">Education</h2>
      <div className="card-container">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span className="year">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
