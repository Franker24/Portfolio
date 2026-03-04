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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Escuchar redimensionamiento
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const revealAnim = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(80px)',
    config: { mass: 1, tension: 120, friction: 30 }
  });

  // Lista de proyectos - Las descripciones y nombres vienen del i18n.js
  const myProjects = [
    { id: "ms", tags: ["React", "Accounting", "Clean UI"], github: "https://github.com/Franker24/Estudio-ms", demo: "https://estudio-ms.vercel.app/", image: "/ms.png" },
    { id: "jokers", tags: ["React", "Neon UI", "Framer Motion"], github: "https://github.com/Franker24/JOKERS-OF-NEON-React", demo: "#", image: null },
    { id: "xclone", tags: ["Tailwind", "React", "Frontend"], github: "https://github.com/Franker24/X-Clon", demo: "#", image: null },
    { id: "space", tags: ["HTML", "CSS Pro"], github: "https://github.com/Franker24/SpaceWeb", demo: "#" },
    { id: "currency", tags: ["API", "JavaScript"], github: "https://github.com/Franker24/Cotizacion-de-monedas-", demo: "#" },
    { id: "coffee", tags: ["E-commerce", "React"], github: "https://github.com/Franker24/Coffee_", demo: "#" },
    { id: "menu", tags: ["UX", "Mobile First"], github: "https://github.com/Franker24/Menu", demo: "#" },
    { id: "form", tags: ["Forms", "React"], github: "https://github.com/Franker24/Form", demo: "#" }
  ];

  // Configuración de la animación física del carrusel
  const [{ x }, api] = useSpring(() => ({
    x: -currentIndex * 100,
    config: { mass: 1, tension: 180, friction: 35 }
  }));

  useEffect(() => {
    api.start({ x: -currentIndex * 100 });
  }, [currentIndex, api]);

  // Lógica de arrastre (Gestos)
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel, distance, last }) => {
    if (active && distance > 10) isDragging.current = true;

    if (active && Math.abs(mx) > 60) {
      const nextIndex = xDir > 0 ? currentIndex - 1 : currentIndex + 1;
      if (nextIndex >= 0 && nextIndex < myProjects.length) {
        setCurrentIndex(nextIndex);
        cancel();
      }
    }

    if (last) {
      setTimeout(() => { isDragging.current = false; }, 50);
      api.start({ x: -currentIndex * 100 });
    } else {
      api.start({ x: -currentIndex * 100 + (mx / window.innerWidth) * 100, immediate: true });
    }
  }, { 
    axis: 'x', 
    filterTaps: true, 
    rubberband: true 
  });

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      style={{ 
        padding: isMobile ? '5rem 0' : '10rem 0', 
        backgroundColor: '#000', 
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <animated.div style={revealAnim}>
        
        {/* Título dinámico */}
        <div style={{ marginBottom: isMobile ? '3rem' : '5rem', textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: isMobile ? '2.5rem' : '5rem', 
            fontWeight: '900', 
            color: '#fff', 
            margin: 0,
            letterSpacing: '-2px' 
          }}>
            {t('projects.section_title')} <span style={{ color: '#5B42F3' }}>{t('projects.section_subtitle')}</span>
          </h3>
          <p style={{ color: '#475569', fontSize: '1rem', marginTop: '10px' }}>
             {t('projects.drag_hint', '← Swipe to explore →')}
          </p>
        </div>

        {/* Contenedor del Carrusel */}
        <div 
          {...bind()} 
          style={{ 
            width: '100%', 
            cursor: isDragging.current ? 'grabbing' : 'grab',
            touchAction: 'pan-y'
          }}
        >
          <animated.div style={{ 
            display: 'flex', 
            transform: x.to(val => `translate3d(${val}%, 0, 0)`),
            touchAction: 'pan-y'
          }}>
            {myProjects.map((project, index) => {
              const isCenter = currentIndex === index;
              return (
                <div 
                  key={project.id} 
                  onClick={() => !isDragging.current && setCurrentIndex(index)}
                  style={{
                    minWidth: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    transform: isCenter ? 'scale(1)' : 'scale(0.8)',
                    opacity: isCenter ? 1 : 0.4,
                    padding: isMobile ? '0 15px' : '0 50px', 
                    userSelect: 'none'
                  }}
                >
                  {/* Borde con gradiente dinámico */}
                  <div style={{
                    width: '100%', 
                    maxWidth: '900px', 
                    height: isMobile ? '520px' : '650px', 
                    borderRadius: '40px', 
                    padding: '2px',
                    position: 'relative',
                    backgroundImage: isCenter 
                      ? 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)' 
                      : 'linear-gradient(144deg, #333, #111)',
                    boxShadow: isCenter ? '0 30px 60px -12px rgba(91, 66, 243, 0.3)' : 'none',
                    transition: 'all 0.5s ease'
                  }}>
                    <div style={{ 
                      backgroundColor: '#050505', 
                      borderRadius: '38px', 
                      width: '100%', 
                      height: '100%', 
                      overflow: 'hidden', 
                      display: 'flex', 
                      flexDirection: 'column' 
                    }}>
                      
                      {/* Imagen */}
                      <div style={{ width: '100%', height: isMobile ? '220px' : '380px', overflow: 'hidden', position: 'relative' }}>
                        <img 
                          src={project.image || `https://via.placeholder.com/900x450/050505/333333?text=${t(`projects.items.${project.id}.name`)}`} 
                          alt={project.id} 
                          style={{ 
                            width: '100%', height: '100%', objectFit: 'cover', 
                            filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)',
                            transition: 'filter 0.5s' 
                          }} 
                          draggable="false" 
                        />
                        <div style={{ 
                          position: 'absolute', bottom: 0, left: 0, right: 0, 
                          height: '60%', 
                          background: 'linear-gradient(to top, #050505 20%, transparent)' 
                        }}></div>
                      </div>

                      {/* Info del Proyecto */}
                      <div style={{ 
                        padding: isMobile ? '1.5rem' : '2.5rem', 
                        marginTop: isMobile ? '-20px' : '-40px', 
                        zIndex: 2, flexGrow: 1, 
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          <h4 style={{ 
                            fontSize: isMobile ? '1.8rem' : '3rem', 
                            fontWeight: '900', 
                            color: '#fff',
                            marginBottom: '0.5rem'
                          }}>
                            {t(`projects.items.${project.id}.name`)}
                          </h4>
                          <p style={{ 
                            color: '#94a3b8', 
                            fontSize: isMobile ? '0.9rem' : '1.1rem', 
                            lineHeight: '1.6',
                            maxWidth: '700px'
                          }}>
                            {t(`projects.items.${project.id}.desc`)}
                          </p>
                        </div>

                        <div style={{ 
                          display: 'flex', 
                          flexDirection: isMobile ? 'column' : 'row', 
                          justifyContent: 'space-between', 
                          alignItems: isMobile ? 'flex-start' : 'center', 
                          gap: '1.5rem' 
                        }}>
                          {/* Tags */}
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {project.tags?.map(tag => (
                              <span key={tag} style={{ 
                                backgroundColor: 'rgba(91, 66, 243, 0.1)',
                                color: '#00DDEB', 
                                border: '1px solid rgba(0,221,235,0.2)', 
                                padding: '5px 12px', 
                                borderRadius: '100px', 
                                fontSize: '0.7rem', 
                                fontWeight: '700' 
                              }}>{tag}</span>
                            ))}
                          </div>
                          
                          {/* Links traducidos */}
                          <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href={project.github} target="_blank" rel="noreferrer" 
                               onClick={(e) => e.stopPropagation()}
                               style={{ color: '#fff', textDecoration: 'none', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               <FaGithub size={18} /> {t('projects.github')}
                            </a>
                            <a href={project.demo} target="_blank" rel="noreferrer" 
                               onClick={(e) => e.stopPropagation()}
                               style={{ color: '#5B42F3', textDecoration: 'none', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                               <FaExternalLinkAlt size={16} /> {t('projects.live')}
                            </a>
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

        {/* Indicadores (Dots) */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '4rem', justifyContent: 'center' }}>
          {myProjects.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '40px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentIndex === index ? '#5B42F3' : '#334155',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          ))}
        </div>

      </animated.div>
    </section>
  );
};

export default Projects;