import React from 'react';

function HeroSection() {
  const handleGetStarted = () => {
    window.alert('Dashboard setup is the next step. Landing page is ready.');
  };

  return (
    <main className="hero">
      <div className="container hero-content">
        <p className="tag">Portfolio Generator SaaS</p>
        <h1>Build a clean portfolio and resume from your LinkedIn and GitHub in minutes.</h1>
        <p className="subtitle">
          Paste your profile links, let the platform process your data, and download a tailored resume.
        </p>
        <button className="btn btn-primary" type="button" onClick={handleGetStarted}>
          Open Dashboard
        </button>
      </div>
    </main>
  );
}

export default HeroSection;
