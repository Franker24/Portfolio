import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Proyectos';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Importación del componente externo

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Controlamos el tiempo que se muestra el loader (3.5 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const appStyle = {
    backgroundColor: '#020617', // slate-950
    minHeight: '100vh',
    width: '100vw',
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
      {/* Si está cargando, muestra el componente Loader */}
      {isLoading ? (
        <Loader />
      ) : (
        <div style={appStyle}>
          <Navbar />

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