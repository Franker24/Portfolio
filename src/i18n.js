import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hero: {
            role: "Fullstack Web Developer | Open to Remote Opportunities",
            cta_projects: "View Projects",
            cta_about: "About Me"
          },
          projects: {
            section_title: "Selected",
            section_subtitle: "Works",
            github: "GITHUB",
            live: "LIVE",
            items: {
              ms: { name: "Estudio MS", desc: "Digital solution for an accounting firm. Developed with a focus on trust and service management." },
              jokers: { name: "Jokers of Neon", desc: "Dynamic dashboard inspired by neon-cyberpunk aesthetics and reactive state management." },
              xclone: { name: "X-Clone", desc: "Functional social media clone focused on scalable component architecture." },
              space: { name: "SpaceWeb", desc: "Immersive visual experience about space exploration using smooth animations." },
              currency: { name: "Currency Tracker", desc: "Financial application for real-time currency tracking using external APIs." },
              coffee: { name: "Coffee Shop", desc: "Specialty coffee e-commerce featuring an intuitive shopping experience." },
              menu: { name: "Interactive Menu", desc: "Digital menu solution for gastronomy, optimized for mobile UX." },
              form: { name: "Smart Form", desc: "Form system with advanced validation and optimized user workflows." }
            }
          }
        }
      },
      es: {
        translation: {
          hero: {
            role: "Desarrollador Web Fullstack | Abierto a Oportunidades Remotas",
            cta_projects: "Ver Proyectos",
            cta_about: "Sobre Mí"
          },
          projects: {
            section_title: "Proyectos",
            section_subtitle: "Seleccionados",
            github: "GITHUB",
            live: "VIVO",
            items: {
              ms: { name: "Estudio MS", desc: "Solución digital para estudio contable. Desarrollada con enfoque en la confianza y gestión de servicios." },
              jokers: { name: "Jokers of Neon", desc: "Tablero dinámico inspirado en la estética neon-cyberpunk y manejo de estado reactivo." },
              xclone: { name: "X-Clon", desc: "Clon funcional de red social enfocado en arquitectura de componentes escalables." },
              space: { name: "SpaceWeb", desc: "Experiencia visual sobre el espacio con animaciones fluidas y diseño moderno." },
              currency: { name: "Cotización Monedas", desc: "App financiera para seguimiento de divisas en tiempo real mediante APIs." },
              coffee: { name: "Coffee Shop", desc: "E-commerce para cafetería con carrito de compras y filtrado intuitivo." },
              menu: { name: "Menú Interactivo", desc: "Menú digital para gastronomía optimizado para una experiencia móvil fluida." },
              form: { name: "Formulario Inteligente", desc: "Sistema de formularios con validaciones avanzadas y flujo optimizado." }
            }
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;