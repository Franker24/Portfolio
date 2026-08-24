import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBolt, FaChartLine, FaTrophy, FaPlayCircle, FaRocket, FaLinkedin, FaCoffee, FaStore, FaBuilding, FaRobot, FaLaptopCode, FaFilm, FaCheckCircle, FaPalette, FaComments } from 'react-icons/fa';

const themePalette = {
  dark: {
    sectionBg: '#000000',
    panelBg: '#050505',
    title: '#ffffff',
    body: '#cbd5e1',
    hint: '#94a3b8',
    borderCol: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(59, 130, 246, 0.4)',
    tagBg: 'rgba(255, 255, 255, 0.04)',
    tagBorder: '1px solid rgba(255, 255, 255, 0.08)',
    linkColor: '#ffffff',
    accentLink: '#3b82f6',
    cardBg: 'rgba(255, 255, 255, 0.02)',
    metaBg: 'rgba(255, 255, 255, 0.02)'
  },
  light: {
    sectionBg: '#f8fafc',
    panelBg: '#ffffff',
    title: '#0f172a',
    body: '#334155',
    hint: '#64748b',
    borderCol: 'rgba(0, 0, 0, 0.08)',
    borderHover: 'rgba(59, 130, 246, 0.4)',
    tagBg: 'rgba(0, 0, 0, 0.04)',
    tagBorder: '1px solid rgba(0, 0, 0, 0.08)',
    linkColor: '#0f172a',
    accentLink: '#2563eb',
    cardBg: '#ffffff',
    metaBg: 'rgba(0, 0, 0, 0.02)'
  }
};

