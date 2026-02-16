import React from 'react';

function FinalCtaSection() {
  const handleComingSoon = () => {
    window.alert('Coming soon');
  };

  return (
    <section className="section">
      <div className="container cta-box">
        <h2>Ready to generate your portfolio and resume?</h2>
        <p className="section-text">Start from your profiles and create a submission-ready output in minutes.</p>
        <button className="btn btn-primary" type="button" onClick={handleComingSoon}>
          Open Dashboard
        </button>
      </div>
    </section>
  );
}

export default FinalCtaSection;
