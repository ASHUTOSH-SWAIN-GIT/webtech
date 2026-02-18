import React from 'react';
import Button from '../components/Button';

const ResumeView = ({ onBack }) => {
    return (
        <div className="resume-view">
            {/* Toolbar */}
            <div className="resume-toolbar">
                <div className="container nav-container">
                    <Button variant="text" onClick={onBack}>← Back to Dashboard</Button>
                    <div className="flex gap-sm">
                        <Button variant="secondary" style={{ transform: 'scale(0.9)' }}>Edit</Button>
                        <Button variant="primary" style={{ transform: 'scale(0.9)' }}>Download PDF</Button>
                    </div>
                </div>
            </div>

            <div className="container flex justify-center">
                {/* A4 Paper */}
                <div className="resume-paper animate-slide-up">
                    <header className="resume-header">
                        <div>
                            <h1 className="resume-name">Aryan Sharma</h1>
                            <p className="resume-role">Senior Frontend Engineer</p>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.9rem', lineHeight: '1.4' }}>
                            <p>aryan@example.com</p>
                            <p>+91 98765 43210</p>
                            <p>Bangalore, India</p>
                            <p style={{ fontWeight: 600, marginTop: '0.25rem', color: '#000' }}>linkedin.com/in/aryansharma</p>
                        </div>
                    </header>

                    <main>
                        <section className="resume-section">
                            <h2 className="resume-section-title">Professional Experience</h2>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3 className="resume-item-title">Flipkart</h3>
                                    <span className="resume-item-date">2021 - Present</span>
                                </div>
                                <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', color: '#444' }}>Senior Frontend Engineer</div>
                                <ul className="portfolio-list">
                                    <li>Spearheaded the migration of the mobile site to React 18, improving perceived load times by 60%.</li>
                                    <li>Architected the new Design System currently used by over 200 developers.</li>
                                    <li>Mentored junior engineers and conducted weekly frontend workshops.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <div className="resume-item-header">
                                    <h3 className="resume-item-title">Zomato</h3>
                                    <span className="resume-item-date">2018 - 2021</span>
                                </div>
                                <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', color: '#444' }}>Software Development Engineer II</div>
                                <ul className="portfolio-list">
                                    <li>Developed the revamped order tracking interface, increasing user engagement by 15%.</li>
                                    <li>Optimized API response times for the restaurant partner dashboard by 40%.</li>
                                    <li>Implemented pixel-perfect designs for global marketing campaigns.</li>
                                </ul>
                            </div>
                        </section>

                        <div className="grid grid-cols-3 gap-xl">
                            <div style={{ gridColumn: 'span 2' }}>
                                <section className="resume-section">
                                    <h2 className="resume-section-title">Projects</h2>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>E-commerce Analytics Dashboard</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#444', marginTop: '0.25rem', fontFamily: 'var(--font-sans)' }}>A comprehensive analytics dashboard for online retailers built with Next.js and D3.js. Handles real-time data visualization for over 10k concurrent users.</p>
                                    </div>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>FlowState Task Manager</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#444', marginTop: '0.25rem', fontFamily: 'var(--font-sans)' }}>Productivity application focusing on flow state, featuring a custom drag-and-drop interface and offline syncing capabilities.</p>
                                    </div>
                                </section>
                            </div>

                            <div style={{ gridColumn: 'span 1' }}>
                                <section className="resume-section">
                                    <h2 className="resume-section-title">Education</h2>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: '0.95rem' }}>B.Tech Computer Science</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#444', fontFamily: 'var(--font-sans)' }}>IIT Bombay</p>
                                        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem', fontFamily: 'var(--font-sans)' }}>2014 - 2018</p>
                                    </div>
                                </section>

                                <section className="resume-section">
                                    <h2 className="resume-section-title">Skills</h2>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', color: '#333' }}>
                                        {['JavaScript (ES6+)', 'React / Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'AWS', 'UI/UX Design'].map(skill => (
                                            <span key={skill} style={{ background: '#f4f4f5', padding: '2px 8px', borderRadius: '4px' }}>{skill}</span>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ResumeView;
