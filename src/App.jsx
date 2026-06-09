import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Proyectos';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const appStyle = {
    backgroundColor: 'var(--bg-color)',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: 0,
    padding: 0,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    overflowX: 'hidden',
    transition: 'background-color 0.4s ease, color 0.4s ease'
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={appStyle}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main style={{ width: '100%', flex: 1 }}>
            <Hero />
            <Info />
            <Projects theme={theme} />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
