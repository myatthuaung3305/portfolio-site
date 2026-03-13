import React from 'react';
import './About.css';

const About = ({ data }) => (
  <section id="about" className="about section-shell">
    <div className="section-heading">
      <span className="section-label">About</span>
      <h2 className="section-title">Building practical products, not just pages.</h2>
      <p className="section-text">
        I focus on usable interfaces, clear structure, and backend logic that supports real
        user tasks.
      </p>
    </div>

    <div className="about-grid">
      <div className="about-copy">
        {data.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about-panel">
        <h3>What I bring</h3>
        <ul>
          {data.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
