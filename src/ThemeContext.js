import React, { createContext, useContext, useEffect } from "react";
import { applyTheme } from "./theme";

const ThemeContext = createContext({ theme: "dark", accent: "custom" });

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Lock structural attrs — accent is injected via theme.js
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("data-accent", "custom");
    // Apply the theme.js accent tokens as inline CSS vars on <html>
    applyTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", accent: "custom" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
