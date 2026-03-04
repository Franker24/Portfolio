import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Contenedor principal con el degradado Nitro
  const cardWrapperStyle = {
    width: '100%',
    minHeight: '480px',
    borderRadius: '24px',
    padding: '2px', // Grosor del borde degradado
    backgroundImage: 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isHovered ? 'translateY(-12px) scale(1.01)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 30px 60px rgba(91, 66, 243, 0.3)' : '0 10px 20px rgba(0,0,0,0.4)',
    cursor: 'pointer'
  };

  // Interior de la tarjeta (Negro puro para resaltar la imagen y el borde)
  const cardContentStyle = {
    backgroundColor: '#000',
    borderRadius: '22px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  const imageContainerStyle = {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#111' // Fondo por si la imagen tarda en cargar
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    opacity: isHovered ? 1 : 0.85
  };

  return (
    <div 
      style={cardWrapperStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardContentStyle}>
        
        {/* PARTE SUPERIOR: IMAGEN */}
        <div style={imageContainerStyle}>
          <img 
            src={project.image} 
            alt={project.name} 
            style={imageStyle} 
          />
          {/* Overlay gradiente inferior para fundir con el texto */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, #000 0%, transparent 100%)'
          }}></div>
        </div>

        {/* PARTE INFERIOR: TEXTO Y LINKS */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h4 style={{ 
            fontSize: '1.6rem', 
            fontWeight: '800', 
            color: '#fff', 
            marginBottom: '0.8rem',
            letterSpacing: '-0.5px' 
          }}>
            {project.name}
          </h4>
          
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '0.95rem', 
            lineHeight: '1.6', 
            marginBottom: '1.5rem', 
            flexGrow: 1,
            fontWeight: '300'
          }}>
            {project.desc}
          </p>
          
          {/* TAGS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                color: '#fff',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '5px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '1.5rem' 
          }}>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}
            >
              <FaGithub /> Code
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: '#00DDEB', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;