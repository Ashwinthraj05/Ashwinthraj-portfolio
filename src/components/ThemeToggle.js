import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // <button onClick={toggleTheme} style={{ cursor: "pointer", padding: "10px" }}>
    //   {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    // </button>
    <h6>.</h6>
  );
};

export default ThemeToggle;