// Los 7 Proyectos Frontend Seleccionados con URLs y Previews Oficiales
const projectsData = [
  {
    id: 'ms',
    category: 'websites',
    accent: '#10b981',
    badge: 'CLIENTE PAGO EN PRODUCCIÓN',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Sitio Comercial', 'Client Portal', 'Lead Intake'],
    github: 'https://github.com/Franker24/Estudio-ms',
    demo: 'https://estudio-ms.vercel.app',
    image: '/imgproyectos/estudioms.png',
    icon: FaLaptopCode,
    insideTheBuild: ['Producción Comercial en Vivo', 'Captura de Leads e Integración WhatsApp Directa', 'Diseño Responsivo Corporativo de Alta Conversión'],
  },
  {
    id: 'coffeeweb',
    category: 'websites',
    accent: '#d97706',
    badge: 'GOURMET & E-COMMERCE LANDING',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Gourmet Coffee', 'E-Commerce Catalog', 'Smooth Scroll'],
    github: 'https://github.com/Franker24/CoffeeWeb',
    demo: 'https://coffee-web-peach.vercel.app/',
    image: '/imgproyectos/coffee.png',
    icon: FaCoffee,
    insideTheBuild: ['Menú de Café Especial con Catálogo Interactivo', 'Carrito Flotante de Pedidos', 'Diseño Visual Premium Orientado a Marcas'],
  },
  {
    id: 'astra',
    category: 'interactive',
    accent: '#06b6d4',
    badge: 'ASTRONOMY & SPACE WEB APP',
    tags: ['React 19', 'TypeScript', 'Space Telemetry', 'Astronomy Data', 'Interactive Cards', 'Responsive UI'],
    github: 'https://github.com/Franker24/ASTRA',
    demo: 'https://astra-eight-steel.vercel.app/',
    image: '/imgproyectos/astra.png',
    icon: FaRocket,
    insideTheBuild: ['Información Interactiva de la Tierra & Espacio', 'Tarjetas Informativas Astronómicas en Tiempo Real', 'Diseño Cósmico Moderno & Responsivo'],
  },
  {
    id: 'watchweb',
    category: 'ecommerce',
    accent: '#ef4444',
    badge: 'LUXURY WATCH E-COMMERCE',
    tags: ['JavaScript', 'Luxury Watches', 'E-Commerce Store', 'Shopping Cart', 'Dark Mode UI'],
    github: 'https://github.com/Franker24/WatchWeb',
    demo: 'https://watch-web-gules.vercel.app',
    image: '/imgproyectos/watchweb.png',
    icon: FaStore,
    insideTheBuild: ['Catálogo de Relojes Exclusivos de Lujo', 'Carrito de Compras Emergente', 'Fichas Detalladas de Producto & Diseño Elegante'],
  },
  {
    id: 'elitestore',
    category: 'ecommerce',
    accent: '#f59e0b',
    badge: 'PREMIUM FASHION E-COMMERCE',
    tags: ['React 19', 'TypeScript', 'Fashion E-Commerce', 'Shopping Cart Drawer', 'High Conversion UI'],
    github: 'https://github.com/Franker24/Elite-Store',
    demo: 'https://elite-store-xi.vercel.app/',
    image: '/imgproyectos/elite.png',
    icon: FaStore,
    insideTheBuild: ['Catálogo de Moda con Filtrado Dinámico', 'Gaveta Interactiva de Carrito de Compras', 'Interfaz Comercial Diseñada para Conversión'],
  },
  {
    id: 'construtech',
    category: 'websites',
    accent: '#f97316',
    badge: 'INDUSTRIAL CORPORATE WEB APP',
    tags: ['React 19', 'TypeScript', 'Industrial Web Design', 'Portfolio Showcase', 'Quote Intake Form'],
    github: 'https://github.com/Franker24/Constru-Tech-',
    demo: 'https://constru-tech-95.vercel.app/',
    image: '/imgproyectos/construtech.png',
    icon: FaBuilding,
    insideTheBuild: ['Plataforma Web Corporativa para Construcción', 'Galería de Obras Finalizadas & Proyectos', 'Formulario de Solicitud de Presupuesto'],
  },
  {
    id: 'kineticcourt',
    category: 'ecommerce',
    accent: '#3b82f6',
    badge: 'BASKETBALL SPORTSWEAR E-COMMERCE',
    tags: ['TypeScript', 'Basketball Apparel', 'E-Commerce Cart', 'Size Selector', 'Editorial Typography'],
    github: 'https://github.com/Franker24/KINETIC-COURT',
    demo: 'https://kinetic-court.vercel.app',
    image: '/imgproyectos/kineticcourt.png',
    icon: FaTrophy,
    insideTheBuild: ['Catálogo de Ropa & Calzado de Básquetbol', 'Sistema de Carrito de Compras & Selección de Tallas', 'Diseño Editorial Deportivo de Alto Impacto'],
  }
];

