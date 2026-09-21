import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaRocket, FaStar, FaStore, FaClock, FaWhatsapp, FaLinkedin, FaTools, FaSearch, FaPlug, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import gsap from 'gsap';

const themePalette = {
  dark: {
    sectionBg: 'transparent',
    panelBg: '#050505',
    title: '#ffffff',
    body: '#cbd5e1',
    hint: '#94a3b8',
    borderCol: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(59, 130, 246, 0.4)',
    accentLink: '#3b82f6',
    cardBg: 'rgba(255, 255, 255, 0.02)',
    featuredBg: 'radial-gradient(circle at 50% 0%, rgba(91, 66, 243, 0.2) 0%, rgba(5, 5, 5, 0.98) 100%)',
    featuredBorder: 'rgba(147, 51, 234, 0.5)'
  },
  light: {
    sectionBg: 'transparent',
    panelBg: '#ffffff',
    title: '#0f172a',
    body: '#334155',
    hint: '#64748b',
    borderCol: 'rgba(0, 0, 0, 0.08)',
    borderHover: 'rgba(59, 130, 246, 0.4)',
    accentLink: '#2563eb',
    cardBg: '#ffffff',
    featuredBg: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
    featuredBorder: 'rgba(91, 66, 243, 0.4)'
  }
};

