import React from 'react';

function HeroSection() {
  const handleComingSoon = () => {
    window.alert('Coming soon');
  };

  return (
    <main className="hero" id="start">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="tag">Portfolio Generator SaaS</p>
          <h1>Build your best portfolio website and resume from LinkedIn and GitHub.</h1>
          <p className="subtitle">
            Enter your profile links once. The platform generates an optimal portfolio structure and a tailored,
            downloadable resume for placements and internships.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button" onClick={handleComingSoon}>
              Start Building
            </button>
            <a className="btn btn-ghost" href="#features">
              See Features
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Product flow preview">
          <div className="panel-row">
            <span>1. Add Profiles</span>
            <span className="status status-done">done</span>
          </div>
          <div className="panel-row">
            <span>2. Generate Portfolio</span>
            <span className="status status-live">running</span>
          </div>
          <div className="panel-row">
            <span>3. Download Resume</span>
            <span className="status">pending</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
