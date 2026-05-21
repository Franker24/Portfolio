import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useSpring, animated, useTransition } from '@react-spring/web';
import { FaReact, FaNodeJs, FaUniversity, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiExpress, SiOpenlayers, SiPython, SiDocker, SiVercel, SiGit, SiGithub, SiNpm, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import { BsTerminal } from "react-icons/bs";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HoverBox = ({ children, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverSpring, hoverApi] = useSpring(() => ({
    y: 0,
    scale: 1,
    glow: 0
  }));

  const handleEnter = () => {
    setIsHovered(true);
    hoverApi.start({ y: -6, scale: 1.01, glow: 1 });
  };

  const handleLeave = () => {
    setIsHovered(false);
    hoverApi.start({ y: 0, scale: 1, glow: 0 });
  };

  return (
    <animated.div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        transform: hoverSpring.scale.to((scale) => `translateY(${hoverSpring.y.get()}px) scale(${scale})`),
        boxShadow: hoverSpring.glow.to((glow) => `0 30px 60px rgba(59, 130, 246, ${0.12 * glow})`),
        borderColor: isHovered ? 'var(--border-hover)' : 'var(--border-color)',
        backgroundColor: isHovered ? 'var(--card-bg-hover)' : style?.backgroundColor || 'var(--card-bg)',
        transition: 'background-color 0.4s ease, border-color 0.4s ease'
      }}
    >
      {children}
    </animated.div>
  );
};

// --- Item de Skill Individual (Estilo "Pill" o Tarjeta Interna) ---
const SkillItem = ({ skillKey, icon: Icon, color, onClick, isMobile }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const name = t(`info.skills.${skillKey}.name`);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        padding: isMobile ? '1.25rem 0.5rem' : '1.5rem 1rem',
        borderRadius: '24px',
        backgroundColor: isHovered ? 'var(--skill-bg-hover)' : 'var(--skill-bg)',
        border: `1px solid ${isHovered ? (color || 'var(--border-hover)') : 'var(--border-color)'}`,
        boxShadow: isHovered ? `0 10px 25px ${color || 'var(--accent)'}25` : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <Icon style={{
        fontSize: isMobile ? '2.5rem' : '3rem',
        color: isHovered ? (color || 'var(--accent)') : 'var(--text-color)',
        opacity: isHovered ? 1 : 0.6,
        transition: 'all 0.3s ease',
        filter: isHovered ? `drop-shadow(0 0 12px ${color || 'var(--accent)'}88)` : 'none'
      }} />
      <span style={{
        fontSize: isMobile ? '0.8rem' : '0.85rem', fontWeight: '700', letterSpacing: '1px',
        color: 'var(--text-color)',
        opacity: isHovered ? 1 : 0.5,
        transition: 'opacity 0.3s ease',
        textAlign: 'center'
      }}>{name}</span>
    </div>
  );
};

// --- Tarjeta de Categoría (Frontend, Backend, etc) ---
const CategoryCard = ({ categoryKey, badgeKey, skills, onSkillClick, isMobile }) => {
  const { t } = useTranslation();
  const title = t(`info.categories.${categoryKey}`);
  const badge = t(`info.badges.${badgeKey}`);

  const cardStyle = {
    padding: isMobile ? '2rem 1.25rem' : '3.5rem 3rem',
    borderRadius: '36px',
    border: '1px solid var(--border-color)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--card-bg)'
  };

  return (
    <HoverBox style={cardStyle} className="gsap-skill-card">
      {/* Cabecera de la tarjeta */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: isMobile ? '1.5rem' : '3rem', 
        paddingBottom: isMobile ? '1rem' : '1.5rem', 
        borderBottom: '1px solid var(--border-color)' 
      }}>
        <h4 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: '900', color: 'var(--text-color)', margin: 0, letterSpacing: '-1px' }}>
          {title}
        </h4>
        {badge && <span style={categoryBadgeStyle}>{badge}</span>}
      </div>

      {/* Grilla de iconos con más espacio */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(90px, 1fr))', 
        gap: isMobile ? '1rem' : '1.5rem',
        justifyItems: 'center',
        width: '100%'
      }}>
        {skills.map((item, idx) => (
          <div key={idx} className="gsap-skill-pill" style={{ width: '100%' }}>
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
    </HoverBox>
  );
};

// --- Modal Helper Buttons ---
const CloseButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...modalCloseButtonStyle,
        opacity: isHovered ? 1 : 0.6,
        backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'transparent',
      }}
      aria-label="Close"
    >
      &times;
    </button>
  );
};

const BottomCloseButton = ({ onClick, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...modalBottomButtonStyle,
        backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
        borderColor: isHovered ? 'var(--border-hover)' : 'var(--border-color)',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      {text}
    </button>
  );
};

