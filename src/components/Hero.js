import React from 'react';
import './Hero.css';

const Hero = ({ data }) => (
  <section id="hero" className="hero section-shell">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow">{data.availability}</div>
        <h1>{data.name}</h1>
        <h2>{data.role}</h2>
        <p className="hero-intro">{data.heroIntro}</p>
        <p className="hero-summary">{data.heroSummary}</p>

        <div className="button-row">
          <a className="button-primary" href="#projects">
            View Projects
          </a>
          <a className="button-secondary" href={`mailto:${data.email}`}>
            Email Me
          </a>
        </div>

        <div className="hero-stats">
          {data.stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="hero-card">
        <div className="hero-card-badge">MTA</div>
        <p className="hero-card-label">Current focus</p>
        <ul className="hero-focus-list">
          {data.focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-card-footer">
          <span>{data.location}</span>
          <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
            {data.githubLabel}
          </a>
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
