import React from 'react';
import './Footer.css';

const Footer = ({ name, githubUrl, footerNote }) => (
  <footer className="footer">
    <div className="footer-inner">
      <p>
        &copy; {new Date().getFullYear()} {name}. {footerNote}
      </p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
