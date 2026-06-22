import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">&lt;Ashwinth /&gt;</span>
        <span className="footer-copy">Built with <span>♥</span> using React · Three.js · Framer Motion</span>
        <span className="footer-copy">© {new Date().getFullYear()} SG Ashwinth</span>
      </div>
    </footer>
  );
}
