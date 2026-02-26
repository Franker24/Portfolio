import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaUniversity, FaCode, FaRocket } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiExpress, SiOpenlayers } from 'react-icons/si';

// --- SkillCard (Mantenido) ---
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
        backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255, 255, 255, 0.02)',
        border: `1px solid ${isHovered ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
        padding: '2rem', borderRadius: '24px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-10px)' : style.transform,
        backdropFilter: 'blur(12px)',
      }}
    >
      <Icon style={{ fontSize: '3rem', color: isHovered ? '#3b82f6' : '#fff', opacity: isHovered ? 1 : 0.4, transition: 'all 0.3s ease' }} />
      <span style={{ fontSize: '1rem', fontWeight: '500', color: '#fff', opacity: isHovered ? 1 : 0.6 }}>{skill}</span>
    </animated.a>
  );
};

// --- EduTag (Mantenido) ---
const EduTag = ({ icon: Icon, title, subtitle, color }) => {
  const [props, api] = useSpring(() => ({ scale: 1, backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }));
  return (
    <animated.div 
      onMouseEnter={() => api.start({ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: color })}
      onMouseLeave={() => api.start({ scale: 1, backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' })}
      style={{ ...eduItemStyle, ...props, border: '1px solid', borderColor: props.borderColor }}
    >
      <Icon style={{ color: color, fontSize: '1.5rem' }} /> 
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: '600', color: '#fff' }}>{title}</span> 
        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{subtitle}</span>
      </div>
    </animated.div>
  );
};

const Info = () => {
  const { t } = useTranslation();
  const [hoverBox, setHoverBox] = useState(false);
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
    config: { tension: 200, friction: 20 }
  });

  return (
    <section id="info" ref={ref} style={sectionContainerStyle}>
      <FaReact style={bgIconStyle} />

      {/* SUMMARY */}
      <animated.div style={{ ...summaryWrapperStyle, ...animFadeUp(0) }}>
        <div 
          onMouseEnter={() => setHoverBox(true)} onMouseLeave={() => setHoverBox(false)}
          style={{ ...summaryBoxStyle, boxShadow: hoverBox ? '0 0 100px rgba(59, 130, 246, 0.15)' : 'none' }}
        >
          <div style={statusBadgeStyle}>
            <div style={pulseDotStyle}></div>
            <span style={statusTextStyle}>OPEN TO WORK</span>
          </div>
          <h3 style={titleStyle}>
            Professional <br/> <span style={{ color: '#3b82f6' }}>Profile</span>
          </h3>
          <p style={descriptionStyle}>
            Frontend Developer evolving into a **Fullstack** role with a focus on SQL and NoSQL databases. 
            I am currently contributing to **Open Source** projects through OnlyDust to build robust, 
            real-world experience. Passionate about scalable architectures and continuous learning.
          </p>
        </div>
      </animated.div>

      {/* EXPERIENCE SECTION */}
      <animated.div style={{ ...experienceContainerStyle, ...animFadeUp(400) }}>
        <h4 style={subTitleStyle}>Work Experience</h4>
        <div style={expCardStyle}>
           <div style={expHeaderStyle}>
              <SiOpenlayers style={{ color: '#3b82f6', fontSize: '2rem' }} />
              <div>
                <h5 style={{ margin: 0, fontSize: '1.4rem', color: '#fff' }}>Web Developer</h5>
                <p style={{ margin: 0, color: '#3b82f6', fontWeight: 'bold' }}>OnlyDust · Freelance</p>
              </div>
              <span style={dateBadgeStyle}>Sept. 2024 - Present</span>
           </div>
           <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.1rem' }}>
              Contributing to high-impact open-source repositories. Focused on implementing new features, 
              code optimization, and resolving complex issues to enhance system efficiency and stability.
           </p>
        </div>
      </animated.div>

      {/* SKILLS */}
      <div style={{ width: '100%', maxWidth: '1100px', zIndex: 1 }}>
        <div style={skillsGridStyle}>
          {trail.map((style, index) => (
            <SkillCard key={coreSkills[index].name} {...coreSkills[index]} style={style} />
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <animated.div style={{ ...educationWrapperStyle, ...animFadeUp(800) }}>
        <EduTag icon={FaUniversity} title="UTN FRBA" subtitle="FullStack Development 2024" color="#3b82f6" />
        <EduTag icon={FaCode} title="freeCodeCamp" subtitle="Web Development Certification" color="#ff00ff" />
      </animated.div>
    </section>
  );
};

// --- Estilos Adicionales ---
const sectionContainerStyle = { padding: '12rem 2rem', backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6rem', position: 'relative', overflow: 'hidden' };
const bgIconStyle = { position: 'absolute', top: '5%', left: '-10%', fontSize: '35rem', color: '#3b82f6', opacity: 0.03, filter: 'blur(5px)', pointerEvents: 'none' };
const summaryWrapperStyle = { maxWidth: '1100px', width: '100%', zIndex: 1 };
const summaryBoxStyle = { background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(25px)', borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4rem 3rem', textAlign: 'center', transition: 'all 0.6s ease' };
const statusBadgeStyle = { display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '2rem' };
const pulseDotStyle = { width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' };
const statusTextStyle = { color: '#60a5fa', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1.5px' };
const titleStyle = { fontSize: '3.5rem', color: '#fff', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-2px' };
const descriptionStyle = { color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' };
const experienceContainerStyle = { width: '100%', maxWidth: '1100px', zIndex: 1 };
const subTitleStyle = { color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' };
const expCardStyle = { background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' };
const expHeaderStyle = { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '1.5rem', flexWrap: 'wrap' };
const dateBadgeStyle = { marginLeft: 'auto', backgroundColor: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '12px', color: '#94a3b8', fontSize: '0.9rem' };
const skillsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' };
const educationWrapperStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', maxWidth: '1100px', zIndex: 1 };
const eduItemStyle = { padding: '20px 30px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '15px' };

export default Info;