// --- EduTag ---
const EduTag = ({ icon: Icon, title, subtitle, color, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const responsiveEduItemStyle = {
    padding: isMobile ? '16px 20px' : '24px 40px',
    borderRadius: '28px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    transition: 'all 0.3s ease',
    cursor: 'default',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...responsiveEduItemStyle,
        backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
        border: `1px solid ${isHovered ? color : 'var(--border-color)'}`,
        boxShadow: isHovered ? `0 10px 30px ${color}22` : 'none',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)'
      }}
    >
      <Icon style={{ color: color, fontSize: '1.5rem', filter: isHovered ? `drop-shadow(0 0 5px ${color})` : 'none' }} />
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
  const containerRef = useRef(null);

  // Track resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSkill(null);
      }
    };
    if (selectedSkill) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSkill]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Summary Box
      gsap.fromTo('.gsap-summary-box',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.gsap-summary-box',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Experience title
      gsap.fromTo('.gsap-exp-title',
        { opacity: 0, y: 30, filter: 'blur(5px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 0.8,
          scrollTrigger: {
            trigger: '.gsap-exp-title',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Experience cards
      gsap.fromTo('.gsap-exp-card',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.gsap-exp-card',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Tech stack title
      gsap.fromTo('.gsap-tech-title',
        { opacity: 0, y: 30, filter: 'blur(5px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 0.8,
          scrollTrigger: {
            trigger: '.gsap-tech-title',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Skill Category Cards and inner skill icons staggered entry
      const categories = gsap.utils.toArray('.gsap-skill-card');
      categories.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        const pills = card.querySelectorAll('.gsap-skill-pill');
        gsap.fromTo(pills,
          { opacity: 0, scale: 0.7, y: 15 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.4,
            stagger: 0.05,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Education tags
      gsap.fromTo('.gsap-edu-tag',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.gsap-edu-tags',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      key: "onlydust",
      icon: SiOpenlayers,
      color: "var(--accent)"
    },
    {
      key: "freelance",
      icon: FaCode,
      color: "var(--accent)"
    }
  ];

  // Estructura de Skills Agrupada con traducción i18n
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
        { key: "python", icon: SiPython, color: "#3776AB" },
        { key: "docker", icon: SiDocker, color: "#2496ED" }
      ]
    }
  ];

  const modalTransitions = useTransition(selectedSkill, {
    from: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.9 },
    config: { tension: 300, friction: 20 }
  });

  // Estilos React Dinámicos y Responsivos
  const responsiveSectionStyle = {
    padding: isMobile ? '5rem 1.25rem' : '10rem 2rem',
    backgroundColor: 'var(--bg-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '3.5rem' : '7rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.4s ease',
    width: '100%'
  };

  const responsiveSummaryBoxStyle = {
    backdropFilter: 'blur(25px)',
    borderRadius: isMobile ? '28px' : '40px',
    border: '1px solid var(--border-color)',
    padding: isMobile ? '3rem 1.5rem' : '5rem 4rem',
    textAlign: 'center',
    width: '100%'
  };

  const responsiveTitleStyle = {
    fontSize: isMobile ? '2.2rem' : '4rem',
    color: 'var(--text-color)',
    marginBottom: '1.5rem',
    fontWeight: '900',
    letterSpacing: '-1.5px',
    lineHeight: '1.1'
  };

  const responsiveDescriptionStyle = {
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    fontSize: isMobile ? '1.05rem' : '1.25rem',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const responsiveExpCardStyle = {
    padding: isMobile ? '2rem 1.5rem' : '3.5rem 3rem',
    borderRadius: '32px',
    border: '1px solid var(--border-color)',
    width: '100%'
  };

  const responsiveCategoryGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
    gap: isMobile ? '2rem' : '3.5rem',
    width: '100%'
  };

  const responsiveModalContentStyle = {
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '28px',
    padding: isMobile ? '2.5rem 1.25rem' : '3rem',
    maxWidth: '500px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    transition: 'background-color 0.4s ease, border-color 0.4s ease'
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
    width: '100%',
    filter: 'drop-shadow(0 0 10px rgba(91, 66, 243, 0.45))'
  };

  return (
    <section id="info" ref={containerRef} style={responsiveSectionStyle}>

      {/* SUMMARY BOX */}
      <div className="gsap-summary-box" style={summaryWrapperStyle}>
        <HoverBox style={responsiveSummaryBoxStyle}>
          <div style={statusBadgeStyle}>
            <div style={pulseDotStyle}></div>
            <span style={statusTextStyle}>{t('info.status')}</span>
          </div>
          <h3 style={responsiveTitleStyle}>
            {t('info.title_p1')} <br /> <span style={{ color: 'var(--accent)' }}>{t('info.title_p2')}</span>
          </h3>
          <p style={responsiveDescriptionStyle}>{t('info.description')}</p>
        </HoverBox>
      </div>

      {/* EXPERIENCE */}
      <div style={{ width: '100%', maxWidth: '1000px', zIndex: 1 }}>
        <h4 className="gsap-exp-title" style={neonTitleStyle}>{t('info.exp_title')}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experiences.map((exp, idx) => {
            const ExpIcon = exp.icon;
            return (
              <div key={idx} className="gsap-exp-card" style={{ width: '100%' }}>
                <HoverBox style={responsiveExpCardStyle}>
                  <div style={expHeaderStyle}>
                    <ExpIcon style={{ color: exp.color, fontSize: '2.5rem' }} />
                    <div>
                      <h5 style={{ margin: 0, fontSize: isMobile ? '1.2rem' : '1.4rem', color: 'var(--text-color)' }}>{t(`info.experiences.${exp.key}.role`)}</h5>
                      <p style={{ margin: 0, color: 'var(--accent)', fontWeight: 'bold' }}>{t(`info.experiences.${exp.key}.company`)}</p>
                    </div>
                    <span style={dateBadgeStyle}>{t(`info.experiences.${exp.key}.date`)}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>{t(`info.experiences.${exp.key}.desc`)}</p>
                </HoverBox>
              </div>
            );
          })}
        </div>
      </div>

      {/* SKILLS CATEGORY GRID */}
      <div style={{ width: '100%', maxWidth: '1200px', zIndex: 1, marginTop: '2rem' }}>
        <h4 className="gsap-tech-title" style={neonTitleStyle}>{t('info.tech_stack')}</h4>
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
      <div className="gsap-edu-tags" style={educationWrapperStyle}>
        <div className="gsap-edu-tag" style={{ flexGrow: 1, minWidth: isMobile ? '100%' : '280px', maxWidth: '500px' }}>
          <EduTag icon={FaUniversity} title="UTN FRBA" subtitle={t('info.edu_utn')} color="#3b82f6" isMobile={isMobile} />
        </div>
        <div className="gsap-edu-tag" style={{ flexGrow: 1, minWidth: isMobile ? '100%' : '280px', maxWidth: '500px' }}>
          <EduTag icon={FaCode} title="freeCodeCamp" subtitle={t('info.edu_fcc')} color="#ff00ff" isMobile={isMobile} />
        </div>
      </div>

      {/* SKILL DETAIL MODAL */}
      {typeof document !== 'undefined' && createPortal(
        modalTransitions(
          (style, item) => {
            if (!item) return null;
            const SkillIcon = item.icon;
            return (
              <animated.div
                style={{
                  ...modalOverlayStyle,
                  opacity: style.opacity
                }}
                onClick={() => setSelectedSkill(null)}
              >
                <animated.div
                  style={{
                    ...responsiveModalContentStyle,
                    transform: style.scale.to((s) => `scale(${s})`),
                    boxShadow: `0 25px 60px ${item.color}22`,
                    borderColor: item.color || 'var(--border-color)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <CloseButton onClick={() => setSelectedSkill(null)} />
                  <SkillIcon style={{
                    fontSize: '4.5rem',
                    color: item.color || 'var(--accent)',
                    filter: `drop-shadow(0 0 16px ${item.color || 'var(--accent)'}66)`,
                    marginBottom: '1.5rem'
                  }} />
                  <h4 style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: 'var(--text-color)',
                    marginBottom: '1rem',
                    letterSpacing: '-0.5px'
                  }}>
                    {t(`info.skills.${item.key}.name`)}
                  </h4>
                  <p style={{
                    color: 'var(--text-muted)',
                    lineHeight: '1.7',
                    fontSize: '1.1rem',
                    maxWidth: '400px'
                  }}>
                    {t(`info.skills.${item.key}.desc`)}
                  </p>
                  <BottomCloseButton
                    onClick={() => setSelectedSkill(null)}
                    text={t('info.close')}
                  />
                </animated.div>
              </animated.div>
            );
          }
        ),
        document.body
      )}
    </section>
  );
};

// --- Estilos Estáticos ---
const summaryWrapperStyle = { maxWidth: '1000px', width: '100%', zIndex: 1 };
const statusBadgeStyle = { display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '10px 20px', borderRadius: '100px', marginBottom: '2.5rem' };
const pulseDotStyle = { width: '10px', height: '10px', backgroundColor: 'var(--accent)', borderRadius: '50%' };
const statusTextStyle = { color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1.5px' };
const expHeaderStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '2rem', flexWrap: 'wrap' };
const dateBadgeStyle = { marginLeft: 'auto', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '8px 18px', borderRadius: '12px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '600' };

const categoryBadgeStyle = {
  fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px',
  color: 'var(--accent)', backgroundColor: 'rgba(59, 130, 246, 0.1)',
  padding: '6px 14px', borderRadius: '100px'
};

const educationWrapperStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1100px', zIndex: 1, marginTop: '2rem', width: '100%', boxSizing: 'border-box' };

// --- Estilos para el Modal ---
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  backdropFilter: 'blur(12px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalCloseButtonStyle = {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  background: 'none',
  border: 'none',
  color: 'var(--text-color)',
  fontSize: '1.5rem',
  cursor: 'pointer',
  opacity: 0.6,
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
};

const modalBottomButtonStyle = {
  marginTop: '2rem',
  padding: '0.8rem 2rem',
  borderRadius: '100px',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--card-bg)',
  color: 'var(--text-color)',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

export default Info;