import React from 'react';
import './Skills.css';

const Skills = ({ skillGroups }) => (
  <section id="skills" className="skills section-shell">
    <div className="section-heading">
      <span className="section-label">Skills</span>
      <h2 className="section-title">Tools and technologies I use to ship work.</h2>
      <p className="section-text">
        My strongest work is around practical full-stack development with a focus on readable
        structure and usable interfaces.
      </p>
    </div>

    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article key={group.title} className="skill-group">
          <h3>{group.title}</h3>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
