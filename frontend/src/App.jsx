import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ResumeView from './pages/ResumeView';
import PortfolioView from './pages/PortfolioView';
import AuthPage from './pages/AuthPage';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    navigateTo('dashboard');
  };

  return (
    <div className="app">
      {currentView === 'landing' && (
        <LandingPage onGetStarted={() => navigateTo('auth')} />
      )}

      {currentView === 'auth' && (
        <AuthPage onLogin={handleLogin} />
      )}

      {currentView === 'dashboard' && (
        <Dashboard onNavigate={navigateTo} />
      )}

      {currentView === 'resume' && (
        <ResumeView onBack={() => navigateTo('dashboard')} />
      )}

      {currentView === 'portfolio' && (
        <PortfolioView onBack={() => navigateTo('dashboard')} />
      )}
    </div>
  );
}

export default App;
