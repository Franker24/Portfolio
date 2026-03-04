import React, { useState, useEffect } from 'react';
import './App.css'; // <--- Importación del CSS para el Dark/Light mode
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Proyectos';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Estado para el tema: intenta leer de localStorage, si no hay nada, usa 'dark'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Aplicar el atributo al HTML y guardar preferencia
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const appStyle = {
    backgroundColor: 'var(--bg-color)', // Dinámico vía CSS
    minHeight: '100vh',
    width: '100vw',
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
          {/* Le pasamos el tema y la función al Navbar para que el Switch funcione */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main style={{ width: '100%', flex: 1 }}>
            <Hero />
            <Info />
            <Projects />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;