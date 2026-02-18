import React, { useState, useEffect } from 'react';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">P</div>
          Portfol.io
        </a>

        <div className="nav-links">
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Templates</a>
          <a href="#" className="nav-link">Pricing</a>
        </div>

        <div className="flex items-center gap-md">
          <a href="#" className="nav-link" style={{ marginRight: '1rem' }}>Sign In</a>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
