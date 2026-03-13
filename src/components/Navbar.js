import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = ({ name, githubUrl }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#hero" onClick={() => setMenuOpen(false)}>
          <span className="navbar-kicker">Portfolio</span>
          <span className="navbar-logo">{name}</span>
        </a>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              className="navbar-link"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="navbar-cta"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
