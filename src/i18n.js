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
            role: 'Frontend Web Developer | Open to Remote Opportunities',
            cta_projects: 'View Projects',
            cta_about: 'About Me'
          },
          info: {
            status: 'OPEN TO WORK',
            title_p1: 'Professional',
            title_p2: 'Profile',
            description: 'Frontend Web Developer specializing in creating high-converting websites, modern landing pages, SaaS interfaces, and interactive web applications using React, Next.js, and TypeScript. Focused on delivering premium UI design, fast loading speeds, responsive layouts, and outstanding user experiences tailored for businesses and commercial products.',
            exp_title: 'Experience',
            experiences: {
              estudioms: {
                role: 'Web Developer (Commercial Client)',
                company: 'Estudio MS (Paid Commercial Project)',
                date: '2024 - Production',
                desc: 'Full development of a commercial production website and client intake portal for a professional accounting firm. Implemented clean corporate design, interactive service showcase, lead ingestion, and WhatsApp API integration.'
              },
              freelance: {
                role: 'Frontend Developer',
                company: 'Freelance & Personal Projects',
                date: '2024 - Present',
                desc: 'Designed and engineered modern web applications and digital interfaces for commercial concepts and clients. Developed tailored web products including CoffeeWeb (gourmet coffee landing & e-commerce), ASTRA (astronomy web application), WatchWeb (luxury watch e-commerce store), Elite Store (premium fashion e-commerce), Constru-Tech (industrial corporate web app), and KINETIC COURT (basketball sportswear e-commerce store). Focused on responsive layout systems, component design, and optimal load performance.'
              },
              onlydust: {
                role: 'Open Source Contributor',
                company: 'OnlyDust',
                date: 'Sept. 2024 - Present',
                desc: 'Contributing to high-impact open-source repositories. Focused on implementing new features, code optimization, and resolving complex issues to enhance system efficiency and stability.'
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
            section_subtitle: 'Web Solutions',
            description: 'Specialized Frontend web applications, commercial client websites, e-commerce storefronts, and interactive web interfaces built for businesses.',
            projects_count: 'FRONTEND PORTFOLIO / 2024—2026',
            categories: {
              all: 'All Projects',
              websites: 'Commercial Websites',
              ecommerce: 'E-Commerce Stores',
              interactive: 'Interactive Web Apps'
            },
            cta: {
              badge: 'AVAILABLE FOR NEW WEB PROJECTS',
              title: 'Ready to elevate your business with a modern website?',
              subtitle: 'I turn designs and ideas into high-converting, high-performance web applications optimized for search engines, lightning fast, and built to get clients.',
              button: "Let's Connect on LinkedIn",
              features: {
                f1: 'Custom Web Design',
                f2: 'Lightning Fast Load',
                f3: 'SEO & High Conversion',
                f4: 'WhatsApp API Integration'
              }
            },
            more_title: 'Explore',
            more_subtitle: 'Frontend Work',
            github: 'Source Code',
            live: 'Live Site',
            items: {
              ms: { name: 'Estudio MS', subtitle: 'Paid Commercial Client Site · Corporate Portal', desc: 'Production website and client intake portal developed for a professional accounting firm. Features clean corporate UI, service showcase, and WhatsApp lead ingestion.' },
              coffeeweb: { name: 'CoffeeWeb', subtitle: 'Gourmet Coffee Landing & E-Commerce Catalog', desc: 'High-converting specialty coffee web application featuring interactive product menus, cart drawer UI, smooth scroll sections, and modern visual branding.' },
              astra: { name: 'ASTRA', subtitle: 'Astronomy & Space Exploration Web Application', desc: 'Interactive web application dedicated to astronomy and space exploration. Features detailed information about Planet Earth, cosmic data, and space telemetry in a modern interface.' },
              watchweb: { name: 'WatchWeb', subtitle: 'Luxury Watch E-Commerce Online Store', desc: 'E-commerce web store specialized in luxury timepieces and fine accessories. Features exclusive product catalog, shopping cart drawer, detailed product cards, and sleek dark mode aesthetics.' },
              elitestore: { name: 'Elite Store', subtitle: 'Premium Fashion & Lifestyle E-Commerce UI', desc: 'Modern fashion e-commerce storefront featuring product filtering, interactive shopping bag drawer, sleek visual cards, and high-conversion checkout UI.' },
              construtech: { name: 'Constru-Tech', subtitle: 'Industrial & Construction Corporate Web App', desc: 'Robust industrial corporate website featuring service galleries, project portfolio showcase, client quotation intake form, and responsive design.' },
              kineticcourt: { name: 'KINETIC COURT', subtitle: 'Basketball Sportswear & Sneakers E-Commerce Store', desc: 'E-commerce web store dedicated to basketball apparel and athletic sneakers. Features interactive product catalog, shopping cart drawer, size selector, and bold athletic typography.' }
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
            role: 'Desarrollador web frontend | Abierto a Oportunidades Remotas',
            cta_projects: 'Ver Proyectos',
            cta_about: 'Sobre Mi'
          },
          info: {
            status: 'DISPONIBLE PARA TRABAJAR',
            title_p1: 'Perfil',
            title_p2: 'Profesional',
            description: 'Desarrollador Web Frontend enfocado en crear sitios web modernos, landing pages de alta conversión, interfaces SaaS y aplicaciones web interactivas utilizando React, Next.js y TypeScript. Especializado en diseño de interfaz premium, velocidad de carga óptima, maquetación responsiva y experiencias digitales enfocadas en potenciar marcas y productos comerciales.',
            exp_title: 'Experiencia',
            experiences: {
              estudioms: {
                role: 'Desarrollador Web (Cliente Comercial)',
                company: 'Estudio MS (Proyecto Comercial Pago)',
                date: '2024 - Producción',
                desc: 'Desarrollo integral de sitio web comercial en producción y portal interactivo para estudio contable profesional. Implementación de diseño corporativo moderno, catálogo interactivo de servicios, captura de leads e integración con WhatsApp API.'
              },
              freelance: {
                role: 'Desarrollador Frontend',
                company: 'Freelance & Proyectos Personales',
                date: '2024 - Presente',
                desc: 'Desarrollo y diseño de aplicaciones web modernas e interfaces digitales para clientes y proyectos destacados. Desarrollo de soluciones personalizadas como CoffeeWeb (landing gourmet & e-commerce de café), ASTRA (plataforma web de astronomía y espacio), WatchWeb (tienda e-commerce de relojes de lujo), Elite Store (tienda e-commerce de moda), Constru-Tech (plataforma web industrial) y KINETIC COURT (tienda e-commerce de ropa deportiva de básquetbol). Enfocado en maquetación responsiva, componentes reutilizables y alta velocidad de carga.'
              },
              onlydust: {
                role: 'Colaborador Open Source',
                company: 'OnlyDust',
                date: 'Sept. 2024 - Presente',
                desc: 'Contribución en repositorios de código abierto de alto impacto. Enfocado en la implementación de nuevas funcionalidades, optimización de código y resolución de problemas complejos.'
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
            section_title: 'Soluciones',
            section_subtitle: 'Web Destacadas',
            description: 'Aplicaciones web Frontend especializadas, sitios web comerciales para clientes, tiendas e-commerce e interfaces digitales interactivas.',
            projects_count: 'PORTFOLIO FRONTEND / 2024—2026',
            categories: {
              all: 'Todos los Proyectos',
              websites: 'Sitios Web Comerciales',
              ecommerce: 'Tiendas E-Commerce',
              interactive: 'Aplicaciones Interactivas'
            },
            cta: {
              badge: 'DISPONIBLE PARA NUEVOS PROYECTOS WEB',
              title: '¿Impulsamos tu negocio con una página web moderna?',
              subtitle: 'Transformo diseños e ideas en aplicaciones web de alta conversión y alto rendimiento, optimizadas para Google, ultra rápidas y listas para captar clientes.',
              button: 'Hablar por LinkedIn',
              features: {
                f1: 'Desarrollo Web a Medida',
                f2: 'Carga Ultra Rápida',
                f3: 'SEO & Alta Conversión',
                f4: 'Integración WhatsApp Directa'
              }
            },
            more_title: 'Explorar',
            more_subtitle: 'Trabajos Frontend',
            github: 'Código Fuente',
            live: 'Demo en vivo',
            items: {
              ms: { name: 'Estudio MS', subtitle: 'Sitio Web Comercial Pago · Portal para Clientes', desc: 'Sitio web en producción comercial y portal de captura para firma contable profesional. Incluye diseño corporativo limpio, catálogo interactivo e integración directa con WhatsApp.' },
              coffeeweb: { name: 'CoffeeWeb', subtitle: 'Landing Gourmet de Café & Tienda E-Commerce', desc: 'Aplicación web para marca de café de especialidad con menú interactivo de productos, carrito emergente, secciones fluidas de scroll y diseño estético moderno.' },
              astra: { name: 'ASTRA', subtitle: 'Plataforma Web de Astronomía & Exploración Espacial', desc: 'Aplicación web interactiva dedicada a la astronomía y la exploración espacial. Muestra información detallada del planeta Tierra, datos espaciales y visuales cósmicos en una interfaz moderna.' },
              watchweb: { name: 'WatchWeb', subtitle: 'Tienda Web E-Commerce de Relojes de Lujo', desc: 'Plataforma web e-commerce de relojería fina y accesorios de lujo. Incluye catálogo de modelos exclusivos, carrito de compras emergente, fichas detalladas de producto y diseño oscuro elegante.' },
              elitestore: { name: 'Elite Store', subtitle: 'Tienda E-Commerce de Moda & Estilo de Vida', desc: 'Tienda online de moda con filtrado de productos, carrito de compras interactivo, tarjetas de presentación modernas e interfaz enfocada en conversión.' },
              construtech: { name: 'Constru-Tech', subtitle: 'Aplicación Web Corporativa para Construcción', desc: 'Plataforma web corporativa para el sector industrial con galería de servicios, portfolio de obras finalizadas, formulario de presupuesto y diseño adaptable.' },
              kineticcourt: { name: 'KINETIC COURT', subtitle: 'Tienda E-Commerce de Ropa & Calzado de Básquetbol', desc: 'Tienda web e-commerce de indumentaria deportiva y calzado especializado de básquetbol. Incluye catálogo interactivo de prendas, sistema de carrito de compras, selección de tallas y tipografía editorial audaz.' }
            }
          },
          footer: {
            dev_by: 'Diseñado y Desarrollado por mi.',
            location: 'Desde'
          }
        }
      }
    }
  });

export default i18n;
