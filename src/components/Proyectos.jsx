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
      id: 'astra',
      tags: ['JavaScript', 'AI UI', 'Modern Landing'],
      github: 'https://github.com/Franker24/ASTRA',
      demo: 'https://astra-eight-steel.vercel.app',
      embed: 'https://astra-eight-steel.vercel.app'
    },
    {
      id: 'nexcrypto',
      tags: ['React', 'Crypto', 'Dashboard UI'],
      github: 'https://github.com/Franker24/NexCrypto',
      demo: 'https://nex-crypto.vercel.app',
      embed: 'https://nex-crypto.vercel.app'
    },
    {
      id: 'coffeeweb',
      tags: ['React', 'Coffee Brand', 'E-commerce UI'],
      github: 'https://github.com/Franker24/CoffeeWeb',
      demo: 'https://coffee-web-peach.vercel.app',
      embed: 'https://coffee-web-peach.vercel.app'
    },
    {
      id: 'kineticcourt',
      tags: ['TypeScript', 'Sports UI', 'Bold Visuals'],
      github: 'https://github.com/Franker24/KINETIC-COURT',
      demo: 'https://kinetic-court.vercel.app',
      embed: 'https://kinetic-court.vercel.app'
    },
    {
      id: 'construtech',
      tags: ['React', 'Construction', 'Landing Page'],
      github: 'https://github.com/Franker24/Constru-Tech-',
      demo: 'https://constru-tech-95.vercel.app',
      embed: 'https://constru-tech-95.vercel.app'
    },
    {
      id: 'ms',
      tags: ['React', 'Accounting', 'Clean UI'],
      github: 'https://github.com/Franker24/Estudio-ms',
      demo: 'https://estudio-ms.vercel.app',
      image: '/ms.png',
      embed: 'https://estudio-ms.vercel.app'
    },
    {
      id: 'currency',
      tags: ['HTML', 'API', 'Exchange Rates'],
      github: 'https://github.com/Franker24/Cotizacion-de-monedas-',
      demo: 'https://mock-omega-eight.vercel.app/',
      embed: 'https://mock-omega-eight.vercel.app/'
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

  const renderPreview = (project, isCenter) => {
    if (project.embed && !isMobile) {
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
                          {renderPreview(project, isCenter)}
                        </div>

                        {project.embed && !isMobile && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '18px',
                              right: '18px',
                              backgroundColor: colors.liveBadgeBg,
                              color: '#00DDEB',
                              border: colors.liveBadgeBorder,
                              borderRadius: '999px',
                              padding: '6px 12px',
                              fontSize: '0.7rem',
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
      </animated.div>
    </section>
  );
};

export default Projects;
