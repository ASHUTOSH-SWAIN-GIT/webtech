import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import HowItWorksSection from '../components/HowItWorksSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import FinalCtaSection from '../components/FinalCtaSection.jsx';

function LandingPage() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FinalCtaSection />
    </div>
  );
}

export default LandingPage;