const Projects = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const colors = themePalette[theme] || themePalette.dark;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { key: 'all', label: t('projects.categories.all') },
    { key: 'websites', label: t('projects.categories.websites') },
    { key: 'ecommerce', label: t('projects.categories.ecommerce') },
    { key: 'interactive', label: t('projects.categories.interactive') }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? '4rem 0' : '7.5rem 0',
        backgroundColor: colors.sectionBg,
        position: 'relative'
      }}
    >
      {/* CABECERA DE SECCIÓN */}
      <div style={{ marginBottom: isMobile ? '2.5rem' : '4.5rem', textAlign: 'center', padding: '0 1.5rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: '900',
          letterSpacing: '3px',
          color: colors.accentLink,
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.75rem'
        }}>
          {t('projects.projects_count')}
        </span>

        <h2
          style={{
            fontSize: isMobile ? '2.3rem' : '4.2rem',
            fontWeight: '900',
            color: colors.title,
            margin: 0,
            letterSpacing: '-2px',
            textTransform: 'uppercase'
          }}
        >
          {t('projects.section_title')} <span style={{
            background: 'linear-gradient(135deg, #00DDEB, #5B42F3, #AF40FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>{t('projects.section_subtitle')}</span>
        </h2>

        <p style={{
          color: colors.hint,
          fontSize: isMobile ? '0.95rem' : '1.15rem',
          marginTop: '15px',
          maxWidth: '680px',
          margin: '15px auto 0',
          lineHeight: '1.6'
        }}>
          {t('projects.description')}
        </p>

        {/* PESTAÑAS DE CATALOGACIÓN FRONTEND */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '8px' : '14px',
          flexWrap: 'wrap',
          marginTop: '2.5rem'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="filter-tab-btn"
                style={{
                  padding: isMobile ? '0.55rem 1.1rem' : '0.75rem 1.6rem',
                  borderRadius: '100px',
                  border: isActive ? `1.5px solid ${colors.accentLink}` : `1px solid ${colors.borderCol}`,
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.15)' : colors.cardBg,
                  color: isActive ? '#ffffff' : colors.hint,
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* COMPOSICIÓN DE LOS 7 PROYECTOS FRONTEND CON IMÁGENES REALES */}
      <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '3rem' : '4.5rem' }}>
          {filteredProjects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const ProjectIcon = project.icon;
            const cleanDomain = project.demo.replace('https://', '').replace(/\/$/, '');

            return (
              <div
                key={project.id}
                className="hover-card"
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : (isLeft ? 'row' : 'row-reverse'),
                  alignItems: 'stretch',
                  justifyContent: 'space-between',
                  gap: isMobile ? '2rem' : '3.5rem',
                  width: '100%',
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${project.accent}33`,
                  borderRadius: '28px',
                  padding: isMobile ? '1.5rem' : '2.5rem',
                  boxSizing: 'border-box',
                  boxShadow: `0 10px 30px ${project.accent}0d`
                }}
              >
                {/* COLUMNA DE INFORMACIÓN FRONTEND */}
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  
                  {/* BADGE DE PROYECTO */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                    <span style={{
                      fontSize: '0.62rem',
                      fontWeight: '800',
                      letterSpacing: '1.5px',
                      color: project.accent,
                      backgroundColor: `${project.accent}1a`,
                      padding: '4px 12px',
                      borderRadius: '100px',
                      border: `1px solid ${project.accent}44`
                    }}>
                      ● {project.badge}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                    <ProjectIcon style={{ color: project.accent, fontSize: '1.8rem' }} />
                    <h3 style={{ fontSize: isMobile ? '1.7rem' : '2.4rem', fontWeight: '900', color: colors.title, margin: 0, letterSpacing: '-1px' }}>
                      {t(`projects.items.${project.id}.name`)}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: project.accent, fontWeight: '700', marginBottom: '1rem' }}>
                    {t(`projects.items.${project.id}.subtitle`)}
                  </p>

                  <p style={{ color: colors.body, fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.2rem' }}>
                    {t(`projects.items.${project.id}.desc`)}
                  </p>

                  {/* CARACTERÍSTICAS DESTACADAS FRONTEND */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '1.5px', color: colors.hint, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      DESTACADOS FRONTEND
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {project.insideTheBuild.map((item) => (
                        <span key={item} style={{ fontSize: '0.78rem', color: colors.body, display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: project.accent, fontWeight: 'bold' }}>■</span> {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TAGS TÉCNICAS */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.8rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        backgroundColor: `${project.accent}14`,
                        color: colors.title,
                        border: `1px solid ${project.accent}33`,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: '700'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ENLACES DIRECTOS */}
                  <div style={{ display: 'flex', gap: '1.2rem', borderTop: `1px solid ${colors.borderCol}`, paddingTop: '1.2rem' }}>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      style={{ color: project.accent, fontSize: '0.88rem', fontWeight: '800', textDecoration: 'none' }}
                    >
                      {t('projects.live')} <FaExternalLinkAlt size={12} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      style={{ color: colors.linkColor, fontSize: '0.88rem', fontWeight: '800', textDecoration: 'none' }}
                    >
                      {t('projects.github')} <FaGithub size={14} />
                    </a>
                  </div>
                </div>

                {/* COLUMNA DE MOCKUP BROWSER CON IMAGEN REAL */}
                <div style={{
                  flex: '1.15',
                  height: isMobile ? '260px' : '380px',
                  borderRadius: '20px',
                  border: `1px solid ${project.accent}33`,
                  overflow: 'hidden',
                  backgroundColor: colors.panelBg,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: `0 15px 35px ${project.accent}15`
                }}>
                  {/* Barra de Navegador Simulado */}
                  <div style={{
                    height: '32px',
                    backgroundColor: colors.metaBg,
                    borderBottom: `1px solid ${colors.borderCol}`,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    gap: '8px',
                    flexShrink: 0
                  }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
                    </div>
                    <div style={{
                      flexGrow: 1,
                      height: '18px',
                      backgroundColor: colors.sectionBg,
                      borderRadius: '4px',
                      fontSize: '0.58rem',
                      color: colors.hint,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'monospace',
                      border: `1px solid ${colors.borderCol}`,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {cleanDomain}
                    </div>
                  </div>

                  {/* Viewport UI con Imagen Real del Proyecto */}
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', display: 'block', backgroundColor: '#000000' }}
                  >
                    <img
                      src={project.image}
                      alt={t(`projects.items.${project.id}.name`)}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.35s ease'
                      }}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BANNER DE LLAMADO A LA ACCIÓN COMERCIAL PREMIUM */}
      <div style={{
        width: '100%',
        maxWidth: '1240px',
        margin: isMobile ? '4.5rem auto 0' : '7rem auto 0',
        padding: '0 1.5rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          borderRadius: '36px',
          background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.2) 0%, rgba(91, 66, 243, 0.15) 50%, rgba(10, 10, 10, 0.95) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.4)',
          padding: isMobile ? '3rem 1.5rem' : '4.5rem 3.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: '0 25px 60px -15px rgba(59, 130, 246, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '6px 16px',
            borderRadius: '100px'
          }}>
            <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
            <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#10b981', letterSpacing: '1px' }}>
              {t('projects.cta.badge')}
            </span>
          </div>

          <h3 style={{
            fontSize: isMobile ? '2rem' : '3.2rem',
            fontWeight: '900',
            color: colors.title,
            margin: 0,
            letterSpacing: '-1.5px',
            lineHeight: '1.15',
            maxWidth: '850px'
          }}>
            {t('projects.cta.title')}
          </h3>

          <p style={{
            fontSize: isMobile ? '0.98rem' : '1.18rem',
            color: colors.body,
            maxWidth: '750px',
            lineHeight: '1.65',
            margin: 0
          }}>
            {t('projects.cta.subtitle')}
          </p>

          {/* Feature Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '0.5rem',
            marginBottom: '0.5rem'
          }}>
            {[
              { icon: FaBolt, text: t('projects.cta.features.f2'), color: '#3b82f6' },
              { icon: FaPalette, text: t('projects.cta.features.f1'), color: '#AF40FF' },
              { icon: FaCheckCircle, text: t('projects.cta.features.f3'), color: '#10b981' },
              { icon: FaComments, text: t('projects.cta.features.f4'), color: '#06b6d4' }
            ].map((f, i) => {
              const FIcon = f.icon;
              return (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: colors.title
                }}>
                  <FIcon style={{ color: f.color, fontSize: '0.9rem' }} />
                  <span>{f.text}</span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <a
              href="https://www.linkedin.com/in/francisco-kacmajor-927a16195/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0.95rem 2.2rem',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #00DDEB, #5B42F3)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 12px 30px rgba(91, 66, 243, 0.45)',
                transition: 'all 0.25s ease'
              }}
            >
              <FaLinkedin size={20} /> {t('projects.cta.button')}
            </a>
            <a
              href="https://github.com/Franker24"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0.95rem 2.2rem',
                borderRadius: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${colors.borderCol}`,
                color: colors.title,
                fontWeight: '800',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease'
              }}
            >
              <FaGithub size={20} /> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
