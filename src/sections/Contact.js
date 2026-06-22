import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  { icon: <FaEnvelope />, label: "Email", value: "sgashwinthraj@gmail.com", href: "mailto:sgashwinthraj@gmail.com" },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/Ashwinthraj05", href: "https://github.com/Ashwinthraj05" },
  { icon: <FaInstagram />, label: "Instagram", value: "@x..ashwinthz..x", href: "https://www.instagram.com/x..ashwinthz..x" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "Connect with me", href: "https://linkedin.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:sgashwinthraj@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    setSent(true);
  };

  return (
    <div className="section-container">
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">Let's <span>Connect</span></h2>
      </motion.div>

      <div className="contact-wrapper">
        <motion.div className="contact-info" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}>
          <h3>Say Hello! 👋</h3>
          <p>I'm always open to discussing new opportunities, interesting projects, or just having a tech conversation. Feel free to reach out through any of these channels.</p>
          <div className="contact-links">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-row"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div className="contact-link-text"><strong>{link.label}</strong><span>{link.value}</span></div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22,1,0.36,1] }}>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🚀</div>
              <h3 style={{ color: "var(--text)", marginBottom: 8, fontFamily: "var(--fd)" }}>Message Sent!</h3>
              <p style={{ color: "var(--text-m)" }}>Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <>
              <div className="form-group">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="What's on your mind?" value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="form-submit">Send Message →</button>
            </>
          )}
        </motion.form>
      </div>
    </div>
  );
}
