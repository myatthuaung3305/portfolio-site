import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, type, description, impact, stack, image, repoUrl, liveUrl }) => (
  <article className="project-card">
    <div className="project-card-media">
      <img src={image} alt={`${title} preview`} />
    </div>
    <div className="project-card-body">
      <p className="project-card-type">{type}</p>
      <h3>{title}</h3>
      <p className="project-card-description">{description}</p>
      <p className="project-card-impact">{impact}</p>
      <ul className="project-card-stack">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-card-actions">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
