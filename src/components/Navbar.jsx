import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Recibimos theme y toggleTheme desde App.jsx
const Navbar = ({ theme, toggleTheme }) => {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const scrollToHero = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --- Estilos de la Animación Hamburger + Switch de Uiverse ---
  const customStyles = `
    #checkbox { display: none; }
    .toggle {
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition-duration: .5s;
    }
    .bars {
      width: 100%;
      height: 3px;
      background-color: #5B42F3;
      border-radius: 4px;
      transition-duration: .5s;
    }
    #bar2 { transition-duration: .8s; }
    #bar1, #bar3 { width: 70%; }
    
    #checkbox:checked + .toggle .bars { position: absolute; }
    #checkbox:checked + .toggle #bar2 { transform: scaleX(0); }
    #checkbox:checked + .toggle #bar1 { width: 100%; transform: rotate(45deg); }
    #checkbox:checked + .toggle #bar3 { width: 100%; transform: rotate(-45deg); }
    #checkbox:checked + .toggle { transform: rotate(180deg); }

    /* Estilos del Switch Uiverse */
    .toggle-switch {
      position: relative;
      width: 55px;
      height: 28px;
      --light: #d8dbe0;
      --dark: #28292c;
    }
    .switch-label {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--dark);
      border-radius: 25px;
      cursor: pointer;
      border: 2px solid var(--dark);
    }
    .checkbox-theme {
      position: absolute;
      display: none;
    }
    .slider {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 25px;
      transition: 0.3s;
    }
    .checkbox-theme:checked ~ .slider {
      background-color: var(--light);
    }
    .slider::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      box-shadow: inset 7px -3px 0px 0px var(--light);
      background-color: var(--dark);
      transition: 0.3s;
    }
    .checkbox-theme:checked ~ .slider::before {
      transform: translateX(25px);
      background-color: var(--dark);
      box-shadow: none;
    }
  `;

  const navStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '95%',
    maxWidth: '1200px',
    zIndex: 1000,
    backgroundColor: 'rgba(5, 5, 5, 0.85)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: isMobile && isOpen ? '25px' : '100px',
    padding: '0.6rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <>
      <style>{customStyles}</style>
      <nav style={navStyle}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a href="#hero" onClick={scrollToHero} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img 
              src="/uno.png" 
              alt="Logo" 
              style={{ height: '35px', width: '35px', borderRadius: '50%', border: '1.5px solid #5B42F3', objectFit: 'cover' }}
            />
          </a>

          {/* Desktop Links */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <a href="https://github.com/Franker24" target="_blank" rel="noreferrer" 
                 style={getLinkStyle('github', hovered)} onMouseEnter={() => setHovered('github')} onMouseLeave={() => setHovered(null)}>
                <FaGithub size={18} /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/francisco-kacmajor-927a16195/" target="_blank" rel="noreferrer" 
                 style={getLinkStyle('linkedin', hovered)} onMouseEnter={() => setHovered('linkedin')} onMouseLeave={() => setHovered(null)}>
                <FaLinkedin size={18} /> <span>LinkedIn</span>
              </a>

              {/* TEMA SWITCH DESKTOP */}
              <div className="toggle-switch" style={{ marginLeft: '10px' }}>
                <label className="switch-label">
                  <input 
                    type="checkbox" 
                    className="checkbox-theme" 
                    checked={theme === 'light'} 
                    onChange={toggleTheme} 
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 10px' }}></div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button onClick={() => changeLanguage('en')} style={langBtnStyle('en', i18n)}>EN</button>
                <button onClick={() => changeLanguage('es')} style={langBtnStyle('es', i18n)}>ES</button>
              </div>
            </div>
          )}

          {/* Mobile Section */}
          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {/* TEMA SWITCH MOBILE */}
              <div className="toggle-switch">
                <label className="switch-label">
                  <input 
                    type="checkbox" 
                    className="checkbox-theme" 
                    checked={theme === 'light'} 
                    onChange={toggleTheme} 
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div>
                <input 
                  type="checkbox" 
                  id="checkbox" 
                  checked={isOpen} 
                  onChange={() => setIsOpen(!isOpen)} 
                />
                <label htmlFor="checkbox" className="toggle">
                  <div className="bars" id="bar1"></div>
                  <div className="bars" id="bar2"></div>
                  <div className="bars" id="bar3"></div>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && (
          <div style={{
            maxHeight: isOpen ? '300px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            padding: isOpen ? '20px 0' : '0'
          }}>
            <a href="https://github.com/Franker24" target="_blank" rel="noreferrer" style={getLinkStyle('github_m', hovered)}>
              <FaGithub size={18} /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/francisco-kacmajor-927a16195/" target="_blank" rel="noreferrer" style={getLinkStyle('linkedin_m', hovered)}>
              <FaLinkedin size={18} /> <span>LinkedIn</span>
            </a>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <button onClick={() => changeLanguage('en')} style={langBtnStyle('en', i18n)}>EN</button>
              <button onClick={() => changeLanguage('es')} style={langBtnStyle('es', i18n)}>ES</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const getLinkStyle = (id, hovered) => ({
  color: hovered === id ? '#fff' : '#94a3b8',
  fontSize: '0.85rem',
  textDecoration: 'none',
  fontWeight: '600',
  padding: '8px 16px',
  borderRadius: '50px',
  transition: 'all 0.3s ease',
  backgroundColor: hovered === id ? 'rgba(91, 66, 243, 0.15)' : 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

const langBtnStyle = (lang, i18n) => {
  const isActive = i18n.language && i18n.language.startsWith(lang);
  return {
    background: 'none',
    border: 'none',
    color: isActive ? '#5B42F3' : '#475569',
    fontSize: '0.75rem',
    fontWeight: '800',
    cursor: 'pointer',
    padding: '4px 8px',
    textDecoration: isActive ? 'underline' : 'none'
  };
};

export default Navbar;