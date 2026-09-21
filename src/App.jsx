import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Proyectos';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  // Loader desactivado por requerimiento (componente Loader preservado intacto en ./components/Loader)
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Observer global de animaciones de entrada al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    overflowX: 'hidden'
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={appStyle}>
          <ParticlesBackground theme={theme} />
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main style={{ width: '100%', flex: 1, position: 'relative', zIndex: 1 }}>
            <Hero />
            <Info />
            <Projects theme={theme} />
            <Pricing theme={theme} />
          </main>

          <Footer theme={theme} />
        </div>
      )}
    </>
  );
}

export default App;
