import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const { i18n } = useTranslation();

  // Función para cambiar idioma con feedback en consola para debug
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Función para scroll suave al Hero
  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --- Estilos ---
  const navStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '95%',
    maxWidth: '1200px',
    zIndex: 100,
    backgroundColor: 'rgba(5, 5, 5, 0.8)', 
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '100px',
    padding: '0.6rem 1.5rem',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
  };

  const containerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  };

  const getLinkStyle = (id) => ({
    color: hovered === id ? '#fff' : '#94a3b8',
    fontSize: '0.85rem',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '50px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: hovered === id ? 'rgba(91, 66, 243, 0.2)' : 'transparent',
    border: hovered === id ? '1px solid rgba(91, 66, 243, 0.4)' : '1px solid transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  });

  const langBtnStyle = (lang) => {
    // Verificamos si el idioma actual empieza con 'en' o 'es'
    const isActive = i18n.language && i18n.language.startsWith(lang);
    
    return {
      background: 'none',
      border: 'none',
      color: isActive ? '#5B42F3' : '#475569',
      fontSize: '0.75rem',
      fontWeight: '800',
      cursor: 'pointer',
      padding: '4px 8px',
      transition: 'all 0.3s ease',
      textDecoration: isActive ? 'underline' : 'none',
      textUnderlineOffset: '4px'
    };
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo que redirige al Hero */}
        <a 
          href="#hero" 
          onClick={scrollToHero}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
        >
          <img 
            src="/uno.png" 
            alt="Logo" 
            style={{
              height: '35px',
              width: '35px',
              borderRadius: '50%',
              border: '1.5px solid #5B42F3',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </a>
        
        {/* Links Sociales y Selector de Idioma */}
        <div style={linkContainerStyle}>
          <a 
            href="https://github.com/Franker24" 
            target="_blank" 
            rel="noreferrer" 
            style={getLinkStyle('github')}
            onMouseEnter={() => setHovered('github')}
            onMouseLeave={() => setHovered(null)}
          >
            <FaGithub size={18} />
            <span style={{ display: 'inline' }}>GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/francisco-kacmajor-927a16195/" 
            target="_blank" 
            rel="noreferrer" 
            style={getLinkStyle('linkedin')}
            onMouseEnter={() => setHovered('linkedin')}
            onMouseLeave={() => setHovered(null)}
          >
            <FaLinkedin size={18} />
            <span style={{ display: 'inline' }}>LinkedIn</span>
          </a>

          {/* Divisor Visual */}
          <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 10px' }}></div>

          {/* Selector de Idioma */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button 
              onClick={() => changeLanguage('en')} 
              style={langBtnStyle('en')}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('es')} 
              style={langBtnStyle('es')}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;