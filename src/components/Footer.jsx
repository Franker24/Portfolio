import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const isLight = theme === 'light';
  const textColor = isLight ? '#0f172a' : '#ffffff';
  const mutedColor = isLight ? '#475569' : '#94a3b8';
  const borderColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(91, 66, 243, 0.25)';

  return (
    <footer 
      style={{ 
        padding: '4rem 2rem',
        backgroundColor: 'transparent', 
        borderTop: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div style={{ 
        height: '2px', 
        width: '60px',
        backgroundColor: '#5B42F3', 
        marginBottom: '0.5rem'
      }}></div>

      <p style={{ color: textColor, fontSize: '1.1rem', fontWeight: '800', letterSpacing: '2px', textAlign: 'center', margin: 0 }}>
        FRANCISCO <span style={{ color: '#5B42F3', fontWeight: '900' }}>KACMAJOR</span>
      </p>

      <p style={{ color: mutedColor, fontSize: '0.85rem', textAlign: 'center', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
        © {year} • {t('footer.dev_by')} <br />
        {t('footer.location')} <span style={{ color: isLight ? '#334155' : '#cbd5e1', fontWeight: '600' }}>Buenos Aires, Argentina.</span>
      </p>
    </footer>
  );
};

export default Footer;