import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>© 2025 Ashwinth Raj. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://github.com/Ashwinthraj05" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:YOUR_EMAIL@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1e1e1e",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
  },
  container: {
    maxWidth: "800px",
    margin: "auto",
  },
  socialLinks: {
    marginTop: "5px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
};

export default Footer;
