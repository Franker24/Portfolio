import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const footerAnim = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 80, friction: 20 },
  });

  const lineAnim = useSpring({
    width: inView ? '60px' : '0px',
    config: { mass: 1, tension: 50, friction: 20, delay: 400 },
  });

  const year = new Date().getFullYear();

  return (
    <animated.footer 
      ref={ref} 
      style={{ 
        ...footerAnim,
        padding: '5rem 2rem',
        backgroundColor: '#020617', 
        borderTop: '1px solid rgba(91, 66, 243, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <animated.div style={{ 
        height: '2px', 
        backgroundColor: '#5B42F3', 
        marginBottom: '1rem',
        ...lineAnim
      }}></animated.div>

      <p style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: '600', letterSpacing: '1px', textAlign: 'center', margin: 0 }}>
        FRANCISCO <span style={{ color: '#5B42F3', fontWeight: 'bold' }}>KACMAJOR</span>
      </p>

      <p style={{ color: '#64748b', fontSize: '0.85rem', textAlign: 'center', lineHeight: '1.6', maxWidth: '500px' }}>
        © {year} • {t('footer.dev_by')} <br />
        {t('footer.location')} <span style={{ color: '#94a3b8' }}>Buenos Aires, Argentina.</span>
      </p>
    </animated.footer>
  );
};

export default Footer;