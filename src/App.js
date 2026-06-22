import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Evolve from "./sections/Evolve";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import useLenis from "./hooks/useLenis";
import "./App.css";

function PortfolioApp() {
  useLenis();
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="evolve"><Evolve /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
