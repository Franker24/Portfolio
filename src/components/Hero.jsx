import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated, useTrail } from '@react-spring/web';

const Hero = () => {
  const { t } = useTranslation();

  // 1. Efecto Parallax para la imagen de fondo
  const [bgMove, setBgMove] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  // 2. Elementos para la animación de entrada (Trail)
  // Nota: Ahora los textos se obtienen de t()
  const items = [
    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-2px' }}>
      Francisco Javier <span style={{ color: '#3b82f6' }}>Kacmajor</span>
    </h1>,
    <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.875rem)', color: '#94a3b8', marginBottom: '2rem', fontWeight: '300' }}>
      {t('hero.role')}
    </h2>,
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <NitroButton href="#projects" text={t('hero.cta_projects')} primary />
      <NitroButton href="#info" text={t('hero.cta_about')} />
    </div>
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { mass: 1, tension: 210, friction: 20 },
    delay: 400
  });

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
      onMouseMove={({ clientX: x, clientY: y }) => setBgMove({ xy: calc(x, y) })}
      style={sectionStyle}
    >
      <animated.div style={{
        ...backgroundLayerStyle,
        transform: bgMove.xy.to((x, y) => `translate3d(${x / 45}px,${y / 45}px,0) scale(1.1)`),
      }} />

      <div style={{ zIndex: 10, position: 'relative' }}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            {index === 2 ? (
               <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <NitroButton onClick={(e) => handleScroll(e, '#projects')} href="#projects" text={t('hero.cta_projects')} primary />
                  <NitroButton onClick={(e) => handleScroll(e, '#info')} href="#info" text={t('hero.cta_about')} />
               </div>
            ) : items[index]}
          </animated.div>
        ))}
      </div>
    </section>
  );
};

// --- Botón optimizado ---
const NitroButton = ({ href, text, primary, onClick }) => {
  const [props, api] = useSpring(() => ({ scale: 1, shadow: 0 }));

  return (
    <animated.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => api.start({ scale: 1.05, shadow: 1 })}
      onMouseLeave={() => api.start({ scale: 1, shadow: 0 })}
      style={{
        ...nitroWrapperStyle,
        transform: props.scale.to(s => `scale(${s})`),
        backgroundImage: primary 
          ? 'linear-gradient(163deg, #00DDEB 0%, #5B42F3 50%, #AF40FF 100%)' 
          : 'linear-gradient(163deg, #334155 0%, #0f172a 100%)',
        boxShadow: props.shadow.to(sh => `0px 0px ${sh * 30}px 1px rgba(91, 66, 243, ${sh * 0.4})`)
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
    </animated.a>
  );
};

// --- Estilos ---
const sectionStyle = { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#ffffff', padding: '0 1.5rem', backgroundColor: '#000', position: 'relative', overflow: 'hidden' };
const backgroundLayerStyle = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `radial-gradient(circle at center, rgba(91, 66, 243, 0.15) 0%, rgba(0,0,0,0.8) 100%), url('/hero.svg.png')`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 };
const nitroWrapperStyle = { borderRadius: '20px', padding: '1.5px', textDecoration: 'none', display: 'inline-block', cursor: 'pointer' };
const nitroInnerStyle = { borderRadius: '18.5px', padding: '0.9rem 2.2rem', display: 'flex', alignItems: 'center', color: 'white', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' };

export default Hero;