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
                desc: 'Designed and engineered modern web applications and digital interfaces for commercial clients and business concepts. Developed tailored web products including Estudio MS (corporate accounting portal), Luxe Parfum (luxury perfume store), Lex & Associates (law firm web app), Apex Real Estate (property portal), and Constru-Tech (industrial corporate web app). Focused on responsive layout systems, component design, and optimal load performance.'
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
              ecommerce: 'E-Commerce Stores'
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
              perfumeria: { name: 'Perfumería — E-Commerce Premium', subtitle: 'Luxury Perfume E-Commerce Storefront', desc: 'Conceptual e-commerce platform developed for a perfume brand, combining an editorial and elegant aesthetic with a modern shopping experience. The design focuses on products and brand visual identity, incorporating a catalog, categories, and an accessible shopping cart to simplify checkout.' },
              abogado: { name: 'Estudio Jurídico — Web Institucional', subtitle: 'Law Firm & Legal Advisory Corporate Portal', desc: 'Institutional website developed for a law firm, focused on conveying professionalism, trust, and clarity from the first point of contact. The interface organizes legal services and professional information intuitively, incorporating calls to action and contact forms to facilitate communication with potential clients.' },
              realestate: { name: 'Real Estate — Plataforma Inmobiliaria', subtitle: 'Luxury Property & Real Estate Showcase', desc: 'Real estate platform designed to offer a modern and visual property search experience. The project combines a premium presentation of properties with intuitive navigation, highlighting listings, exploring relevant details, and generating a buyer-oriented experience.' },
              construtech: { name: 'Constru-Tech', subtitle: 'Industrial & Construction Corporate Web App', desc: 'Robust industrial corporate website featuring service galleries, project portfolio showcase, client quotation intake form, and responsive design.' }
            }
          },
          pricing: {
            badge: 'PRICING & WEB SERVICES SCOPE',
            section_title: 'Plans &',
            section_subtitle: 'Web Services',
            description: 'Clear, transparent packages designed as a professional starting point. Prices serve as a baseline and adapt to your project scope.',
            popular_badge: 'RECOMMENDED',
            cta_button: 'Inquire Plan',
            time_label: 'Estimated time',
            includes_title: 'Includes',
            ideal_title: 'Ideal for',
            custom_quote: 'Need a custom web project or additional features? Contact me for a tailored proposal.',
            main_message: 'I build modern, fast, and results-oriented websites for companies, professionals, and businesses.',
            plans: {
              starter: {
                name: 'STARTER',
                badge: 'STARTER',
                tagline: 'Professional Landing Page to launch your web presence',
                price: 'USD 250',
                price_suffix: 'starting price',
                time: '5–7 business days',
                ideal: 'Freelancers, entrepreneurs, local services & product launches',
                features: [
                  'Custom Landing Page (up to 6 sections)',
                  'Responsive design (desktop, tablet & mobile)',
                  'Hero Section + Business presentation',
                  'Featured services/products + Benefits',
                  'Testimonials + Call to Action (CTA)',
                  'Contact form + WhatsApp direct button',
                  'Social media integration + Semantic HTML',
                  'Basic technical SEO & speed optimization',
                  'Deployment & source code + 1 modification round'
                ]
              },
              business: {
                name: 'BUSINESS',
                badge: 'CORPORATE',
                tagline: 'Multi-page Corporate Website built to generate client inquiries',
                price: 'USD 500',
                price_suffix: 'starting price',
                time: '10–15 business days',
                ideal: 'SMBs, companies, law/accounting firms, real estate & clinics',
                features: [
                  'Multi-page corporate website (up to 5 main pages)',
                  'Home, Services, About Us, Contact & FAQ',
                  'Custom UI design & intuitive navigation architecture',
                  'Contact forms + WhatsApp, Social & Google Maps',
                  'Technical SEO (Meta titles, descriptions & semantic structure)',
                  'Smooth scroll animations & UI micro-interactions',
                  'Google Analytics & Google Search Console setup',
                  'Deployment, full source code & 2 revision rounds',
                  '30 days post-launch support included'
                ]
              },
              ecommerce: {
                name: 'E-COMMERCE',
                badge: 'ONLINE STORE',
                tagline: 'Full Online Store or Web App tailored for commercial sales',
                price: 'From USD 900',
                price_suffix: 'starting price',
                time: '3–5 weeks',
                ideal: 'Stores, brands, commercial catalogs & online sellers',
                features: [
                  'Custom UI design & responsive shopping layout',
                  'Home, product catalog, categories, filters & search',
                  'Individual product pages + Shopping cart drawer',
                  'Checkout flow & payment gateway integration',
                  'Contact forms + WhatsApp & Social media integration',
                  'Basic product management setup',
                  'Technical SEO & load performance optimization',
                  'Deployment, initial setup, full source code & 2 revisions',
                  '30 days post-launch support included'
                ]
              }
            },
            addons: {
              title: 'ADDITIONAL SERVICES',
              maintenance: 'Maintenance (Content updates, visual edits, bug fixes & technical support)',
              seo: 'SEO (Technical SEO, meta optimization, semantic hierarchy & performance)',
              integrations: 'Integrations (External APIs, WhatsApp, Google Maps, Analytics & Payments)',
              advanced: 'Advanced Features (User logins, admin panels, databases & automations)'
            },
            terms: {
              title: 'COMMERCIAL TERMS',
              pricing_rule: 'Published prices serve as an initial baseline. Custom scope receives a tailored quote.',
              payment_terms: 'Payment structure: 50% deposit to start + 50% before launch (Large projects: 40% / 30% / 30%).',
              revisions: 'Includes specified modification rounds per plan. Extra features are quoted separately.',
              hosting: 'Domain registration, hosting, and paid third-party services are paid separately.'
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
                desc: 'Desarrollo y diseño de aplicaciones web modernas e interfaces digitales para clientes y proyectos destacados. Desarrollo de soluciones personalizadas como Estudio MS (portal contable en producción), Perfumería (e-commerce premium), Estudio Jurídico (web institucional), Real Estate (plataforma inmobiliaria) y Constru-Tech (plataforma industrial). Enfocado en maquetación responsiva, componentes reutilizables y alta velocidad de carga.'
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
            description: 'Sitios web comerciales para clientes, tiendas e-commerce e interfaces digitales de alto impacto.',
            projects_count: 'PORTFOLIO FRONTEND / 2024—2026',
            categories: {
              all: 'Todos los Proyectos',
              websites: 'Sitios Web Comerciales',
              ecommerce: 'Tiendas E-Commerce'
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
              perfumeria: { name: 'Perfumería — E-Commerce Premium', subtitle: 'Tienda E-Commerce de Perfumería & Fragancias de Lujo', desc: 'E-commerce conceptual desarrollado para una marca de perfumería, combinando una estética editorial y elegante con una experiencia de compra moderna. El diseño pone el foco en los productos y la identidad visual de la marca, incorporando catálogo, categorías y un carrito de compras accesible para simplificar el proceso de compra.' },
              abogado: { name: 'Estudio Jurídico — Web Institucional', subtitle: 'Portal Web Corporativo para Firma Legal & Abogados', desc: 'Sitio web institucional desarrollado para un estudio jurídico, enfocado en transmitir profesionalismo, confianza y claridad desde el primer contacto. La interfaz organiza los servicios legales y la información profesional de forma intuitiva, incorporando llamados a la acción y formularios de contacto para facilitar la comunicación con potenciales clientes.' },
              realestate: { name: 'Real Estate — Plataforma Inmobiliaria', subtitle: 'Plataforma Web de Bienes Raíces & Real Estate', desc: 'Plataforma inmobiliaria diseñada para ofrecer una experiencia moderna y visual en la búsqueda de propiedades. El proyecto combina una presentación premium de los inmuebles con una navegación intuitiva, permitiendo destacar propiedades, explorar información relevante y generar una experiencia orientada a potenciales compradores y clientes.' },
              construtech: { name: 'Constru-Tech', subtitle: 'Aplicación Web Corporativa para Construcción', desc: 'Plataforma web corporativa para el sector industrial con galería de servicios, portfolio de obras finalizadas, formulario de presupuesto y diseño adaptable.' }
            }
          },
          pricing: {
            badge: 'PRICING & ALCANCE DE SERVICIOS WEB',
            section_title: 'Planes &',
            section_subtitle: 'Precios Web',
            description: 'Paquetes claros y transparentes diseñados como punto de partida profesional. El precio final se adapta al alcance y complejidad de cada proyecto.',
            popular_badge: 'MÁS RECOMENDADO',
            cta_button: 'Consultar Plan',
            time_label: 'Tiempo estimado',
            includes_title: 'Incluye',
            ideal_title: 'Ideal para',
            custom_quote: '¿Necesitás un desarrollo a medida o funcionalidades adicionales? Contáctame para armar una propuesta personalizada.',
            main_message: 'Desarrollo sitios web modernos, rápidos y orientados a resultados para empresas, profesionales y negocios.',
            plans: {
              starter: {
                name: 'STARTER',
                badge: 'STARTER',
                tagline: 'Landing Page Profesional para lanzar tu presencia digital',
                price: 'USD 250',
                price_suffix: 'precio inicial',
                time: '5–7 días hábiles',
                ideal: 'Profesionales, emprendedores, pequeños negocios, servicios locales y campañas',
                features: [
                  'Landing Page personalizada (hasta 6 secciones)',
                  'Diseño responsive (desktop, tablet y mobile)',
                  'Sección Hero + Presentación del negocio',
                  'Servicios o productos destacados + Beneficios',
                  'Testimonios + Llamada a la acción (CTA)',
                  'Formulario de contacto + Botón de WhatsApp',
                  'Integración con redes sociales + HTML semántico',
                  'SEO técnico básico y optimización de velocidad',
                  'Deployment y código fuente + 1 ronda de modificaciones'
                ]
              },
              business: {
                name: 'BUSINESS',
                badge: 'CORPORATIVO',
                tagline: 'Sitio Web Corporativo multipágina orientado a generar consultas',
                price: 'USD 500',
                price_suffix: 'precio inicial',
                time: '10–15 días hábiles',
                ideal: 'Pymes, empresas, estudios profesionales, consultoras, inmobiliarias y clínicas',
                features: [
                  'Sitio web multipágina (hasta 5 páginas principales)',
                  'Home profesional, Servicios, Nosotros, Contacto y FAQ',
                  'Diseño UI personalizado y arquitectura de navegación',
                  'Formularios de contacto + WhatsApp, Redes & Google Maps',
                  'SEO técnico (Meta titles, descriptions y estructura semántica)',
                  'Animaciones, microinteracciones y scroll animado',
                  'Configuración de Google Analytics & Google Search Console',
                  'Deployment, código fuente y 2 rondas de modificaciones',
                  '30 días de soporte post-lanzamiento incluidos'
                ]
              },
              ecommerce: {
                name: 'E-COMMERCE',
                badge: 'TIENDA ONLINE',
                tagline: 'Tienda Online o Web App para vender productos y servicios por internet',
                price: 'Desde USD 900',
                price_suffix: 'según alcance',
                time: '3–5 semanas',
                ideal: 'Tiendas, marcas, emprendimientos, catálogos comerciales y ventas online',
                features: [
                  'Diseño UI personalizado y adaptativo',
                  'Home, catálogo de productos, categorías, filtros y buscador',
                  'Página individual de producto + Carrito de compras',
                  'Checkout e integración con pasarela de pagos',
                  'Formularios, WhatsApp y redes sociales',
                  'Gestión básica de productos',
                  'SEO técnico y optimización de rendimiento',
                  'Deployment, configuración inicial, código fuente y 2 rondas',
                  '30 días de soporte post-lanzamiento incluidos'
                ]
              }
            },
            addons: {
              title: 'SERVICIOS ADICIONALES',
              maintenance: 'Mantenimiento (Actualización de contenido, cambios visuales, corrección de errores y soporte)',
              seo: 'SEO (SEO técnico, optimización de páginas, meta titles/descriptions y Search Console)',
              integrations: 'Integraciones (APIs externas, WhatsApp, Google Maps, Analytics y sistemas de pago)',
              advanced: 'Funcionalidades avanzadas (Login/registro, panel administrativo, base de datos y automatizaciones)'
            },
            terms: {
              title: 'CONDICIONES COMERCIALES',
              pricing_rule: 'Los precios son un punto de partida y se adaptan según el alcance real del proyecto.',
              payment_terms: 'Forma de pago: 50% para comenzar + 50% antes del lanzamiento (Proyectos grandes: 40% / 30% / 30%).',
              revisions: 'Cada paquete incluye rondas de modificaciones especificadas. Cambios extra se cotizan por separado.',
              hosting: 'El dominio, hosting y servicios externos pagos se presupuestan por separado.'
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
