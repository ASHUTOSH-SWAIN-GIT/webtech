import React from 'react';

function FeaturesSection() {
  return (
    <section className="section section-alt" id="features">
      <div className="container feature-layout">
        <div>
          <h2>Why use this for your portfolio project</h2>
          <p className="section-text">
            Built for students: clean output, clear structure, and minimal manual editing.
          </p>
        </div>

        <div className="feature-list">
          <div className="feature-item">
            <h3>Portfolio-first structure</h3>
            <p>Generates a portfolio flow around skills, projects, and achievements.</p>
          </div>
          <div className="feature-item">
            <h3>Resume aligned with your profile</h3>
            <p>Creates a downloadable resume tailored from LinkedIn and GitHub inputs.</p>
          </div>
          <div className="feature-item">
            <h3>Simple student workflow</h3>
            <p>No design tools needed. Enter links, review output, and apply faster.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;