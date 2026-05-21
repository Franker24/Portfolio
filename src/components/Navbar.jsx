import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { useSpring, animated, config } from '@react-spring/web';

// Componente para los iconos con animación de Hover
const NavItem = ({ children, onClick, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.15 : 1,
    backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'transparent',
    color: isHovered ? 'var(--text-color)' : 'var(--text-muted)',
    config: config.wobbly
  });

  const content = (
    <animated.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        ...springProps,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        cursor: 'pointer',
        textDecoration: 'none'
      }}
    >
      {children}
    </animated.div>
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

  // Animación de entrada fluida (desde la izquierda en PC, desde abajo en móvil)
  const navAnim = useSpring({
    from: {
      opacity: 0,
      transform: isMobile ? 'translate3d(-50%, 50px, 0)' : 'translate3d(-50px, -50%, 0)'
    },
    to: {
      opacity: 1,
      transform: isMobile ? 'translate3d(-50%, 0px, 0)' : 'translate3d(0px, -50%, 0)'
    },
    config: { mass: 1, tension: 120, friction: 20 },
    reset: true // Reinicia la animación si cambia entre móvil/desktop
  });

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

  // --- Estilos Base ---
  const containerStyle = {
    position: 'fixed',
    zIndex: 1000,
    // Lógica Responsive: Left en PC, Bottom en Móvil
    top: isMobile ? 'auto' : '50%',
    bottom: isMobile ? '20px' : 'auto',
    left: isMobile ? '50%' : '30px',

    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',

    // Glassmorphism Premium
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    border: '1px solid var(--border-color)',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  };

  const dividerStyle = {
    width: isMobile ? '1px' : '20px',
    height: isMobile ? '20px' : '1px',
    backgroundColor: 'var(--border-color)',
    margin: '4px 0'
  };

  return (
    <animated.nav style={{ ...containerStyle, ...navAnim }}>

      {/* 1. Logo (Botón de inicio) */}
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

      {/* 3. Controles Rápidos (Tema e Idioma) */}
      <NavItem onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
      </NavItem>

      <NavItem onClick={toggleLanguage}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase' }}>
          {i18n.language.substring(0, 2)}
        </span>
      </NavItem>

    </animated.nav>
  );
};

export default Navbar;