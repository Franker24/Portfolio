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
            description: 'Frontend Developer focused on building modern, responsive, and visually polished web applications using React and modern JavaScript technologies. Experienced in creating landing pages, SaaS interfaces, dashboards, and interactive user experiences with strong attention to UI design, performance, and scalability. Currently evolving into a Fullstack role while expanding knowledge in backend development and modern web architectures.',
            exp_title: 'Experience',
            experiences: {
              onlydust: {
                role: 'Open Source Contributor',
                company: 'OnlyDust',
                date: 'Sept. 2024 - Present',
                desc: 'Contributing to high-impact open-source repositories. Focused on implementing new features, code optimization, and resolving complex issues to enhance system efficiency and stability.'
              },
              freelance: {
                role: 'Frontend Developer',
                company: 'Freelance & Personal Projects',
                date: '2024 - Present',
                desc: 'Developed and designed multiple modern web applications and interactive interfaces for different digital products and concepts. Projects include AstraIA, an AI-inspired futuristic interface focused on immersive user experience; Wisa, a SaaS-style platform with modern UI architecture and responsive layouts; and NexCrypto, a crypto dashboard concept built with dynamic visual components and real-time inspired design systems. Focused on responsive development, reusable component structures, smooth animations, and scalable frontend architecture using React and modern JavaScript ecosystems.'
              }
            },
            edu_utn: 'FullStack Development Program · 2024',
            edu_fcc: 'Responsive Web Design & JavaScript Certification',
            tech_stack: 'Tech Stack',
            categories: {
              frontend: 'Frontend',
              backend: 'Backend',
              tools: 'Tools',
              learning: 'Learning'
            },
            badges: {
              stack: 'STACK',
              tools: 'TOOLS',
              progress: 'IN PROGRESS'
            },
            skills: {
              react: { name: 'React', desc: 'A popular JavaScript library for building component-based user interfaces.' },
              nextjs: { name: 'Next.js', desc: 'A React framework with server-side rendering, static site generation, and optimized performance.' },
              typescript: { name: 'TypeScript', desc: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.' },
              javascript: { name: 'JavaScript', desc: 'The core programming language of the modern web, enabling interactive interfaces.' },
              html: { name: 'HTML5', desc: 'The standard markup language for creating web pages and layout structures.' },
              css: { name: 'CSS3', desc: 'Style sheet language used for describing the presentation of web documents.' },
              tailwind: { name: 'Tailwind CSS', desc: 'A utility-first CSS framework for rapid UI development and clean design systems.' },
              nodejs: { name: 'Node.js', desc: 'A cross-platform JavaScript runtime environment for backend development and scripting.' },
              express: { name: 'Express', desc: 'A minimal and flexible Node.js web application framework for building APIs.' },
              mongodb: { name: 'MongoDB', desc: 'A document-based, open-source NoSQL database program.' },
              vercel: { name: 'Vercel', desc: 'A cloud platform for static sites and Serverless Functions, optimized for hosting React/Next.js apps.' },
              git: { name: 'Git', desc: 'A distributed version control system for tracking changes in source code.' },
              github: { name: 'GitHub', desc: 'A cloud-based hosting service for Git repositories and team collaboration.' },
              terminal: { name: 'Terminal', desc: 'A command line interface for executing shell commands and automating tasks.' },
              npm: { name: 'NPM', desc: 'The default package manager for the Node.js runtime environment.' },
              python: { name: 'Python', desc: 'An interpreted, high-level, general-purpose programming language.' },
              docker: { name: 'Docker', desc: 'A platform to design, build, run, and share applications with containers.' }
            }
          },
          projects: {
            section_title: 'Featured',
            section_subtitle: 'Projects',
            drag_hint: '<- Swipe to explore ->',
            github: 'Source',
            live: 'Live Demo',
            load_interactive: 'Load Interactive Preview',
            items: {
              securify: { name: 'Securify', desc: 'Secure authentication interface with a clean, modern UI.' },
              wisa: { name: 'Wisa', desc: 'SaaS platform showcasing a modern, high-performance user interface.' },
              astraia: { name: 'AstraIA', desc: 'Intelligent AI-driven interface designed for advanced tech interactions.' },
              watchweb: { name: 'WatchWeb', desc: 'Media streaming web application with a sleek and dynamic layout.' },
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
            description: 'Desarrollador Frontend enfocado en la construcción de aplicaciones web modernas, responsivas y visualmente pulidas utilizando React y tecnologías modernas de JavaScript. Experimentado en la creación de landing pages, interfaces SaaS, dashboards y experiencias de usuario interactivas con fuerte atención al diseño de interfaz, rendimiento y escalabilidad. Actualmente evolucionando hacia un rol Fullstack mientras expando mis conocimientos en desarrollo backend y arquitecturas web modernas.',
            exp_title: 'Experiencia',
            experiences: {
              onlydust: {
                role: 'Colaborador Open Source',
                company: 'OnlyDust',
                date: 'Sept. 2024 - Presente',
                desc: 'Contribución en repositorios de código abierto de alto impacto. Enfocado en la implementación de nuevas funcionalidades, optimización de código y resolución de problemas complejos.'
              },
              freelance: {
                role: 'Desarrollador Frontend',
                company: 'Freelance & Proyectos Personales',
                date: '2024 - Presente',
                desc: 'Desarrollé y diseñé múltiples aplicaciones web modernas e interfaces interactivas para diferentes productos y conceptos digitales. Los proyectos incluyen AstraIA, una interfaz futurista inspirada en IA enfocada en una experiencia de usuario inmersiva; Wisa, una plataforma estilo SaaS con arquitectura de UI moderna y diseños responsivos; y NexCrypto, un concepto de dashboard cripto construido con componentes visuales dinámicos y sistemas de diseño inspirados en tiempo real. Enfocado en el desarrollo responsivo, estructuras de componentes reutilizables, animaciones fluidas y arquitectura frontend escalable utilizando React y ecosistemas modernos de JavaScript.'
              }
            },
            edu_utn: 'Programa de Desarrollo FullStack · 2024',
            edu_fcc: 'Certificación en Diseño Web Responsivo y JavaScript',
            tech_stack: 'Tecnologías',
            categories: {
              frontend: 'Frontend',
              backend: 'Backend',
              tools: 'Herramientas',
              learning: 'Aprendiendo'
            },
            badges: {
              stack: 'STACK',
              tools: 'HERRAMIENTAS',
              progress: 'EN PROGRESO'
            },
            skills: {
              react: { name: 'React', desc: 'Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.' },
              nextjs: { name: 'Next.js', desc: 'Framework de React con renderizado del lado del servidor, generación de sitios estáticos y optimización.' },
              typescript: { name: 'TypeScript', desc: 'Lenguaje de programación tipado que se compila a JavaScript, mejorando el desarrollo a escala.' },
              javascript: { name: 'JavaScript', desc: 'Lenguaje de programación principal de la web moderna que permite interfaces interactivas.' },
              html: { name: 'HTML5', desc: 'Lenguaje de marcado estándar para la estructura y creación de páginas web.' },
              css: { name: 'CSS3', desc: 'Lenguaje de hojas de estilo utilizado para describir la presentación de documentos web.' },
              tailwind: { name: 'Tailwind CSS', desc: 'Framework de CSS basado en clases de utilidad para el diseño rápido y limpio de interfaces.' },
              nodejs: { name: 'Node.js', desc: 'Entorno de ejecución de JavaScript multiplataforma para el desarrollo backend y scripting.' },
              express: { name: 'Express', desc: 'Framework web minimalista para Node.js diseñado para construir APIs robustas.' },
              mongodb: { name: 'MongoDB', desc: 'Base de datos NoSQL documental y orientada a objetos.' },
              vercel: { name: 'Vercel', desc: 'Plataforma en la nube optimizada para desplegar sitios estáticos y aplicaciones de React/Next.js.' },
              git: { name: 'Git', desc: 'Sistema de control de versiones distribuido para rastrear cambios en el código fuente.' },
              github: { name: 'GitHub', desc: 'Plataforma en la nube para alojar repositorios Git y colaborar en equipo.' },
              terminal: { name: 'Terminal', desc: 'Interfaz de línea de comandos para ejecutar instrucciones de consola y automatizar tareas.' },
              npm: { name: 'NPM', desc: 'Gestor de paquetes predeterminado para el entorno de ejecución Node.js.' },
              python: { name: 'Python', desc: 'Lenguaje de programación interpretado de alto nivel con un enfoque en legibilidad del código.' },
              docker: { name: 'Docker', desc: 'Plataforma para diseñar, construir y desplegar aplicaciones utilizando contenedores aislados.' }
            }
          },
          projects: {
            section_title: 'Proyectos',
            section_subtitle: 'Destacados',
            drag_hint: '<- Desliza para explorar ->',
            github: 'Codigo',
            live: 'Demo en vivo',
            load_interactive: 'Cargar vista interactiva',
            items: {
              securify: { name: 'Securify', desc: 'Interfaz de autenticación segura con un diseño limpio y moderno.' },
              wisa: { name: 'Wisa', desc: 'Plataforma SaaS que destaca por una interfaz de usuario moderna y de alto rendimiento.' },
              astraia: { name: 'AstraIA', desc: 'Interfaz inteligente impulsada por IA diseñada para interacciones tecnológicas avanzadas.' },
              watchweb: { name: 'WatchWeb', desc: 'Aplicación web de streaming multimedia con un diseño elegante y dinámico.' },
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
