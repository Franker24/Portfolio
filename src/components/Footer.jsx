import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        padding: '4rem 2rem',
        backgroundColor: 'transparent', 
        borderTop: '1px solid rgba(91, 66, 243, 0.25)',
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

      <p style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: '600', letterSpacing: '1px', textAlign: 'center', margin: 0 }}>
        FRANCISCO <span style={{ color: '#5B42F3', fontWeight: 'bold' }}>KACMAJOR</span>
      </p>

      <p style={{ color: '#64748b', fontSize: '0.85rem', textAlign: 'center', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
        © {year} • {t('footer.dev_by')} <br />
        {t('footer.location')} <span style={{ color: '#94a3b8' }}>Buenos Aires, Argentina.</span>
      </p>
    </footer>
  );
};

export default Footer;