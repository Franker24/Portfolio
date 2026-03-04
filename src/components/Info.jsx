import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaUniversity, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiExpress, SiOpenlayers } from 'react-icons/si';

// --- SkillCard ---
const SkillCard = ({ skill, icon: Icon, url, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <animated.a 
      href={url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
        textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px',
        backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
        border: `1px solid ${isHovered ? 'var(--border-hover)' : 'var(--border-color)'}`,
        boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.15)' : 'none',
        padding: '2rem', borderRadius: '24px', 
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0px)',
        backdropFilter: 'blur(12px)',
        cursor: 'pointer'
      }}
    >
      <Icon style={{ 
        fontSize: '3.5rem', 
        color: isHovered ? 'var(--accent)' : 'var(--text-color)', 
        opacity: isHovered ? 1 : 0.4, 
        transition: 'all 0.3s ease',
        filter: isHovered ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none'
      }} />
      <span style={{ 
        fontSize: '1rem', fontWeight: '600', 
        color: 'var(--text-color)', 
        opacity: isHovered ? 1 : 0.6 
      }}>{skill}</span>
    </animated.a>
  );
};

// --- EduTag ---
const EduTag = ({ icon: Icon, title, subtitle, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        ...eduItemStyle, 
        backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)', 
        border: `1px solid ${isHovered ? color : 'var(--border-color)'}`,
        boxShadow: isHovered ? `0 10px 30px ${color}22` : 'none',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
        transition: 'all 0.3s ease',
        cursor: 'default'
      }}
    >
      <Icon style={{ color: color, fontSize: '1.5rem', filter: isHovered ? `drop-shadow(0 0 5px ${color})` : 'none' }} /> 
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: '600', color: 'var(--text-color)' }}>{title}</span> 
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{subtitle}</span>
      </div>
    </div>
  );
};

const Info = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const animFadeUp = (delay) => useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    delay,
  });

  const coreSkills = [
    { name: "React", icon: FaReact, url: "https://react.dev" },
    { name: "Node.js", icon: FaNodeJs, url: "https://nodejs.org" },
    { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org" },
    { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org" },
    { name: "Express", icon: SiExpress, url: "https://expressjs.com" },
    { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com" }
  ];

  const trail = useTrail(coreSkills.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    delay: 400,
  });

  return (
    <section id="info" ref={ref} style={sectionContainerStyle}>
      {/* SE ELIMINÓ EL ICONO DE FONTO (FaReact bgIconStyle) */}

      {/* SUMMARY BOX */}
      <animated.div style={{ ...summaryWrapperStyle, ...animFadeUp(0) }}>
        <div style={summaryBoxStyle}>
          <div style={statusBadgeStyle}>
            <div style={pulseDotStyle}></div>
            <span style={statusTextStyle}>{t('info.status')}</span>
          </div>
          <h3 style={titleStyle}>
            {t('info.title_p1')} <br/> <span style={{ color: 'var(--accent)' }}>{t('info.title_p2')}</span>
          </h3>
          <p style={descriptionStyle}>{t('info.description')}</p>
        </div>
      </animated.div>

      {/* EXPERIENCE */}
      <animated.div style={{ ...experienceContainerStyle, ...animFadeUp(400) }}>
        <h4 style={subTitleStyle}>{t('info.exp_title')}</h4>
        <div style={expCardStyle}>
            <div style={expHeaderStyle}>
               <SiOpenlayers style={{ color: 'var(--accent)', fontSize: '2.5rem' }} />
               <div>
                 <h5 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--text-color)' }}>{t('info.exp_role')}</h5>
                 <p style={{ margin: 0, color: 'var(--accent)', fontWeight: 'bold' }}>{t('info.exp_company')}</p>
               </div>
               <span style={dateBadgeStyle}>{t('info.exp_date')}</span>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>{t('info.exp_desc')}</p>
        </div>
      </animated.div>

      {/* SKILLS GRID */}
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <div style={skillsGridStyle}>
          {trail.map((style, index) => (
            <SkillCard key={coreSkills[index].name} {...coreSkills[index]} style={style} />
          ))}
        </div>
      </div>

      {/* EDUCATION TAGS */}
      <animated.div style={{ ...educationWrapperStyle, ...animFadeUp(800) }}>
        <EduTag icon={FaUniversity} title="UTN FRBA" subtitle={t('info.edu_utn')} color="#3b82f6" />
        <EduTag icon={FaCode} title="freeCodeCamp" subtitle={t('info.edu_fcc')} color="#ff00ff" />
      </animated.div>
    </section>
  );
};

// --- Estilos Actualizados ---
const sectionContainerStyle = { 
  padding: '12rem 2rem', 
  backgroundColor: 'var(--bg-color)', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '6rem', 
  position: 'relative', 
  overflow: 'hidden', 
  transition: 'background-color 0.4s ease' 
};

// bgIconStyle eliminado por limpieza

const summaryWrapperStyle = { maxWidth: '1100px', width: '100%', zIndex: 1 };
const summaryBoxStyle = { background: 'var(--glass-bg)', backdropFilter: 'blur(25px)', borderRadius: '40px', border: '1px solid var(--border-color)', padding: '4rem 3rem', textAlign: 'center' };
const statusBadgeStyle = { display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '2rem' };
const pulseDotStyle = { width: '8px', height: '8px', backgroundColor: 'var(--accent)', borderRadius: '50%' };
const statusTextStyle = { color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1.5px' };
const titleStyle = { fontSize: '3.5rem', color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-2px' };
const descriptionStyle = { color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' };
const experienceContainerStyle = { width: '100%', maxWidth: '1100px', zIndex: 1 };
const subTitleStyle = { color: 'var(--text-color)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' };
const expCardStyle = { background: 'var(--card-bg)', padding: '2.5rem', borderRadius: '32px', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' };
const expHeaderStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '1.5rem', flexWrap: 'wrap' };
const dateBadgeStyle = { marginLeft: 'auto', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '6px 14px', borderRadius: '12px', color: 'var(--text-muted)', fontSize: '0.9rem' };
const skillsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' };
const educationWrapperStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', maxWidth: '1100px', zIndex: 1 };
const eduItemStyle = { padding: '20px 30px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '15px' };

export default Info;