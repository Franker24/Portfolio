import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          hero: {
            role: 'Fullstack Web Developer | Open to Remote Opportunities',
            cta_projects: 'View Projects',
            cta_about: 'About Me'
          },
          info: {
            status: 'OPEN TO WORK',
            title_p1: 'Professional',
            title_p2: 'Profile',
            description: 'Frontend Developer evolving into a Fullstack role with a focus on SQL and NoSQL databases. I am currently contributing to Open Source projects through OnlyDust to build robust, real-world experience. Passionate about scalable architectures and continuous learning.',
            exp_title: 'Work Experience',
            exp_role: 'Web Developer',
            exp_company: 'OnlyDust · Freelance',
            exp_date: 'Sept. 2024 - Present',
            exp_desc: 'Contributing to high-impact open-source repositories. Focused on implementing new features, code optimization, and resolving complex issues to enhance system efficiency and stability.',
            edu_utn: 'FullStack Development 2024',
            edu_fcc: 'Web Development Certification'
          },
          projects: {
            section_title: 'Featured',
            section_subtitle: 'Projects',
            drag_hint: '<- Swipe to explore ->',
            github: 'Source',
            live: 'Live Demo',
            items: {
              astra: { name: 'ASTRA', desc: 'AI-inspired landing experience with a polished futuristic interface and strong visual identity.' },
              nexcrypto: { name: 'NexCrypto', desc: 'Crypto-focused interface with a modern dashboard feel and live-market inspired visuals.' },
              coffeeweb: { name: 'CoffeeWeb', desc: 'Coffee brand storefront concept with a warm visual direction and product-focused layout.' },
              kineticcourt: { name: 'Kinetic Court', desc: 'Sports-driven concept built with bold composition, motion, and a stronger editorial look.' },
              construtech: { name: 'Constru-Tech', desc: 'Construction company landing page built to showcase services with a strong commercial presentation.' },
              ms: { name: 'Estudio MS', desc: 'Accounting firm landing page with focus on clean UI and professional presence.' },
              currency: { name: 'Currency Converter', desc: 'Real-time currency exchange app using external financial APIs.' }
            }
          },
          footer: {
            dev_by: 'Designed & Developed by me.',
            location: 'Based in'
          }
        }
      },
      es: {
        translation: {
          hero: {
            role: 'Desarrollador Web Fullstack | Abierto a Oportunidades Remotas',
            cta_projects: 'Ver Proyectos',
            cta_about: 'Sobre Mi'
          },
          info: {
            status: 'DISPONIBLE PARA TRABAJAR',
            title_p1: 'Perfil',
            title_p2: 'Profesional',
            description: 'Desarrollador Frontend evolucionando a un rol Fullstack con enfoque en bases de datos SQL y NoSQL. Actualmente contribuyo en proyectos Open Source a traves de OnlyDust para construir experiencia solida en el mundo real. Apasionado por las arquitecturas escalables.',
            exp_title: 'Experiencia Laboral',
            exp_role: 'Desarrollador Web',
            exp_company: 'OnlyDust · Freelance',
            exp_date: 'Sept. 2024 - Presente',
            exp_desc: 'Contribucion en repositorios de codigo abierto de alto impacto. Enfocado en la implementacion de nuevas funcionalidades, optimizacion de codigo y resolucion de problemas complejos.',
            edu_utn: 'Desarrollo FullStack 2024',
            edu_fcc: 'Certificacion en Desarrollo Web'
          },
          projects: {
            section_title: 'Proyectos',
            section_subtitle: 'Destacados',
            drag_hint: '<- Desliza para explorar ->',
            github: 'Codigo',
            live: 'Demo en vivo',
            items: {
              astra: { name: 'ASTRA', desc: 'Landing inspirada en AI con una interfaz futurista pulida y una identidad visual marcada.' },
              nexcrypto: { name: 'NexCrypto', desc: 'Interfaz orientada al mundo cripto con estilo de dashboard moderno y visuales inspirados en mercado en vivo.' },
              coffeeweb: { name: 'CoffeeWeb', desc: 'Concepto de storefront para marca de cafe con una direccion visual calida y enfoque en producto.' },
              kineticcourt: { name: 'Kinetic Court', desc: 'Concepto ligado al deporte con composicion intensa, movimiento y una estetica mas editorial.' },
              construtech: { name: 'Constru-Tech', desc: 'Landing page para empresa de construccion pensada para mostrar servicios con una presencia comercial fuerte.' },
              ms: { name: 'Estudio MS', desc: 'Landing page para estudio contable con enfoque en una interfaz limpia y presencia profesional.' },
              currency: { name: 'Conversor de Moneda', desc: 'Aplicacion de cotizacion en tiempo real utilizando APIs financieras externas.' }
            }
          },
          footer: {
            dev_by: 'Disenado y Desarrollado por mi.',
            location: 'Desde'
          }
        }
      }
    }
  });

export default i18n;
