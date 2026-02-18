import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const AuthPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        setTimeout(() => {
            onLogin();
        }, 800);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0fdf4',
            color: '#111',
            backgroundImage: 'radial-gradient(#dcfce7 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}>
            <div className="animate-fade-in" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                background: 'white',
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: '#166534',
                        borderRadius: '50%',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic'
                    }}>P</div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', color: '#111' }}>Welcome back</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb', color: '#111', '::placeholder': { color: '#9ca3af' } }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ background: '#f9fafb', borderColor: '#e5e7eb', color: '#111' }}
                            required
                        />
                    </div>

                    <Button
                        variant="secondary"
                        type="submit"
                        style={{ width: '100%', backgroundColor: '#166534', color: 'white', border: 'none', fontWeight: 600 }}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                    Don't have an account? <a href="#" style={{ color: '#166534', textDecoration: 'underline' }}>Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
