import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      style={sectionStyle}
    >
      <div style={backgroundLayerStyle} />

      <div style={{ zIndex: 10, position: 'relative', maxWidth: '900px', width: '100%' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-2px', color: '#ffffff' }}>
          Francisco Javier <span style={{ color: '#3b82f6' }}>Kacmajor</span>
        </h1>

        <h2 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.75rem)', color: '#94a3b8', marginBottom: '2.5rem', fontWeight: '300', lineHeight: '1.4' }}>
          {t('hero.role')}
        </h2>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <NitroButton onClick={(e) => handleScroll(e, '#projects')} href="#projects" text={t('hero.cta_projects')} primary />
          <NitroButton onClick={(e) => handleScroll(e, '#info')} href="#info" text={t('hero.cta_about')} />
        </div>
      </div>
    </section>
  );
};

// --- Botón con Hover CSS Nativo (super fluido) ---
const NitroButton = ({ href, text, primary, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="nitro-btn"
      style={{
        ...nitroWrapperStyle,
        backgroundImage: primary 
          ? 'linear-gradient(163deg, #00DDEB 0%, #5B42F3 50%, #AF40FF 100%)' 
          : 'linear-gradient(163deg, #334155 0%, #0f172a 100%)',
      }}
    >
      <div style={{
        ...nitroInnerStyle,
        backgroundColor: primary ? '#050505' : '#0f172a',
      }}>
        {text}
        {primary && (
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" style={{marginLeft: '8px'}}>
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </a>
  );
};

// --- Estilos Nativos Nivel Producción ---
const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#ffffff',
  padding: '6rem 1.5rem 4rem',
  backgroundColor: '#000000',
  position: 'relative'
};

const backgroundLayerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `radial-gradient(circle at center, rgba(91, 66, 243, 0.15) 0%, rgba(0,0,0,0.85) 100%), url('/hero.svg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  pointerEvents: 'none'
};

const nitroWrapperStyle = { borderRadius: '20px', padding: '1.5px', textDecoration: 'none', display: 'inline-block', cursor: 'pointer' };
const nitroInnerStyle = { borderRadius: '18.5px', padding: '0.9rem 2.2rem', display: 'flex', alignItems: 'center', color: 'white', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' };

export default Hero;