import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Card from '../components/Card';

const LandingPage = ({ onGetStarted }) => {
  // Styles for dark cards
  const cardStyle = {
    background: '#1a1a1a',
    borderColor: '#333',
    color: 'white'
  };

  const iconStyle = {
    background: '#333',
    color: 'white',
    // Slight transparency for better blend
    border: '1px solid #444'
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="landing-hero" style={{ paddingTop: '0', paddingBottom: '0', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>

        {/* Background Image & Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden'
        }}>
          <img
            src="/landingpagesection.png"
            alt="Hero Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)'
          }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="hero-badge animate-slide-up" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            ✨ Launch your career today
          </div>

          <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.1s', color: 'white' }}>
            Craft your identity. <br />
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>In seconds.</span>
          </h1>

          <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s', color: 'rgba(255,255,255,0.8)' }}>
            Transform your LinkedIn & GitHub profiles into a world-class portfolio website and resume. No coding required. Just pure aesthetic.
          </p>

          <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button onClick={onGetStarted} variant="secondary" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}>
              Get Started
            </Button>
            <Button variant="secondary" style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="landing-features" style={{ background: '#050505', borderTop: 'none', color: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Everything you need to stand out</h2>
            <p style={{ fontSize: '1.25rem', color: '#888' }}>
              We've analyzed thousands of successful portfolios to create the ultimate personal branding tool.
            </p>
          </div>

          <div className="features-grid">
            {/* Large Card */}
            <Card className="feature-card-large" style={cardStyle} hover>
              <div className="bento-icon" style={iconStyle}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>Instant Deployment</h3>
              <p style={{ color: '#999' }}>Connect your accounts and we'll automatically generate a fully hosted, SEO-optimized portfolio website for you.</p>
            </Card>

            {/* Tall Card - Inverted for contrast or kept dark? Asking for dark theme heavily. Keeping it highlighted but dark compatible. */}
            <Card className="feature-card-tall" style={{ backgroundColor: '#111', color: 'var(--white)', borderColor: '#444' }} hover>
              <div className="bento-icon" style={{ background: 'rgba(255,255,255,0.1)' }}>🎨</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--white)' }}>Premium Templates</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
                Access a curated collection of high-agency designs. Minimalist, brutalist, or typographic - whatever fits your vibe.
              </p>
            </Card>

            {/* Small Card 1 */}
            <Card style={cardStyle} hover>
              <div className="bento-icon" style={iconStyle}>📄</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>ATS-Ready Resumes</h3>
              <p style={{ fontSize: '0.9rem', color: '#999' }}>Targeted keywords and clean formatting to get past the bots.</p>
            </Card>

            {/* Small Card 2 */}
            <Card style={cardStyle} hover>
              <div className="bento-icon" style={iconStyle}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>Real-time Sync</h3>
              <p style={{ fontSize: '0.9rem', color: '#999' }}>Update your LinkedIn? Your portfolio updates automatically.</p>
            </Card>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: 'var(--spacing-3xl) 0', backgroundColor: '#050505', color: 'white' }}>
        <div className="container flex justify-between items-center">
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Portfol.io</div>
          <div style={{ color: '#444', fontSize: '0.875rem' }}>© 2024 Portfol.io Inc. Crafted in San Francisco.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;