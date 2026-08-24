import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaUniversity, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiExpress, SiOpenlayers, SiPython, SiVercel, SiGit, SiGithub, SiNpm, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import { BsTerminal } from "react-icons/bs";

// --- Item de Skill Individual (Estilo "Pill" con Hover CSS NATIVO) ---
const SkillItem = ({ skillKey, icon: Icon, color, onClick, isMobile }) => {
  const { t } = useTranslation();
  const name = t(`info.skills.${skillKey}.name`);

  return (
    <div
      onClick={onClick}
      className="skill-pill"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        padding: isMobile ? '1.25rem 0.5rem' : '1.5rem 1rem',
        borderRadius: '24px',
        backgroundColor: 'var(--skill-bg)',
        border: '1px solid var(--border-color)',
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <Icon style={{
        fontSize: isMobile ? '2.5rem' : '3rem',
        color: color || 'var(--accent)',
        opacity: 0.85,
        transition: 'all 0.25s ease'
      }} />
      <span style={{
        fontSize: isMobile ? '0.8rem' : '0.85rem',
        fontWeight: '700',
        letterSpacing: '1px',
        color: 'var(--text-color)',
        opacity: 0.8,
        textAlign: 'center'
      }}>{name}</span>
    </div>
  );
};

// --- Tarjeta de Categoría ---
const CategoryCard = ({ categoryKey, badgeKey, skills, onSkillClick, isMobile }) => {
  const { t } = useTranslation();
  const title = t(`info.categories.${categoryKey}`);
  const badge = t(`info.badges.${badgeKey}`);

  const cardStyle = {
    padding: isMobile ? '2rem 1.25rem' : '3rem 2.2rem',
    borderRadius: '36px',
    border: '1px solid var(--border-color)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--card-bg)'
  };

  return (
    <div style={cardStyle} className="hover-card">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: isMobile ? '1.5rem' : '2rem', 
        paddingBottom: isMobile ? '1rem' : '1.25rem', 
        borderBottom: '1px solid var(--border-color)' 
      }}>
        <h4 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: '900', color: 'var(--text-color)', margin: 0, letterSpacing: '-1px' }}>
          {title}
        </h4>
        {badge && <span style={categoryBadgeStyle}>{badge}</span>}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(80px, 1fr))', 
        gap: isMobile ? '1rem' : '1.25rem',
        justifyItems: 'center',
        width: '100%'
      }}>
        {skills.map((item, idx) => (
          <div key={idx} style={{ width: '100%' }}>
            <SkillItem 
              skillKey={item.key} 
              icon={item.icon} 
              color={item.color} 
              onClick={() => onSkillClick(item)} 
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- EduTag ---
const EduTag = ({ icon: Icon, title, subtitle, color, isMobile }) => {
  return (
    <div
      className="hover-card"
      style={{
        padding: isMobile ? '16px 20px' : '24px 40px',
        borderRadius: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        cursor: 'default',
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)'
      }}
    >
      <Icon style={{ color: color, fontSize: '1.5rem' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: '600', color: 'var(--text-color)', fontSize: isMobile ? '0.95rem' : '1rem' }}>{title}</span>
        <span style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{subtitle}</span>
      </div>
    </div>
  );
};

const Info = () => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSkill(null);
      }
    };
    if (selectedSkill) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSkill]);

  const experiences = [
    {
      key: "estudioms",
      icon: FaLaptopCode,
      color: "#10b981"
    },
    {
      key: "freelance",
      icon: FaCode,
      color: "#3b82f6"
    },
    {
      key: "onlydust",
      icon: SiOpenlayers,
      color: "#AF40FF"
    }
  ];

  // Estructura de Skills Frontend & Herramientas (Sin Docker)
  const skillCategories = [
    {
      key: "frontend",
      badgeKey: "stack",
      skills: [
        { key: "react", icon: FaReact, color: "#61DAFB" },
        { key: "nextjs", icon: SiNextdotjs, color: "#ffffff" },
        { key: "typescript", icon: SiTypescript, color: "#3178C6" },
        { key: "javascript", icon: SiJavascript, color: "#F7DF1E" },
        { key: "html", icon: SiHtml5, color: "#E34F26" },
        { key: "css", icon: SiCss3, color: "#1572B6" },
        { key: "tailwind", icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      key: "backend",
      badgeKey: "stack",
      skills: [
        { key: "nodejs", icon: FaNodeJs, color: "#339933" },
        { key: "express", icon: SiExpress, color: "#ffffff" },
        { key: "mongodb", icon: SiMongodb, color: "#47A248" }
      ]
    },
    {
      key: "tools",
      badgeKey: "tools",
      skills: [
        { key: "vercel", icon: SiVercel, color: "#ffffff" },
        { key: "git", icon: SiGit, color: "#F05032" },
        { key: "github", icon: SiGithub, color: "#ffffff" },
        { key: "terminal", icon: BsTerminal, color: "#4AF626" },
        { key: "npm", icon: SiNpm, color: "#CB3837" }
      ]
    },
    {
      key: "learning",
      badgeKey: "progress",
      skills: [
        { key: "python", icon: SiPython, color: "#3776AB" }
      ]
    }
  ];

  const responsiveSectionStyle = {
    padding: isMobile ? '4rem 1.25rem' : '8rem 2rem',
    backgroundColor: 'var(--bg-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '3rem' : '6rem',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    transform: 'translateZ(0)'
  };

  const responsiveSummaryBoxStyle = {
    borderRadius: isMobile ? '28px' : '40px',
    border: '1px solid var(--border-color)',
    padding: isMobile ? '2.5rem 1.5rem' : '4.5rem 4rem',
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'var(--card-bg)'
  };

  const responsiveTitleStyle = {
    fontSize: isMobile ? '2.2rem' : '3.8rem',
    color: 'var(--text-color)',
    marginBottom: '1.5rem',
    fontWeight: '900',
    letterSpacing: '-1.5px',
    lineHeight: '1.1'
  };

  const responsiveDescriptionStyle = {
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    fontSize: isMobile ? '1.05rem' : '1.2rem',
    maxWidth: '820px',
    margin: '0 auto'
  };

  const responsiveExpCardStyle = {
    padding: isMobile ? '2rem 1.5rem' : '3rem 2.5rem',
    borderRadius: '32px',
    border: '1px solid var(--border-color)',
    width: '100%',
    backgroundColor: 'var(--card-bg)'
  };

  const responsiveCategoryGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
    gap: isMobile ? '2rem' : '3rem',
    width: '100%'
  };

  const neonTitleStyle = {
    fontSize: isMobile ? '2.2rem' : '3rem',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: '3rem',
    letterSpacing: '-1.5px',
    color: '#fff',
    background: 'linear-gradient(135deg, #00DDEB, #5B42F3, #AF40FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    width: '100%'
  };

  return (
    <section id="info" style={responsiveSectionStyle}>

      {/* SUMMARY BOX */}
      <div style={summaryWrapperStyle}>
        <div style={responsiveSummaryBoxStyle} className="hover-card">
          <div style={statusBadgeStyle}>
            <div style={pulseDotStyle}></div>
            <span style={statusTextStyle}>{t('info.status')}</span>
          </div>
          <h3 style={responsiveTitleStyle}>
            {t('info.title_p1')} <br /> <span style={{ color: 'var(--accent)' }}>{t('info.title_p2')}</span>
          </h3>
          <p style={responsiveDescriptionStyle}>{t('info.description')}</p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div style={{ width: '100%', maxWidth: '1000px', zIndex: 1 }}>
        <h3 style={neonTitleStyle}>{t('info.exp_title')}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, idx) => {
            const ExpIcon = exp.icon;
            return (
              <div key={idx} style={{ width: '100%' }}>
                <div style={responsiveExpCardStyle} className="hover-card">
                  <div style={expHeaderStyle}>
                    <ExpIcon style={{ color: exp.color, fontSize: '2.5rem' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: isMobile ? '1.2rem' : '1.4rem', color: 'var(--text-color)' }}>{t(`info.experiences.${exp.key}.role`)}</h4>
                      <p style={{ margin: 0, color: 'var(--accent)', fontWeight: 'bold' }}>{t(`info.experiences.${exp.key}.company`)}</p>
                    </div>
                    <span style={dateBadgeStyle}>{t(`info.experiences.${exp.key}.date`)}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: isMobile ? '0.95rem' : '1.05rem', margin: 0 }}>{t(`info.experiences.${exp.key}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SKILLS CATEGORY GRID */}
      <div style={{ width: '100%', maxWidth: '1300px', zIndex: 1, marginTop: '1rem' }}>
        <h3 style={neonTitleStyle}>{t('info.tech_stack')}</h3>
        <div style={responsiveCategoryGridStyle}>
          {skillCategories.map((category, index) => (
            <CategoryCard 
              key={index} 
              categoryKey={category.key} 
              badgeKey={category.badgeKey}
              skills={category.skills} 
              onSkillClick={setSelectedSkill}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* EDUCATION TAGS */}
      <div style={educationWrapperStyle}>
        <div style={{ flexGrow: 1, minWidth: isMobile ? '100%' : '280px', maxWidth: '500px' }}>
          <EduTag icon={FaUniversity} title="UTN FRBA" subtitle={t('info.edu_utn')} color="#3b82f6" isMobile={isMobile} />
        </div>
        <div style={{ flexGrow: 1, minWidth: isMobile ? '100%' : '280px', maxWidth: '500px' }}>
          <EduTag icon={FaCode} title="freeCodeCamp" subtitle={t('info.edu_fcc')} color="#ff00ff" isMobile={isMobile} />
        </div>
      </div>

      {/* SKILL DETAIL MODAL */}
      {selectedSkill && typeof document !== 'undefined' && createPortal(
        <div style={modalOverlayStyle} onClick={() => setSelectedSkill(null)}>
          <div
            style={{
              backgroundColor: 'var(--bg-color)',
              border: `1px solid ${selectedSkill.color || 'var(--border-color)'}`,
              borderRadius: '28px',
              padding: isMobile ? '2.5rem 1.5rem' : '3rem',
              maxWidth: '480px',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSkill(null)}
              style={modalCloseButtonStyle}
              aria-label="Close"
            >
              &times;
            </button>

            {React.createElement(selectedSkill.icon, {
              style: {
                fontSize: '4rem',
                color: selectedSkill.color || 'var(--accent)',
                marginBottom: '1.5rem'
              }
            })}

            <h4 style={{
              fontSize: '1.8rem',
              fontWeight: '900',
              color: 'var(--text-color)',
              marginBottom: '1rem'
            }}>
              {t(`info.skills.${selectedSkill.key}.name`)}
            </h4>

            <p style={{
              color: 'var(--text-muted)',
              lineHeight: '1.6',
              fontSize: '1.05rem',
              margin: 0
            }}>
              {t(`info.skills.${selectedSkill.key}.desc`)}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

// --- Estilos Estáticos ---
const summaryWrapperStyle = { maxWidth: '1000px', width: '100%', zIndex: 1 };
const statusBadgeStyle = { display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '10px 20px', borderRadius: '100px', marginBottom: '2rem' };
const pulseDotStyle = { width: '10px', height: '10px', backgroundColor: 'var(--accent)', borderRadius: '50%' };
const statusTextStyle = { color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1.5px' };
const expHeaderStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '1.5rem', flexWrap: 'wrap' };
const dateBadgeStyle = { marginLeft: 'auto', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '8px 18px', borderRadius: '12px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '600' };

const categoryBadgeStyle = {
  fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px',
  color: 'var(--accent)', backgroundColor: 'rgba(59, 130, 246, 0.1)',
  padding: '6px 14px', borderRadius: '100px'
};

const educationWrapperStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1100px', zIndex: 1, marginTop: '1rem', width: '100%', boxSizing: 'border-box' };

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalCloseButtonStyle = {
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  background: 'none',
  border: 'none',
  color: 'var(--text-color)',
  fontSize: '1.6rem',
  cursor: 'pointer',
  opacity: 0.7,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
};

export default Info;