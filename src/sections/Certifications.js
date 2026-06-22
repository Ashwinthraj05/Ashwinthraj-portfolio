import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCheckCircle, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";
import { SiSap } from "react-icons/si";

// ════════════════════════════════════════════════════════
// ✏️ ADD MORE CERTIFICATIONS — copy a block and fill it in.
//     icon: any react-icons component (SiSap, FaCertificate, etc.)
//     metrics: array of { label, value } — renders as a clean
//              key/value grid, any number of rows works.
//     validUntil / issuedOn are optional — omit if not applicable.
// ════════════════════════════════════════════════════════
const certifications = [
  {
    id: 1,
    title: "TCS National Qualifier Test (NQT)",
    issuer: "Tata Consultancy Services",
    icon: <FaCertificate />,
    issuedOn: "Jan 2, 2026",
    validUntil: "Jan 2, 2028",
    metrics: [
      { label: "Overall Score", value: "69.50% (2085/3000)" },
      { label: "Verbal", value: "82.97%" },
      { label: "Advanced", value: "72.44%" },
      { label: "Python Assessment", value: "Pass" },
    ],
  },
  {
    id: 2,
    title: "SAP Certified — Backend Developer, ABAP Cloud (Beta)",
    issuer: "SAP",
    icon: <SiSap />,
    issuedOn: "June 5, 2026",
    validUntil: "June 6, 2027",
    metrics: [
      { label: "Status", value: "Up to date" },
      { label: "System Score", value: "83.33% (cut score: 67%)" },
      { label: "Exam Taken", value: "C_ABAPD_2601" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Certification Name",
  //   issuer: "Issuing Organization",
  //   icon: <FaCertificate />,            // swap for any react-icons component
  //   issuedOn: "Month Day, Year",
  //   validUntil: "Month Day, Year",       // omit this line if it doesn't expire
  //   metrics: [
  //     { label: "Score", value: "..." },
  //   ],
  // },
];

export default function Certifications() {
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
        <div className="section-tag">// VERIFIED CREDENTIALS</div>
        <h2 className="section-title">My <span>Certifications</span></h2>
        <p className="section-sub">Industry-recognized assessments validating my technical skills.</p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-card-header">
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-verified">
                <FaCheckCircle style={{ fontSize: 11 }} /> Verified
              </div>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-issuer">{cert.issuer}</div>

            <div className="cert-dates">
              {cert.issuedOn && (
                <span className="cert-date-pill">
                  <FaCalendarAlt style={{ fontSize: 10 }} /> Issued {cert.issuedOn}
                </span>
              )}
              {cert.validUntil && (
                <span className="cert-date-pill">
                  <FaShieldAlt style={{ fontSize: 10 }} /> Valid till {cert.validUntil}
                </span>
              )}
            </div>

            <div className="cert-metrics">
              {cert.metrics.map((m) => (
                <div className="cert-metric-row" key={m.label}>
                  <span className="cert-metric-label">{m.label}</span>
                  <span className="cert-metric-value">{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
