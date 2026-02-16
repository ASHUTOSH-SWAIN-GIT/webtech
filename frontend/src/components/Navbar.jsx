import React from 'react';

function Navbar() {
  const handleComingSoon = () => {
    window.alert('Coming soon');
  };

  return (
    <header className="nav">
      <div className="container nav-content">
        <div className="logo">PortfolioForge</div>
        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
        </nav>
        <button className="btn btn-secondary" type="button" onClick={handleComingSoon}>
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Navbar;
