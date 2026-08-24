import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';

// Componente optimizado para los iconos con animación CSS pura (super fluido en scroll)
const NavItem = ({ children, onClick, href }) => {
  const content = (
    <div
      onClick={onClick}
      className="nav-item-btn"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'var(--text-muted)'
      }}
    >
      {children}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      {content}
    </a>
  ) : content;
};

const Navbar = ({ theme, toggleTheme }) => {
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Estilos Base Ultralivianos
  const containerStyle = {
    position: 'fixed',
    zIndex: 1000,
    top: isMobile ? 'auto' : '50%',
    bottom: isMobile ? '20px' : 'auto',
    left: isMobile ? '50%' : '30px',
    transform: isMobile ? 'translateX(-50%)' : 'translateY(-50%)',
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: 'var(--glass-bg)',
    border: '1px solid var(--border-color)',
    borderRadius: '24px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
    backfaceVisibility: 'hidden',
    willChange: 'transform'
  };

  const dividerStyle = {
    width: isMobile ? '1px' : '20px',
    height: isMobile ? '20px' : '1px',
    backgroundColor: 'var(--border-color)',
    margin: '4px 0'
  };

  return (
    <nav style={containerStyle}>
      {/* 1. Logo */}
      <a href="#hero" onClick={scrollToHero} style={{ textDecoration: 'none' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '14px',
          background: 'linear-gradient(135deg, var(--accent), #AF40FF)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: '900', fontSize: '1rem', letterSpacing: '1px',
          boxShadow: '0 4px 15px rgba(91, 66, 243, 0.4)'
        }}>
          FK
        </div>
      </a>

      <div style={dividerStyle}></div>

      {/* 2. Redes Sociales */}
      <NavItem href="https://github.com/Franker24">
        <FaGithub size={20} />
      </NavItem>

      <NavItem href="https://www.linkedin.com/in/francisco-kacmajor-927a16195/">
        <FaLinkedin size={20} />
      </NavItem>

      <div style={dividerStyle}></div>

      {/* 3. Controles Rápidos */}
      <NavItem onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
      </NavItem>

      <NavItem onClick={toggleLanguage}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase' }}>
          {i18n.language.substring(0, 2)}
        </span>
      </NavItem>
    </nav>
  );
};

export default Navbar;