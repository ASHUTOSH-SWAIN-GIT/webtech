import React from 'react';

function HowItWorksSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <h2>How it works</h2>
        <p className="section-text">Simple 3-step flow for fast portfolio and resume creation.</p>

        <div className="card-grid">
          <article className="card">
            <h3>Step 1: Add Links</h3>
            <p>Paste your LinkedIn and GitHub URLs in the dashboard.</p>
          </article>
          <article className="card">
            <h3>Step 2: Generate</h3>
            <p>System analyzes your profile data and structures your portfolio content.</p>
          </article>
          <article className="card">
            <h3>Step 3: Download</h3>
            <p>Get a resume tailored to your profile and ready to submit.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;