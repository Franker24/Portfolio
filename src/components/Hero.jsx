import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaRocket, FaPalette, FaBolt, FaCode } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  const firstName = "Francisco Javier";
  const lastName = "Kacmajor";

  // 1. Configuración de Roles para Typewriter
  const roles = t('hero.roles', { returnObjects: true }) || [
    'Desarrollador Web Frontend',
    'Especialista en React & Next.js',
    'Creador de Interfaces UI/UX',
    'Desarrollador de Aplicaciones Web'
  ];

  const roleList = Array.isArray(roles) ? roles : [roles];
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 2. Efecto Máquina de Escribir (Typewriter)
  useEffect(() => {
    const currentRole = roleList[roleIndex] || '';
    let timer;

    if (!isDeleting && typedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roleList.length);
    } else {
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roleList]);

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

      <div style={{ zIndex: 10, position: 'relative', maxWidth: '920px', width: '100%' }}>

        {/* 1. BADGE DE ESTADO CON PULSO EN VERDE NEÓN */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          padding: '7px 18px',
          borderRadius: '100px',
          marginBottom: '1.8rem',
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
        }}>
          <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
          <span style={{ fontSize: '0.74rem', fontWeight: '800', color: '#10b981', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {t('hero.badge') || 'DISPONIBLE PARA NUEVOS PROYECTOS & TRABAJO REMOTO'}
          </span>
        </div>

        {/* 2. TÍTULO CON ANIMACIÓN LETRA POR LETRA Y DESTELLO EN KACMAJOR */}
        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-2px', color: '#ffffff', lineHeight: '1.1' }}>
          {firstName.split('').map((char, index) => (
            <span
              key={`fn-${index}`}
              className="letter-animate"
              style={{ animationDelay: `${index * 0.035}s` }}
            >
              {char}
            </span>
          ))}
          {' '}
          <span style={{ color: '#3b82f6', display: 'inline-block', textShadow: '0 0 25px rgba(59, 130, 246, 0.4)' }}>
            {lastName.split('').map((char, index) => (
              <span
                key={`ln-${index}`}
                className="letter-animate"
                style={{ animationDelay: `${(firstName.length + index + 1) * 0.035}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        {/* 3. SUBTÍTULO CON EFECTO MÁQUINA DE ESCRIBIR */}
        <h2 
          style={{ 
            fontSize: 'clamp(1.15rem, 3.5vw, 1.75rem)', 
            color: '#cbd5e1', 
            marginBottom: '2.5rem', 
            fontWeight: '400', 
            lineHeight: '1.4',
            minHeight: '2.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span style={{ color: '#3b82f6', fontWeight: '700' }}>{typedText}</span>
          <span className="typewriter-cursor">|</span>
        </h2>

        {/* 4. BOTONES DE ACCIÓN PRINCIPALES */}
        <div 
          className="letter-animate"
          style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            marginBottom: '2.5rem',
            animationDelay: `${(firstName.length + lastName.length + 5) * 0.035}s`
          }}
        >
          <NitroButton onClick={(e) => handleScroll(e, '#projects')} href="#projects" text={t('hero.cta_projects')} primary />
          <NitroButton onClick={(e) => handleScroll(e, '#info')} href="#info" text={t('hero.cta_about')} />
        </div>

      </div>

      {/* 6. INDICADOR DE SCROLL ANIMADO */}
      <a
        href="#info"
        onClick={(e) => handleScroll(e, '#info')}
        style={{
          position: 'absolute',
          bottom: '1.8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: '#94a3b8',
          textDecoration: 'none',
          zIndex: 10,
          cursor: 'pointer',
          animation: 'bounceSlow 2s infinite'
        }}
      >
        <span style={{ fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '800' }}>
          SCROLL
        </span>
        <div style={{
          width: '20px',
          height: '32px',
          borderRadius: '100px',
          border: '2px solid rgba(255, 255, 255, 0.22)',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            borderRadius: '2px',
            backgroundColor: '#3b82f6',
            animation: 'scrollDot 1.5s infinite'
          }} />
        </div>
      </a>
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
        <span>{text}</span>
        {primary && (
          <FaArrowRight 
            style={{ 
              marginLeft: '10px', 
              fontSize: '0.9rem', 
              display: 'inline-block',
              verticalAlign: 'middle',
              transition: 'transform 0.2s ease'
            }} 
          />
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
  position: 'relative',
  zIndex: 2
};

const backgroundLayerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `radial-gradient(circle at center, rgba(91, 66, 243, 0.18) 0%, rgba(0,0,0,0.95) 100%), url('/hero.svg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  pointerEvents: 'none'
};

const nitroWrapperStyle = { borderRadius: '20px', padding: '1.5px', textDecoration: 'none', display: 'inline-block', cursor: 'pointer' };
const nitroInnerStyle = { borderRadius: '18.5px', padding: '0.9rem 2.2rem', display: 'flex', alignItems: 'center', color: 'white', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' };

export default Hero;