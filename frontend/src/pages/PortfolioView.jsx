import React, { useEffect } from 'react';
import Button from '../components/Button';

const PortfolioView = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-view" style={{ backgroundColor: '#fff', color: '#111' }}>
            {/* Floating Nav */}
            <div className="portfolio-nav" style={{ backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #eee', mixBlendMode: 'normal' }}>
                <Button variant="text" onClick={onBack} style={{ color: '#111', padding: 0 }}>
                    ← Back
                </Button>
                <a href="#" style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.05em', color: '#15803d' }}>AS.</a>
                <a href="#contact" style={{ textDecoration: 'none', color: '#666' }}>Contact</a>
            </div>

            <div className="animate-fade-in">
                {/* Hero */}
                <header className="portfolio-hero" style={{ background: '#f0fdf4' }}>
                    <div>
                        <p className="animate-slide-up" style={{ color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Senior Frontend Engineer</p>
                        <h1 className="portfolio-title animate-slide-up" style={{ animationDelay: '0.1s', color: '#111' }}>
                            ARYAN<br />SHARMA
                        </h1>
                        <div className="animate-slide-up" style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center', animationDelay: '0.2s' }}>
                            <div style={{ height: '2px', width: '6rem', background: '#15803d' }}></div>
                            <p className="portfolio-subtitle" style={{ marginTop: 0, color: '#4b5563' }}>
                                Crafting digital experiences with a focus on motion, interaction, and accessibility. Based in Bangalore, India.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Selected Work */}
                <section className="portfolio-grid" style={{ background: '#fff' }}>
                    <h2 style={{ fontSize: '0.875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4rem' }}>Selected Work (04)</h2>

                    {[
                        { title: "E-Commerce Rebrand", category: "Design System", year: "2023" },
                        { title: "Fintech Dashboard", category: "Product Design", year: "2022" },
                        { title: "Travel App Mobile", category: "Mobile Dev", year: "2022" },
                        { title: "AI Generator", category: "Web Application", year: "2021" }
                    ].map((item, index) => (
                        <div key={index} className="project-card" style={{ borderTopColor: '#e5e7eb' }}>
                            <div style={{ marginBottom: '2rem', overflow: 'hidden', borderRadius: '4px' }}>
                                <div style={{ aspectRatio: '16/9', background: '#f3f4f6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* Abstract placeholder pattern */}
                                    <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, #e5e7eb 25%, transparent 25%) -20px 0, linear-gradient(225deg, #e5e7eb 25%, transparent 25%) -20px 0, linear-gradient(315deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, #e5e7eb 25%, transparent 25%)`, backgroundSize: '40px 40px', backgroundColor: '#f9fafb', opacity: 0.5 }}></div>
                                    <span style={{ fontSize: '2rem', fontWeight: 700, color: '#9ca3af', position: 'absolute', zIndex: 1 }}>Project Preview</span>
                                </div>
                            </div>
                            <div className="flex justify-between" style={{ alignItems: 'flex-start' }}>
                                <div>
                                    <h3 className="project-title" style={{ color: '#111', fontSize: '2.5rem', lineHeight: 1.1 }}>{item.title}</h3>
                                    <p className="project-meta" style={{ color: '#6b7280', marginTop: '0.5rem' }}>{item.category}</p>
                                </div>
                                <span className="project-meta" style={{ color: '#9ca3af' }}>{item.year}</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* About / Philosophy */}
                <section style={{ padding: '10vh 5vw', background: '#f8fafc', color: '#111' }}>
                    <div className="grid grid-cols-2" style={{ gap: '5vw' }}>
                        <div>
                            <h2 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: '0.9', color: '#111' }}>
                                Design is<br />Intelligence<br />Made Visible.
                            </h2>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p style={{ fontSize: '1.5rem', lineHeight: '1.5', color: '#374151', marginBottom: '3rem' }}>
                                I believe that good design is invisible. It facilitates user goals without drawing attention to itself. My approach combines technical precision with aesthetic sensitivity.
                            </p>
                            <div className="grid grid-cols-2 gap-xl">
                                <div>
                                    <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em', color: '#15803d' }}>Services</h4>
                                    <ul style={{ listStyle: 'none', color: '#4b5563', lineHeight: '1.8' }}>
                                        <li>Frontend Architecture</li>
                                        <li>UI/UX Design</li>
                                        <li>Design Systems</li>
                                        <li>Performance Tuning</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em', color: '#15803d' }}>Tech Stack</h4>
                                    <ul style={{ listStyle: 'none', color: '#4b5563', lineHeight: '1.8' }}>
                                        <li>React / Next.js</li>
                                        <li>Three.js / WebGL</li>
                                        <li>TypeScript</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <footer id="contact" className="portfolio-footer" style={{ background: '#166534' }}>
                    <h2 style={{ fontSize: '8vw', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '3rem', color: 'white' }}>
                        LET'S TALK
                    </h2>
                    <a href="mailto:aryan@example.com" style={{ display: 'inline-block', padding: '1rem 3rem', background: 'white', color: '#166534', borderRadius: '99px', fontSize: '1.25rem', fontWeight: 700 }}>
                        aryan@example.com
                    </a>
                    <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        <span>© 2024 Aryan Sharma</span>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <a href="#" style={{ color: 'white' }}>Twitter</a>
                            <a href="#" style={{ color: 'white' }}>LinkedIn</a>
                            <a href="#" style={{ color: 'white' }}>GitHub</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PortfolioView;