const Pricing = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const colors = themePalette[theme] || themePalette.dark;
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.18, ease: 'power3.out' }
      );
    }
  }, []);

  const handleCardMouseEnter = (el, isPopular) => {
    if (!el || isMobile) return;
    gsap.to(el, {
      scale: isPopular ? 1.035 : 1.02,
      y: isPopular ? -14 : -8,
      duration: 0.35,
      ease: 'power2.out'
    });
  };

  const handleCardMouseLeave = (el, isPopular) => {
    if (!el || isMobile) return;
    gsap.to(el, {
      scale: 1,
      y: isPopular ? -10 : 0,
      duration: 0.35,
      ease: 'power2.out'
    });
  };

  const plans = [
    {
      key: 'starter',
      icon: FaRocket,
      accent: '#3b82f6',
      badge: 'STARTER',
      isPopular: false,
      whatsappMsg: 'Hola!%20Me%20interesa%20consultar%20por%20el%20paquete%20STARTER%20(USD%20250)%20de%20Landing%20Page'
    },
    {
      key: 'business',
      icon: FaStar,
      accent: '#8b5cf6',
      badge: t('pricing.popular_badge'),
      isPopular: true,
      whatsappMsg: 'Hola!%20Me%20interesa%20consultar%20por%20el%20paquete%20BUSINESS%20(USD%20500)%20de%20Sitio%20Web%20Corporativo'
    },
    {
      key: 'ecommerce',
      icon: FaStore,
      accent: '#ec4899',
      badge: 'E-COMMERCE',
      isPopular: false,
      whatsappMsg: 'Hola!%20Me%20interesa%20consultar%20por%20el%20paquete%20E-COMMERCE%20(Desde%20USD%20900)'
    }
  ];

  return (
    <section
      id="pricing"
      style={{
        padding: isMobile ? '4rem 0' : '7.5rem 0',
        backgroundColor: colors.sectionBg,
        position: 'relative'
      }}
    >
      {/* CABECERA DE LA SECCIÓN DE PRECIOS */}
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
          {t('pricing.badge')}
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
          {t('pricing.section_title')} <span style={{
            background: 'linear-gradient(135deg, #00DDEB, #5B42F3, #AF40FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>{t('pricing.section_subtitle')}</span>
        </h2>

        <p style={{
          color: colors.hint,
          fontSize: isMobile ? '0.95rem' : '1.15rem',
          marginTop: '15px',
          maxWidth: '720px',
          margin: '15px auto 0',
          lineHeight: '1.6'
        }}>
          {t('pricing.description')}
        </p>
      </div>

      {/* GRILLA DE PLANES (3 COLUMNAS ANCHAS) */}
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '2rem' : '2.5rem',
          alignItems: 'stretch'
        }}>
          {plans.map((plan, i) => {
            const PlanIcon = plan.icon;
            const planData = t(`pricing.plans.${plan.key}`, { returnObjects: true }) || {};
            const features = Array.isArray(planData.features) ? planData.features : [];

            return (
              <div
                key={plan.key}
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseEnter={(e) => handleCardMouseEnter(e.currentTarget, plan.isPopular)}
                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget, plan.isPopular)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '30px',
                  padding: isMobile ? '2.2rem 1.6rem' : '3.2rem 2.6rem',
                  boxSizing: 'border-box',
                  backgroundColor: plan.isPopular ? colors.sectionBg : colors.cardBg,
                  background: plan.isPopular ? colors.featuredBg : colors.cardBg,
                  border: plan.isPopular ? `2px solid ${plan.accent}` : `1px solid ${colors.borderCol}`,
                  boxShadow: plan.isPopular
                    ? `0 20px 50px rgba(139, 92, 246, 0.25)`
                    : `0 10px 30px rgba(0,0,0,0.05)`,
                  transform: plan.isPopular && !isMobile ? 'translateY(-10px)' : 'none',
                  willChange: 'transform, opacity'
                }}
              >
                {/* BADGE DESTACADO PARA PLAN POPULAR */}
                {plan.isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00DDEB, #5B42F3)',
                    color: '#ffffff',
                    padding: '6px 18px',
                    borderRadius: '100px',
                    fontSize: '0.7rem',
                    fontWeight: '900',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 15px rgba(91, 66, 243, 0.5)',
                    whiteSpace: 'nowrap'
                  }}>
                    ★ {plan.badge}
                  </div>
                )}

                <div>
                  {/* CABECERA DEL PLAN */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: `${plan.accent}1a`,
                      border: `1px solid ${plan.accent}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: plan.accent
                    }}>
                      <PlanIcon size={22} />
                    </div>
                    {!plan.isPopular && (
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: '800',
                        letterSpacing: '1.5px',
                        color: plan.accent,
                        backgroundColor: `${plan.accent}14`,
                        padding: '4px 12px',
                        borderRadius: '100px'
                      }}>
                        {planData.badge || plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: colors.title,
                    margin: '0 0 0.4rem 0',
                    letterSpacing: '-0.5px'
                  }}>
                    {planData.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: colors.hint,
                    lineHeight: '1.5',
                    minHeight: '44px',
                    margin: '0 0 1.4rem 0'
                  }}>
                    {planData.tagline}
                  </p>

                  {/* PRECIO */}
                  <div style={{
                    marginBottom: '1.4rem',
                    borderBottom: `1px solid ${colors.borderCol}`,
                    paddingBottom: '1.6rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{
                        fontSize: isMobile ? '2.8rem' : '3.3rem',
                        fontWeight: '900',
                        color: colors.title,
                        letterSpacing: '-2px',
                        lineHeight: '1'
                      }}>
                        {planData.price}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      color: colors.hint,
                      display: 'block',
                      marginTop: '6px'
                    }}>
                      / {planData.price_suffix}
                    </span>
                  </div>

                  {/* TIEMPO ESTIMADO */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${colors.borderCol}`,
                    padding: '6px 14px',
                    borderRadius: '10px',
                    marginBottom: '1.4rem',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: colors.title
                  }}>
                    <FaClock style={{ color: plan.accent, fontSize: '0.85rem' }} />
                    <span>{planData.time}</span>
                  </div>

                  {/* IDEAL PARA */}
                  {planData.ideal && (
                    <div style={{ marginBottom: '1.4rem' }}>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        color: colors.hint,
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '4px'
                      }}>
                        {t('pricing.ideal_title')}
                      </span>
                      <p style={{
                        fontSize: '0.85rem',
                        color: colors.body,
                        margin: 0,
                        lineHeight: '1.45',
                        fontWeight: '600'
                      }}>
                        {planData.ideal}
                      </p>
                    </div>
                  )}

                  {/* CARACTERÍSTICAS INCLUIDAS */}
                  <div style={{ marginBottom: '2.2rem' }}>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: '800',
                      letterSpacing: '1px',
                      color: colors.hint,
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '12px'
                    }}>
                      {t('pricing.includes_title')}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      {features.map((feat, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <div style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: `${plan.accent}20`,
                            color: plan.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.65rem',
                            marginTop: '2px',
                            flexShrink: 0
                          }}>
                            <FaCheck />
                          </div>
                          <span style={{
                            fontSize: '0.88rem',
                            color: colors.body,
                            lineHeight: '1.45',
                            fontWeight: '500'
                          }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTÓN CTA WHATSAPP */}
                <a
                  href={`https://wa.me/?text=${plan.whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '0.95rem 1.5rem',
                    borderRadius: '100px',
                    background: plan.isPopular
                      ? 'linear-gradient(135deg, #00DDEB, #5B42F3)'
                      : 'transparent',
                    backgroundColor: plan.isPopular ? 'transparent' : `${plan.accent}14`,
                    border: plan.isPopular ? 'none' : `1.5px solid ${plan.accent}`,
                    color: plan.isPopular ? '#ffffff' : colors.title,
                    fontWeight: '800',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: plan.isPopular ? '0 10px 25px rgba(91, 66, 243, 0.4)' : 'none',
                    transition: 'all 0.25s ease',
                    boxSizing: 'border-box'
                  }}
                >
                  <FaWhatsapp size={18} /> {t('pricing.cta_button')}
                </a>
              </div>
            );
          })}
        </div>

        {/* SECCIÓN: SERVICIOS ADICIONALES */}
        <div style={{
          marginTop: isMobile ? '3.5rem' : '5rem',
          padding: isMobile ? '2rem 1.5rem' : '3rem 2.5rem',
          borderRadius: '28px',
          backgroundColor: colors.cardBg,
          border: `1px solid ${colors.borderCol}`
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: '900',
              letterSpacing: '2px',
              color: colors.accentLink,
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              {t('pricing.addons.title')}
            </span>
            <h3 style={{
              fontSize: isMobile ? '1.6rem' : '2.2rem',
              fontWeight: '900',
              color: colors.title,
              margin: 0,
              letterSpacing: '-1px'
            }}>
              Servicios & Funcionalidades Adicionales
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {[
              {
                icon: FaTools,
                color: '#3b82f6',
                title: 'Mantenimiento & Soporte Continuo',
                desc: t('pricing.addons.maintenance')
              },
              {
                icon: FaSearch,
                color: '#8b5cf6',
                title: 'SEO Técnico & Rendimiento Web',
                desc: t('pricing.addons.seo')
              },
              {
                icon: FaPlug,
                color: '#ec4899',
                title: 'Integraciones con APIs & Herramientas',
                desc: t('pricing.addons.integrations')
              },
              {
                icon: FaShieldAlt,
                color: '#10b981',
                title: 'Funcionalidades Avanzadas & Web Apps',
                desc: t('pricing.addons.advanced')
              }
            ].map((addon, idx) => {
              const AddonIcon = addon.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.2rem',
                    borderRadius: '18px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${colors.borderCol}`
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: `${addon.color}1a`,
                    border: `1px solid ${addon.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: addon.color,
                    flexShrink: 0
                  }}>
                    <AddonIcon size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: colors.title, margin: '0 0 0.3rem 0' }}>
                      {addon.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: colors.body, margin: 0, lineHeight: '1.5' }}>
                      {addon.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECCIÓN: CONDICIONES COMERCIALES */}
        <div style={{
          marginTop: '2rem',
          padding: isMobile ? '2rem 1.5rem' : '2.5rem 2.5rem',
          borderRadius: '28px',
          background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.12) 0%, rgba(5, 5, 5, 0.95) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <FaHandshake style={{ color: colors.accentLink, fontSize: '1.4rem' }} />
            <h4 style={{ fontSize: '1.2rem', fontWeight: '900', color: colors.title, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {t('pricing.terms.title')}
            </h4>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.2rem'
          }}>
            <div style={{ fontSize: '0.85rem', color: colors.body, lineHeight: '1.55' }}>
              <strong style={{ color: colors.title, display: 'block', marginBottom: '4px' }}>📌 Precios Transparentes:</strong>
              {t('pricing.terms.pricing_rule')}
            </div>
            <div style={{ fontSize: '0.85rem', color: colors.body, lineHeight: '1.55' }}>
              <strong style={{ color: colors.title, display: 'block', marginBottom: '4px' }}>💳 Forma de Pago:</strong>
              {t('pricing.terms.payment_terms')}
            </div>
            <div style={{ fontSize: '0.85rem', color: colors.body, lineHeight: '1.55' }}>
              <strong style={{ color: colors.title, display: 'block', marginBottom: '4px' }}>🌐 Dominio & Hosting:</strong>
              {t('pricing.terms.hosting')}
            </div>
          </div>
        </div>

        {/* CALLOUT PARA CONSULTAS DE PROYECTOS */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '24px',
          backgroundColor: colors.cardBg,
          border: `1px solid ${colors.borderCol}`,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '900', color: colors.title, margin: '0 0 0.3rem 0' }}>
              💬 {t('pricing.custom_quote')}
            </h4>
            <p style={{ fontSize: '0.9rem', color: colors.hint, margin: 0 }}>
              "{t('pricing.main_message')}"
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://www.linkedin.com/in/francisco-kacmajor-927a16195/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.8rem 1.8rem',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #00DDEB, #5B42F3)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '0.9rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 20px rgba(91, 66, 243, 0.35)'
              }}
            >
              <FaLinkedin size={18} /> Contactar por LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
