import React, { useEffect, useRef } from 'react';

const ParticlesBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Posición del Ratón para Física de Repulsión
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Configuración de Paleta Violeta Neón
    const isDark = theme !== 'light';
    const particleColors = isDark
      ? ['rgba(139, 92, 246, ', 'rgba(175, 64, 255, ', 'rgba(91, 66, 243, ', 'rgba(0, 221, 235, ']
      : ['rgba(124, 58, 237, ', 'rgba(147, 51, 234, ', 'rgba(99, 102, 241, ', 'rgba(14, 165, 233, '];

    const particleCount = Math.min(Math.floor((width * height) / 10000), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: radius,
        originalRadius: radius,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        alpha: Math.random() * 0.5 + 0.35,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        pulseDir: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Loop de Renderizado 60 FPS con Física Novedosa
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fondo Negro Absoluto en Dark Mode
      ctx.fillStyle = isDark ? '#000000' : '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // 1. Dibujar Enlaces Tipo Constelación
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * (isDark ? 0.22 : 0.12);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      // 2. Actualizar Partículas y Aplicar Física de Repulsión del Ratón
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Rebote en Bordes
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Titileo / Pulso Suave
        p.alpha += p.pulseSpeed * p.pulseDir;
        if (p.alpha > 0.75 || p.alpha < 0.2) p.pulseDir *= -1;

        // Repulsión Interactiva con el Cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          const repelX = Math.cos(angle) * force * 5;
          const repelY = Math.sin(angle) * force * 5;

          p.x -= repelX;
          p.y -= repelY;
        }

        // Dibujar esfera con resplandor neón
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = 'rgba(139, 92, 246, 0.9)';
        ctx.shadowBlur = isDark ? 10 : 4;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default ParticlesBackground;
