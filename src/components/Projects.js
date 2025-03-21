import React from "react";
import "../App.css";

const projects = [
  {
    id: 1,
    title: "Owl-M",
    description: "A material design study app built using Android Studio with Kotlin.",
    image: "https://via.placeholder.com/300", // Replace with your project image
    link: "https://github.com/Ashwinthraj05/Owl-M",
  },
  {
    id: 2,
    title: "Snack Squad",
    description: "A customizable snack ordering and delivery app with a user-friendly interface.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/Ashwinthraj05/Snack-Squad",
  },
  {
    id: 3,
    title: "Podcast Plus",
    description: "A Redux-inspired podcast app with dynamic themes for Android.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/Ashwinthraj05/Podcast-Plus",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ "--index": index }}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
