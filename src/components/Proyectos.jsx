import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const themePalette = {
  dark: {
    sectionBg: '#000000',
    panelBg: '#050505',
    previewShell: 'rgba(255, 255, 255, 0.03)',
    title: '#ffffff',
    body: '#94a3b8',
    hint: '#475569',
    mutedDot: '#334155',
    inactiveBorder: 'linear-gradient(144deg, #333, #111)',
    shadow: '0 30px 60px -12px rgba(91, 66, 243, 0.3)',
    liveBadgeBg: 'rgba(5, 5, 5, 0.78)',
    liveBadgeBorder: '1px solid rgba(0,221,235,0.25)',
    linkColor: '#ffffff',
    accentLink: '#5B42F3',
    tagBg: 'rgba(91, 66, 243, 0.1)',
    tagBorder: '1px solid rgba(0,221,235,0.2)',
    infoBg: 'rgba(5, 5, 5, 0.88)',
    fallbackBg: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(2, 6, 23, 1))',
    fallbackText: '#e2e8f0'
  },
  light: {
    sectionBg: '#f1f5f9',
    panelBg: '#ffffff',
    previewShell: 'rgba(15, 23, 42, 0.04)',
    title: '#0f172a',
    body: '#475569',
    hint: '#64748b',
    mutedDot: '#cbd5e1',
    inactiveBorder: 'linear-gradient(144deg, #cbd5e1, #e2e8f0)',
    shadow: '0 30px 60px -18px rgba(37, 99, 235, 0.2)',
    liveBadgeBg: 'rgba(255, 255, 255, 0.82)',
    liveBadgeBorder: '1px solid rgba(37,99,235,0.15)',
    linkColor: '#0f172a',
    accentLink: '#2563eb',
    tagBg: 'rgba(37, 99, 235, 0.08)',
    tagBorder: '1px solid rgba(37,99,235,0.18)',
    infoBg: 'rgba(255, 255, 255, 0.92)',
    fallbackBg: 'linear-gradient(135deg, rgba(226, 232, 240, 0.95), rgba(248, 250, 252, 1))',
    fallbackText: '#0f172a'
  }
};

