import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  // Detector de visibilidad
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animación para el contenedor (subida suave y fade)
  const footerAnim = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 20 },
  });

  // Animación para la línea decorativa (se expande de 0 a 60px)
  const lineAnim = useSpring({
    width: inView ? '60px' : '0px',
    config: { mass: 1, tension: 50, friction: 20, delay: 400 },
  });

  const footerStyle = {
    padding: '5rem 2rem',
    backgroundColor: '#020617', // Slate-950
    borderTop: '1px solid rgba(91, 66, 243, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const mainTextStyle = {
    color: '#f8fafc',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textAlign: 'center',
    margin: 0
  };

  const subTextStyle = {
    color: '#64748b',
    fontSize: '0.85rem',
    textAlign: 'center',
    lineHeight: '1.6',
    maxWidth: '500px'
  };

  const highlightStyle = {
    color: '#5B42F3',
    fontWeight: 'bold'
  };

  const date = new Date().getFullYear();

  return (
    <animated.footer ref={ref} style={{ ...footerStyle, ...footerAnim }}>
      {/* Línea animada que se expande al entrar en vista */}
      <animated.div style={{ 
        height: '2px', 
        backgroundColor: '#5B42F3', 
        marginBottom: '1rem',
        ...lineAnim
      }}></animated.div>

      <p style={mainTextStyle}>
        FRANCISCO <span style={highlightStyle}>KACMAJOR</span>
      </p>

      <p style={subTextStyle}>
        © {date} • Designed & Developed by me. <br />
        Based in <span style={{ color: '#94a3b8' }}>Buenos Aires, Argentina.</span>
      </p>

      <div style={{ 
        marginTop: '2rem',
        fontSize: '0.7rem',
        color: 'rgba(255,255,255,0.08)',
        textTransform: 'uppercase',
        letterSpacing: '5px'
      }}>
        Portfolio {date}
      </div>
    </animated.footer>
  );
};

export default Footer;