import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // --- INFO SECTION ---
          hero: {
  role: "Fullstack Web Developer | Open to Remote Opportunities",
  cta_projects: "View Projects",
  cta_about: "About Me"
},
          info: {
            status: "OPEN TO WORK",
            title_p1: "Professional",
            title_p2: "Profile",
            description: "Frontend Developer evolving into a Fullstack role with a focus on SQL and NoSQL databases. I am currently contributing to Open Source projects through OnlyDust to build robust, real-world experience. Passionate about scalable architectures and continuous learning.",
            exp_title: "Work Experience",
            exp_role: "Web Developer",
            exp_company: "OnlyDust · Freelance",
            exp_date: "Sept. 2024 - Present",
            exp_desc: "Contributing to high-impact open-source repositories. Focused on implementing new features, code optimization, and resolving complex issues to enhance system efficiency and stability.",
            edu_utn: "FullStack Development 2024",
            edu_fcc: "Web Development Certification"
          },
          // --- PROJECTS SECTION ---
          projects: {
            section_title: "Featured",
            section_subtitle: "Projects",
            drag_hint: "← Swipe to explore →",
            github: "Source",
            live: "Live Demo",
            items: {
              ms: { name: "Estudio MS", desc: "Accounting firm landing page with focus on clean UI and professional presence." },
              jokers: { name: "Jokers of Neon", desc: "Interactive web experience inspired by Balatro, featuring neon aesthetics and smooth animations." },
              xclone: { name: "X-Clon", desc: "Social media interface clone to practice complex layouts and Tailwind CSS." },
              space: { name: "SpaceWeb", desc: "Educational site about space exploration with immersive CSS effects." },
              currency: { name: "Currency Converter", desc: "Real-time currency exchange app using external financial APIs." },
              coffee: { name: "Coffee Shop", desc: "E-commerce concept for a coffee roastery with cart functionality." },
              menu: { name: "Digital Menu", desc: "Modern solution for restaurants focusing on mobile UX and fast loading." },
              form: { name: "Interactive Form", desc: "Advanced form validation and multi-step UI implementation." }
            }
          },
          // --- FOOTER ---
          footer: {
            dev_by: "Designed & Developed by me.",
            location: "Based in"
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
          // --- SECCIÓN INFO ---
          info: {
            status: "DISPONIBLE PARA TRABAJAR",
            title_p1: "Perfil",
            title_p2: "Profesional",
            description: "Desarrollador Frontend evolucionando a un rol Fullstack con enfoque en bases de datos SQL y NoSQL. Actualmente contribuyo en proyectos Open Source a través de OnlyDust para construir experiencia sólida en el mundo real. Apasionado por las arquitecturas escalables.",
            exp_title: "Experiencia Laboral",
            exp_role: "Desarrollador Web",
            exp_company: "OnlyDust · Freelance",
            exp_date: "Sept. 2024 - Presente",
            exp_desc: "Contribución en repositorios de código abierto de alto impacto. Enfocado en la implementación de nuevas funcionalidades, optimización de código y resolución de problemas complejos.",
            edu_utn: "Desarrollo FullStack 2024",
            edu_fcc: "Certificación en Desarrollo Web"
          },
          // --- SECCIÓN PROYECTOS ---
          projects: {
            section_title: "Proyectos",
            section_subtitle: "Destacados",
            drag_hint: "← Desliza para explorar →",
            github: "Código",
            live: "Demo en vivo",
            items: {
              ms: { name: "Estudio MS", desc: "Landing page para estudio contable con enfoque en una interfaz limpia y presencia profesional." },
              jokers: { name: "Jokers of Neon", desc: "Experiencia web interactiva inspirada en Balatro, con estética neón y animaciones fluidas." },
              xclone: { name: "X-Clon", desc: "Clon de interfaz de red social para practicar layouts complejos y Tailwind CSS." },
              space: { name: "SpaceWeb", desc: "Sitio educativo sobre exploración espacial con efectos visuales inmersivos." },
              currency: { name: "Conversor de Moneda", desc: "Aplicación de cotización en tiempo real utilizando APIs financieras externas." },
              coffee: { name: "Coffee Shop", desc: "Concepto de E-commerce para una cafetería con funcionalidad de carrito." },
              menu: { name: "Menú Digital", desc: "Solución moderna para restaurantes enfocada en UX móvil y carga rápida." },
              form: { name: "Formulario Interactivo", desc: "Implementación de validación avanzada de formularios y UI de varios pasos." }
            }
          },
          // --- FOOTER ---
          footer: {
            dev_by: "Diseñado y Desarrollado por mí.",
            location: "Desde"
          }
        }
      }
    }
  });

export default i18n;