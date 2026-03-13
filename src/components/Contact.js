import React from 'react';
import './Contact.css';

const Contact = ({ data }) => (
  <section id="contact" className="contact section-shell">
    <div className="section-heading">
      <span className="section-label">Contact</span>
      <h2 className="section-title">Let&apos;s talk about the next build.</h2>
      <p className="section-text">
        I am interested in junior developer roles, internship opportunities, and projects
        where I can keep growing through hands-on work.
      </p>
    </div>

    <div className="contact-grid">
      <div className="contact-card">
        <span className="contact-card-label">Email</span>
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </div>
      <div className="contact-card">
        <span className="contact-card-label">GitHub</span>
        <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
          {data.githubLabel}
        </a>
      </div>
      <div className="contact-card">
        <span className="contact-card-label">Status</span>
        <p>{data.availability}</p>
      </div>
    </div>

    <div className="button-row">
      <a className="button-primary" href={`mailto:${data.email}`}>
        Start a Conversation
      </a>
      <a
        className="button-secondary"
        href={data.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub
      </a>
    </div>
  </section>
);

export default Contact;