const TimelineCard = ({ project, index, isMobile, colors, t }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;

  const animProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 120, friction: 20 },
    delay: 100
  });

  const hoverAnim = useSpring({
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
    boxShadow: isHovered ? `0 25px 50px -12px rgba(91, 66, 243, 0.25)` : `0 10px 30px -10px rgba(0,0,0,0.1)`,
    config: { tension: 300, friction: 20 }
  });

  return (
    <div ref={ref} style={{
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      paddingLeft: isMobile ? '50px' : '0px',
      marginBottom: isMobile ? '4rem' : '0px',
      position: 'relative',
      height: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Mobile Timeline Node Dot centered on vertical straight track */}
      {isMobile && (
        <animated.div style={{
          position: 'absolute',
          left: '25px',
          top: '50px',
          transform: 'translateX(-50%)',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: isHovered ? '#00DDEB' : '#5B42F3',
          border: `3px solid ${colors.sectionBg}`,
          boxShadow: isHovered ? '0 0 20px rgba(0, 221, 235, 0.6)' : '0 0 15px rgba(91, 66, 243, 0.5)',
          zIndex: 2,
          transition: 'all 0.3s ease'
        }} />
      )}

      {/* Desktop Timeline horizontal connector line and dot */}
      {!isMobile && (
        <>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            [isLeft ? 'right' : 'left']: '-60px',
            top: '120px',
            width: '60px',
            height: '2px',
            background: isHovered 
              ? (isLeft ? 'linear-gradient(90deg, #5B42F3, #00DDEB)' : 'linear-gradient(90deg, #00DDEB, #5B42F3)')
              : 'rgba(255, 255, 255, 0.1)',
            zIndex: 1,
            transition: 'all 0.3s ease',
            boxShadow: isHovered ? '0 0 10px rgba(0, 221, 235, 0.5)' : 'none'
          }} />
          {/* Connector Dot */}
          <animated.div style={{
            position: 'absolute',
            left: isLeft ? 'auto' : '-60px',
            right: isLeft ? '-60px' : 'auto',
            top: '120px',
            transform: isLeft ? 'translate(50%, -50%)' : 'translate(-50%, -50%)',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: isHovered ? '#00DDEB' : '#5B42F3',
            border: `3px solid ${colors.sectionBg}`,
            boxShadow: isHovered ? '0 0 15px rgba(0, 221, 235, 0.8)' : '0 0 8px rgba(91, 66, 243, 0.4)',
            zIndex: 2,
            transition: 'all 0.3s ease'
          }} />
        </>
      )}

      <animated.div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...animProps,
          ...hoverAnim,
          width: '100%',
          padding: '1px',
          borderRadius: '32px',
          background: isHovered ? 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)' : colors.inactiveBorder,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{
          backgroundColor: colors.panelBg,
          borderRadius: '31px',
          padding: '20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          backdropFilter: 'blur(10px)',
          alignItems: 'stretch',
          flexGrow: 1
        }}>
          <div style={{ 
            width: '100%', 
            height: isMobile ? '180px' : '240px', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            backgroundColor: colors.previewShell, 
            position: 'relative',
            flexShrink: 0
          }}>
            {project.embed ? (
              <iframe
                src={project.embed}
                title={project.id}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  pointerEvents: 'none',
                  filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                  transition: 'all 0.5s ease',
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                }}
              />
            ) : (
              <>
                <img 
                  src={project.image} 
                  alt={project.id} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 1, transition: 'transform 0.5s ease', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }} 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.hint, fontSize: '0.9rem', letterSpacing: '1px', position: 'absolute', inset: 0 }}>
                  [ IMG: {project.image} ]
                </div>
              </>
            )}

            {project.embed && (
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: colors.liveBadgeBg,
                color: '#00DDEB',
                border: colors.liveBadgeBorder,
                borderRadius: '999px',
                padding: '4px 10px',
                fontSize: '0.65rem',
                fontWeight: '800',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                zIndex: 2,
                backdropFilter: 'blur(8px)',
                opacity: isHovered ? 1 : 0.6,
                transition: 'opacity 0.3s ease'
              }}>
                Live
              </div>
            )}
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: isMobile ? '1.2rem' : '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: '900', color: colors.title, marginBottom: '0.8rem', letterSpacing: '-0.5px' }}>{t(`projects.items.${project.id}.name`)}</h4>
              <p style={{ color: colors.body, fontSize: isMobile ? '0.85rem' : '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{t(`projects.items.${project.id}.desc`)}</p>
            </div>
            
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ backgroundColor: colors.tagBg, color: '#00DDEB', border: colors.tagBorder, padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: colors.linkColor, fontSize: '0.85rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <FaGithub size={18} /> {t('projects.github')}
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: colors.accentLink, fontSize: '0.85rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <FaExternalLinkAlt size={16} /> {t('projects.live')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

const Projects = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isDragging = useRef(false);
  const colors = themePalette[theme] || themePalette.dark;

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

  const myProjects = [
    {
      id: 'securify',
      tags: ['TypeScript', 'Security', 'Auth UI'],
      github: 'https://github.com/Franker24/Securify',
      demo: 'https://securify-two.vercel.app',
      embed: 'https://securify-two.vercel.app'
    },
    {
      id: 'watchweb',
      tags: ['JavaScript', 'Media', 'Streaming UI'],
      github: 'https://github.com/Franker24/WatchWeb',
      demo: 'https://watch-web-gules.vercel.app',
      embed: 'https://watch-web-gules.vercel.app'
    },
    {
      id: 'coffeeweb',
      tags: ['React', 'Coffee Brand', 'E-commerce UI'],
      github: 'https://github.com/Franker24/CoffeeWeb',
      demo: 'https://coffee-web-peach.vercel.app',
      embed: 'https://coffee-web-peach.vercel.app'
    },
    {
      id: 'astra',
      tags: ['JavaScript', 'AI UI', 'Modern Landing'],
      github: 'https://github.com/Franker24/ASTRA',
      demo: 'https://astra-eight-steel.vercel.app',
      embed: 'https://astra-eight-steel.vercel.app'
    },
    {
      id: 'construtech',
      tags: ['React', 'Construction', 'Landing Page'],
      github: 'https://github.com/Franker24/Constru-Tech-',
      demo: 'https://constru-tech-95.vercel.app',
      embed: 'https://constru-tech-95.vercel.app'
    }
  ];

  const timelineProjects = [
    {
      id: 'wisa',
      tags: ['TypeScript', 'Saas', 'Modern UI'],
      github: 'https://github.com/Franker24/Wisa',
      demo: 'https://wisa-neon.vercel.app',
      embed: 'https://wisa-neon.vercel.app',
      image: '/wisa.png'
    },
    {
      id: 'nexcrypto',
      tags: ['React', 'Crypto', 'Dashboard UI'],
      github: 'https://github.com/Franker24/NexCrypto',
      demo: 'https://nex-crypto.vercel.app',
      embed: 'https://nex-crypto.vercel.app',
      image: '/nexcrypto.png'
    },
    {
      id: 'kineticcourt',
      tags: ['TypeScript', 'Sports UI', 'Bold Visuals'],
      github: 'https://github.com/Franker24/KINETIC-COURT',
      demo: 'https://kinetic-court.vercel.app',
      embed: 'https://kinetic-court.vercel.app',
      image: '/kinetic.png'
    },
    {
      id: 'ms',
      tags: ['React', 'Accounting', 'Clean UI'],
      github: 'https://github.com/Franker24/Estudio-ms',
      demo: 'https://estudio-ms.vercel.app',
      embed: 'https://estudio-ms.vercel.app',
      image: '/ms.png'
    },
    {
      id: 'currency',
      tags: ['HTML', 'API', 'Exchange Rates'],
      github: 'https://github.com/Franker24/Cotizacion-de-monedas-',
      demo: 'https://mock-omega-eight.vercel.app/',
      embed: 'https://mock-omega-eight.vercel.app/',
      image: '/currency.png'
    }
  ];

  const [{ x }, api] = useSpring(() => ({
    x: -currentIndex * 100,
    config: { mass: 1, tension: 180, friction: 35 }
  }));

  useEffect(() => {
    api.start({ x: -currentIndex * 100 });
  }, [currentIndex, api]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setCurrentIndex((prev) => (prev + 1) % myProjects.length);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [myProjects.length]);

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
      setTimeout(() => {
        isDragging.current = false;
      }, 50);
      api.start({ x: -currentIndex * 100 });
    } else {
      api.start({ x: -currentIndex * 100 + (mx / window.innerWidth) * 100, immediate: true });
    }
  }, {
    axis: 'x',
    filterTaps: true,
    rubberband: true
  });



  const renderPreview = (project, isCenter, index, currentIndex) => {
    const isNear = Math.abs(currentIndex - index) <= 1 || 
                   (currentIndex === 0 && index === myProjects.length - 1) ||
                   (currentIndex === myProjects.length - 1 && index === 0);

    // Show embed (iframe) on both desktop and mobile if available
    if (project.embed) {
      if (!isNear) {
        return (
          <div style={{ width: '100%', height: '100%', backgroundColor: colors.previewShell, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: colors.hint, fontSize: '0.9rem', letterSpacing: '0.1em' }}>Loading...</span>
          </div>
        );
      }
      return (
        <iframe
          src={project.embed}
          title={t(`projects.items.${project.id}.name`)}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '26px',
            transform: 'scale(1.01)',
            transformOrigin: 'top center',
            filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 0.5s',
            pointerEvents: 'none'
          }}
        />
      );
    }

    if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.id}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '26px',
            objectFit: 'cover',
            filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 0.5s'
          }}
          draggable="false"
        />
      );
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: colors.fallbackBg,
          color: colors.fallbackText,
          textAlign: 'center',
          filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)',
          transition: 'filter 0.5s'
        }}
      >
        <div>
          <div
            style={{
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.7,
              marginBottom: '0.75rem'
            }}
          >
            Live Project
          </div>
          <div
            style={{
              fontSize: isMobile ? '1.6rem' : '2.4rem',
              fontWeight: '900',
              letterSpacing: '-0.04em'
            }}
          >
            {t(`projects.items.${project.id}.name`)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: isMobile ? '5rem 0' : '10rem 0',
        backgroundColor: colors.sectionBg,
        overflow: 'hidden',
        position: 'relative',
        transition: 'background-color 0.4s ease'
      }}
    >
      <animated.div style={revealAnim}>
        <div style={{ marginBottom: isMobile ? '3rem' : '5rem', textAlign: 'center' }}>
          <h3
            style={{
              fontSize: isMobile ? '2.5rem' : '5rem',
              fontWeight: '900',
              color: colors.title,
              margin: 0,
              letterSpacing: '-2px',
              transition: 'color 0.4s ease'
            }}
          >
            {t('projects.section_title')} <span style={{ color: '#5B42F3' }}>{t('projects.section_subtitle')}</span>
          </h3>
          <p style={{ color: colors.hint, fontSize: '1rem', marginTop: '10px', transition: 'color 0.4s ease' }}>
            {t('projects.drag_hint', '<- Swipe to explore ->')}
          </p>
        </div>

        <div
          {...bind()}
          style={{
            width: '100%',
            cursor: isDragging.current ? 'grabbing' : 'grab',
            touchAction: 'pan-y'
          }}
        >
          <animated.div
            style={{
              display: 'flex',
              transform: x.to((val) => `translate3d(${val}%, 0, 0)`),
              touchAction: 'pan-y'
            }}
          >
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
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '900px',
                      height: isMobile ? '520px' : '650px',
                      borderRadius: '40px',
                      padding: '2px',
                      position: 'relative',
                      backgroundImage: isCenter
                        ? 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)'
                        : colors.inactiveBorder,
                      boxShadow: isCenter ? colors.shadow : 'none',
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: colors.panelBg,
                        borderRadius: '38px',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'background-color 0.4s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: isMobile ? '245px' : '420px',
                          overflow: 'hidden',
                          position: 'relative',
                          padding: isMobile ? '14px 14px 0' : '22px 22px 0'
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            borderRadius: '30px',
                            background: colors.previewShell
                          }}
                        >
                          {renderPreview(project, isCenter, index, currentIndex)}
                        </div>

                        {project.embed && (
                          <div
                            style={{
                              position: 'absolute',
                              top: isMobile ? '18px' : '24px',
                              right: isMobile ? '18px' : '24px',
                              backgroundColor: colors.liveBadgeBg,
                              color: '#00DDEB',
                              border: colors.liveBadgeBorder,
                              borderRadius: '999px',
                              padding: '6px 12px',
                              fontSize: isMobile ? '0.6rem' : '0.7rem',
                              fontWeight: '800',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              zIndex: 2,
                              backdropFilter: 'blur(8px)'
                            }}
                          >
                            Live Preview
                          </div>
                        )}

                      </div>

                      <div
                        style={{
                          padding: isMobile ? '1.1rem 1.25rem 1.25rem' : '1.4rem 1.8rem 1.7rem',
                          margin: isMobile ? '0.9rem 14px 14px' : '1.1rem 22px 22px',
                          backgroundColor: colors.infoBg,
                          borderRadius: '28px',
                          zIndex: 2,
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          backdropFilter: 'blur(10px)',
                          transition: 'background-color 0.4s ease'
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontSize: isMobile ? '1.55rem' : '2.4rem',
                              fontWeight: '900',
                              color: colors.title,
                              marginBottom: '0.45rem',
                              transition: 'color 0.4s ease'
                            }}
                          >
                            {t(`projects.items.${project.id}.name`)}
                          </h4>
                          <p
                            style={{
                              color: colors.body,
                              fontSize: isMobile ? '0.85rem' : '0.98rem',
                              lineHeight: '1.55',
                              maxWidth: '700px',
                              transition: 'color 0.4s ease'
                            }}
                          >
                            {t(`projects.items.${project.id}.desc`)}
                          </p>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: isMobile ? 'flex-start' : 'center',
                            gap: '1rem',
                            marginTop: '1rem'
                          }}
                        >
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {project.tags?.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  backgroundColor: colors.tagBg,
                                  color: '#00DDEB',
                                  border: colors.tagBorder,
                                  padding: '5px 12px',
                                  borderRadius: '100px',
                                  fontSize: '0.7rem',
                                  fontWeight: '700'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                color: colors.linkColor,
                                textDecoration: 'none',
                                fontWeight: '800',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'color 0.4s ease'
                              }}
                            >
                              <FaGithub size={18} /> {t('projects.github')}
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                color: colors.accentLink,
                                textDecoration: 'none',
                                fontWeight: '800',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'color 0.4s ease'
                              }}
                            >
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

        <div style={{ display: 'flex', gap: '12px', marginTop: '4rem', justifyContent: 'center' }}>
          {myProjects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '40px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentIndex === index ? '#5B42F3' : colors.mutedDot,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          ))}
        </div>

        {/* TIMELINE SECTION */}
        <div style={{ marginTop: '10rem', position: 'relative', maxWidth: '1100px', margin: '10rem auto 0', padding: '0 2rem' }}>
          <h3 style={{ fontSize: isMobile ? '2.2rem' : '4rem', fontWeight: '900', color: colors.title, textAlign: 'center', marginBottom: '6rem', letterSpacing: '-1px' }}>
            {t('projects.section_subtitle') === 'Projects' ? 'More ' : 'Más '}<span style={{ color: '#5B42F3' }}>{t('projects.section_subtitle') === 'Projects' ? 'Projects' : 'Proyectos'}</span>
          </h3>

          <div style={{ 
            position: 'relative',
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            columnGap: isMobile ? '0' : '120px',
            rowGap: isMobile ? '0' : '80px'
          }}>
            {/* The responsive straight vertical line track */}
            <div style={{
              position: 'absolute',
              left: isMobile ? '25px' : '50%',
              top: isMobile ? '0px' : '120px',
              bottom: isMobile ? '50px' : '150px',
              width: '4px',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 1
            }}>
              <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#AF40FF" />
                    <stop offset="50%" stopColor="#5B42F3" />
                    <stop offset="100%" stopColor="#00DDEB" />
                  </linearGradient>
                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Straight line base track (gray) */}
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="4"
                />
                {/* Glowing neon straight vertical line */}
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="url(#lineGrad)"
                  strokeWidth="4"
                  filter="url(#neonGlow)"
                  style={{ opacity: 0.8 }}
                />
              </svg>
            </div>
            
            {timelineProjects.map((project, index) => (
              <TimelineCard 
                key={project.id} 
                project={project} 
                index={index} 
                isMobile={isMobile} 
                colors={colors} 
                t={t} 
              />
            ))}
          </div>
        </div>

      </animated.div>
    </section>
  );
};

export default Projects;
