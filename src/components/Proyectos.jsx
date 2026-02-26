import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const revealAnim = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(80px)',
    config: { mass: 1, tension: 120, friction: 30 }
  });

  const myProjects = [
    { 
      id: "ms", 
      name: "Estudio MS", 
      desc: "Comprehensive digital solution for an accounting firm. Developed with a focus on institutional trust and service management.", 
      tags: ["React", "Accounting Services", "Clean UI"], 
      github: "https://github.com/Franker24/Estudio-ms", 
      demo: "https://estudio-ms.vercel.app/", 
      image: "/ms.png" 
    },
    { id: "jokers", name: "Jokers of Neon", desc: "Dynamic dashboard interface inspired by neon-cyberpunk aesthetics, utilizing advanced motion libraries.", tags: ["React", "Neon UI", "Framer Motion"], github: "https://github.com/Franker24/JOKERS-OF-NEON-React", demo: "#" },
    { id: "xclone", name: "X-Clone", desc: "Functional social media clone focused on scalable component architecture and modern UI patterns.", tags: ["Tailwind", "React", "Frontend"], github: "https://github.com/Franker24/X-Clon", demo: "#" },
    { id: "space", name: "SpaceWeb", desc: "Immersive visual experience about space exploration with a focus on smooth CSS animations.", tags: ["HTML", "CSS Pro", "Animations"], github: "https://github.com/Franker24/SpaceWeb", demo: "#" },
    { id: "currency", name: "Currency Tracker", desc: "Financial application for real-time currency tracking and data visualization.", tags: ["API", "Finance", "JavaScript"], github: "https://github.com/Franker24/Cotizacion-de-monedas-", demo: "#" },
    { id: "coffee", name: "Coffee Shop", desc: "Specialty coffee e-commerce platform featuring intuitive shopping experience.", tags: ["E-commerce", "React", "State"], github: "https://github.com/Franker24/Coffee_", demo: "#" },
    { id: "menu", name: "Interactive Menu", desc: "Digital menu solution for the gastronomy industry with mobile-first approach.", tags: ["UX", "Mobile First", "React"], github: "https://github.com/Franker24/Menu", demo: "#" },
    { id: "form", name: "Smart Form", desc: "Intelligent form system with advanced data validation and user feedback.", tags: ["Forms", "React", "Validation"], github: "https://github.com/Franker24/Form", demo: "#" }
  ];

  const [{ x }, api] = useSpring(() => ({
    x: -currentIndex * 100,
    config: { mass: 1, tension: 180, friction: 30 }
  }));

  useEffect(() => {
    api.start({ x: -currentIndex * 100 });
  }, [currentIndex, api]);

  const handleCardClick = (index) => {
    if (isDragging.current) return;
    setCurrentIndex(index);
  };

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel, distance }) => {
    if (active && distance > 10) isDragging.current = true;

    if (active && Math.abs(mx) > 70) {
      const nextIndex = xDir > 0 ? currentIndex - 1 : currentIndex + 1;
      if (nextIndex >= 0 && nextIndex < myProjects.length) {
        setCurrentIndex(nextIndex);
        cancel();
      }
    }

    if (!active) {
      setTimeout(() => { isDragging.current = false; }, 50);
      api.start({ x: -currentIndex * 100 });
    } else {
      api.start({ x: -currentIndex * 100 + (mx / window.innerWidth) * 100, immediate: true });
    }
  }, { filterTaps: true, rubberband: true });

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      style={{ padding: '8rem 0', backgroundColor: '#000', overflow: 'hidden' }}
    >
      <animated.div style={revealAnim}>
        
        <h3 style={{ fontSize: '4.5rem', fontWeight: '900', color: '#fff', textAlign: 'center', marginBottom: '5rem', letterSpacing: '-4px' }}>
          {t('projects.section_title', 'Selected')} <span style={{ color: '#5B42F3' }}>{t('projects.section_subtitle', 'Works')}</span>
        </h3>

        <div {...bind()} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', cursor: isDragging.current ? 'grabbing' : 'grab', touchAction: 'none' }}>
          <animated.div style={{ display: 'flex', transform: x.to(val => `translate3d(${val}%, 0, 0)`), touchAction: 'none' }}>
            {myProjects.map((project, index) => {
              const isCenter = currentIndex === index;
              return (
                <div 
                  key={index} 
                  onClick={() => handleCardClick(index)}
                  style={{
                    minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isCenter ? 'scale(1)' : 'scale(0.8)',
                    padding: '0 20px', userSelect: 'none',
                    cursor: isCenter ? 'default' : 'pointer'
                  }}
                >
                  <div style={{
                    width: '100%', maxWidth: '900px', minHeight: '620px', borderRadius: '40px', padding: '2px',
                    backgroundImage: isCenter 
                      ? 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)' 
                      : 'linear-gradient(144deg, #222, #000)',
                    transition: 'background 0.5s'
                  }}>
                    <div style={{ backgroundColor: '#050505', borderRadius: '38px', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ width: '100%', height: '380px', overflow: 'hidden', position: 'relative' }}>
                        <img 
                          src={project.image || `https://via.placeholder.com/900x450/050505/333333?text=${project.name}`} 
                          alt={project.id} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isCenter ? 1 : 0.3, transition: 'opacity 0.5s' }} 
                          draggable="false" 
                        />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, #050505 20%, transparent)' }}></div>
                      </div>

                      <div style={{ padding: '3rem', marginTop: '-60px', zIndex: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ fontSize: '2.8rem', fontWeight: '900', color: isCenter ? '#fff' : '#444', transition: 'color 0.5s' }}>
                          {t(`projects.items.${project.id}.name`, project.name)}
                        </h4>
                        
                        <div style={{ opacity: isCenter ? 1 : 0, transition: 'opacity 0.4s', flexGrow: 1, pointerEvents: isCenter ? 'auto' : 'none' }}>
                          <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '2rem', fontWeight: '300' }}>
                            {t(`projects.items.${project.id}.desc`, project.desc)}
                          </p>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                              {project.tags?.map(tag => (
                                <span key={tag} style={{ color: '#00DDEB', border: '1px solid rgba(0,221,235,0.2)', padding: '5px 15px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600' }}>{tag}</span>
                              ))}
                            </div>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                              <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: '#fff', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                 <FaGithub /> {t('projects.github', 'GITHUB')}
                              </a>
                              <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: '#5B42F3', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                 <FaExternalLinkAlt /> {t('projects.live', 'LIVE')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </animated.div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '4rem', justifyContent: 'center' }}>
          {myProjects.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '45px' : '12px',
                height: '12px',
                borderRadius: '6px',
                backgroundColor: currentIndex === index ? '#AF40FF' : '#222',
                cursor: 'pointer',
                transition: 'all 0.6s'
              }}
            />
          ))}
        </div>

      </animated.div>
    </section>
  );
};

export default Projects;