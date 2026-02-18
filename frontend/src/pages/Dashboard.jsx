import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Dashboard = ({ onNavigate }) => {
    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const handleAction = (action) => {
        setLoading(true);
        // Simulate loading steps
        const steps = ['Analyzing profiles...', 'Extracting skills...', 'Generating assets...'];

        let step = 0;
        const interval = setInterval(() => {
            setActiveStep(step);
            step++;
            if (step >= steps.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setLoading(false);
                    onNavigate(action);
                }, 500);
            }
        }, 600);
    };

    if (loading) {
        return (
            <div className="loader-container" style={{ background: '#f0fdf4', color: '#111' }}>
                <div className="text-center">
                    <div className="spinner" style={{ margin: '0 auto var(--spacing-md)', borderColor: '#dcfce7', borderTopColor: '#166534' }}></div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#166534' }}>Building your Portfolio</h2>
                    <p style={{ color: '#15803d' }}>
                        {['Analyzing profiles...', 'Extracting skills...', 'Generating assets...'][activeStep] || 'Finalizing...'}
                    </p>
                </div>
            </div>
        );
    }

    // Styles for dashboard components - White & Green Theme
    const cardStyle = {
        backgroundColor: 'white',
        borderColor: '#e5e7eb',
        color: '#111',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)'
    };

    const inputStyle = {
        backgroundColor: '#f9fafb',
        borderColor: '#e5e7eb',
        color: '#111'
    };

    return (
        <div className="dashboard-container" style={{ backgroundColor: '#f0fdf4', color: '#111', minHeight: '100vh', paddingTop: '80px', backgroundImage: 'radial-gradient(#dcfce7 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            {/* Custom Dashboard Navbar */}
            <nav className="navbar" style={{ background: 'rgba(255,255,255,0.8)', borderBottom: '1px solid #e5e7eb', backdropFilter: 'blur(10px)' }}>
                <div className="container nav-container">
                    <div className="nav-logo" style={{ color: '#166534' }}>
                        <div className="nav-logo-icon" style={{ background: '#166534', color: 'white' }}>P</div>
                        Portfol.io
                    </div>
                    <div className="flex items-center gap-md">
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>aryan@example.com</span>
                        <Button variant="text" onClick={() => onNavigate('landing')} style={{ color: '#166534' }}>
                            Sign Out
                        </Button>
                    </div>
                </div>
            </nav>

            <div className="container" style={{ paddingTop: '40px' }}>
                <div className="dashboard-header animate-slide-up" style={{ textAlign: 'left', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                    <h1 className="dashboard-title" style={{ color: '#111' }}>Dashboard</h1>
                    <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>Welcome back, Aryan.</p>
                </div>

                <div className="dashboard-grid animate-slide-up" style={{ animationDelay: '0.1s', position: 'relative', zIndex: 1 }}>
                    {/* Left Column: Inputs */}
                    <div>
                        <Card style={{ ...cardStyle, height: '100%' }}>
                            <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Data Sources</h2>
                                <span style={{ fontSize: '0.75rem', fontWeight: 600, background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '99px' }}>● Connected</span>
                            </div>

                            <div className="gap-md flex-col flex">
                                <div>
                                    <label className="input-label" style={{ color: '#374151' }}>LinkedIn Profile</label>
                                    <input
                                        className="input-field"
                                        style={inputStyle}
                                        placeholder="https://linkedin.com/in/username"
                                        defaultValue="https://linkedin.com/in/aryansharma"
                                    />
                                    <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>Synced: Today at 9:41 AM</p>
                                </div>

                                <div>
                                    <label className="input-label" style={{ color: '#374151' }}>GitHub Profile</label>
                                    <input
                                        className="input-field"
                                        style={inputStyle}
                                        placeholder="https://github.com/username"
                                        defaultValue="https://github.com/aryansharma"
                                    />
                                    <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>Synced: Yesterday</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Actions */}
                    <div className="flex-col flex gap-md">
                        {/* Action 1 */}
                        <Card
                            hover
                            onClick={() => handleAction('resume')}
                            style={{ ...cardStyle, cursor: 'pointer', borderLeft: '4px solid #166534' }}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>Resume Builder</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Auto-generate from data sources.</p>
                                </div>
                                <span style={{ fontSize: '1.5rem', opacity: 0.8 }}>📄</span>
                            </div>
                            <div style={{ marginTop: '1.5rem' }}>
                                <Button style={{ width: '100%', background: '#166534', color: 'white', border: 'none' }}>Generate PDF</Button>
                            </div>
                        </Card>

                        {/* Action 2 */}
                        <Card
                            hover
                            onClick={() => handleAction('portfolio')}
                            style={{ ...cardStyle, cursor: 'pointer', borderLeft: '4px solid #22c55e' }}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>Portfolio Site</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Deploy to your custom domain.</p>
                                </div>
                                <span style={{ fontSize: '1.5rem', opacity: 0.8 }}>🚀</span>
                            </div>
                            <div style={{ marginTop: '1.5rem' }}>
                                <Button variant="secondary" style={{ width: '100%', borderColor: '#166534', color: '#166534', backgroundColor: 'white' }}>
                                    Deploy Site
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
