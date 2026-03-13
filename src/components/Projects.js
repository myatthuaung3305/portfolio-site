import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => (
  <section id="projects" className="projects section-shell">
    <div className="section-heading">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Selected builds with real workflows behind them.</h2>
      <p className="section-text">
        These projects focus on ordering flows, e-commerce interactions, and portfolio
        presentation with clearer user experience.
      </p>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
