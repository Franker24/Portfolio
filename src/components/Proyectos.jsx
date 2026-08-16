import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBolt, FaChartLine, FaTrophy, FaCalculator, FaPlayCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const themePalette = {
  dark: {
    sectionBg: '#000000',
    panelBg: '#050505',
    previewShell: 'rgba(255, 255, 255, 0.02)',
    title: '#ffffff',
    body: '#cbd5e1',
    hint: '#94a3b8',
    mutedDot: '#525252',
    borderCol: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(59, 130, 246, 0.4)',
    tagBg: 'rgba(255, 255, 255, 0.04)',
    tagBorder: '1px solid rgba(255, 255, 255, 0.08)',
    linkColor: '#ffffff',
    accentLink: '#3b82f6',
    accentColor: '#3b82f6',
    cardBg: 'rgba(255, 255, 255, 0.02)',
    metaBg: 'rgba(255, 255, 255, 0.02)'
  },
  light: {
    sectionBg: '#f8fafc',
    panelBg: '#ffffff',
    previewShell: 'rgba(0, 0, 0, 0.02)',
    title: '#0f172a',
    body: '#334155',
    hint: '#64748b',
    mutedDot: '#9ca3af',
    borderCol: 'rgba(0, 0, 0, 0.08)',
    borderHover: 'rgba(59, 130, 246, 0.4)',
    tagBg: 'rgba(0, 0, 0, 0.04)',
    tagBorder: '1px solid rgba(0, 0, 0, 0.08)',
    linkColor: '#0f172a',
    accentLink: '#2563eb',
    accentColor: '#2563eb',
    cardBg: '#ffffff',
    metaBg: 'rgba(0, 0, 0, 0.02)'
  }
};

const featuredProjects = [
  {
    id: 'nexus',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Gemini 2.5', 'Multi-Agent', 'SSE'],
    github: 'https://github.com/Franker24/Nexus',
    demo: 'https://nexus-nine-bay.vercel.app',
    embed: 'https://nexus-nine-bay.vercel.app',
    hasArchitecture: true,
    architecture: ['User', 'Mission Control', 'Agent Orchestrator', 'Specialized Agents', 'Tool Gateway'],
    insideTheBuild: ['Autonomous Orchestration', 'Episodic Memory', 'Security Sandbox', 'SSE EventBus'],

  },
  {
    id: 'sentinel',
    tags: ['React', 'TypeScript', 'React Flow', 'Gemini 2.5', 'DataHub Protocol'],
    github: 'https://github.com/Franker24/SENTINEL-AI',
    demo: 'https://sentinel-ai-steel.vercel.app',
    embed: 'https://sentinel-ai-steel.vercel.app',
    hasArchitecture: true,
    architecture: ['Alert Stream', 'Lineage DAG Analyst', 'Diagnostic Swarm', 'SQL Remediation'],
    insideTheBuild: ['DAG Lineage Visuals', 'Incident Classification', 'dbt Remediation Engine'],

  },
  {
    id: 'billora',
    tags: ['React 19', 'TypeScript', 'Base UI', 'Recharts 3', 'Gemini API'],
    github: 'https://github.com/Franker24/Billora',
    demo: 'https://billora-tau.vercel.app',
    embed: 'https://billora-tau.vercel.app',
    hasArchitecture: false,
    insideTheBuild: ['Invoices Engine', 'Payments Management', 'Gemini Copilot Analytics'],

  },
  {
    id: 'ms',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Client Portal', 'Commercial Product'],
    github: 'https://github.com/Franker24/Estudio-ms',
    demo: 'https://estudio-ms.vercel.app',
    embed: 'https://estudio-ms.vercel.app',
    hasArchitecture: false,
    insideTheBuild: ['Paid Commercial Deployment', 'Interactive Services Showcase', 'Client Ingestion & WhatsApp Integration'],

  },
  {
    id: 'momentum',
    tags: ['React 19', 'Zustand', 'Firebase', 'Three.js', 'Google Maps'],
    github: 'https://github.com/Franker24/Momentum',
    demo: 'https://momentum-silk-six.vercel.app',
    embed: 'https://momentum-silk-six.vercel.app',
    hasArchitecture: false,
    insideTheBuild: ['Offline Caching', 'Firestore Synchronization', 'Visual 3D Mockups'],

  },
  {
    id: 'revrecover',
    tags: ['React 19', 'TypeScript', 'Express', 'Gemini API', 'Stripe Webhooks'],
    github: 'https://github.com/Franker24/RevRecover-AI',
    demo: 'https://rev-recover-ai.vercel.app',
    embed: 'https://rev-recover-ai.vercel.app',
    hasArchitecture: false,
    insideTheBuild: ['Forensic Churn Diagnostic', 'Dynamic Code Generator', 'Structured JSON Schemas'],

  }
];

const secondaryExperiments = [
  {
    id: 'securify',
    tags: ['TypeScript', 'Security', 'Auth UI'],
    github: 'https://github.com/Franker24/Securify',
    demo: 'https://securify-two.vercel.app',
    accent: '#ef4444',
    gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(153, 27, 27, 0.4) 100%)',
    icon: FaShieldAlt,
    category: 'SECURITY'
  },
  {
    id: 'wisa',
    tags: ['TypeScript', 'SaaS', 'Modern UI'],
    github: 'https://github.com/Franker24/Wisa',
    demo: 'https://wisa-neon.vercel.app',
    accent: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(91, 33, 182, 0.4) 100%)',
    icon: FaBolt,
    category: 'SAAS PLATFORM'
  },
  {
    id: 'nexcrypto',
    tags: ['React', 'Crypto', 'Dashboard UI'],
    github: 'https://github.com/Franker24/NexCrypto',
    demo: 'https://nex-crypto.vercel.app',
    accent: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(30, 64, 175, 0.4) 100%)',
    icon: FaChartLine,
    category: 'FINTECH & WEB3'
  },
  {
    id: 'kineticcourt',
    tags: ['TypeScript', 'Sports UI', 'Bold Visuals'],
    github: 'https://github.com/Franker24/KINETIC-COURT',
    demo: 'https://kinetic-court.vercel.app',
    accent: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.25) 0%, rgba(154, 52, 18, 0.4) 100%)',
    icon: FaTrophy,
    category: 'SPORTS & ANALYTICS'
  },
  {
    id: 'watchweb',
    tags: ['JavaScript', 'Media', 'Streaming UI'],
    github: 'https://github.com/Franker24/WatchWeb',
    demo: 'https://watch-web-gules.vercel.app',
    accent: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(30, 58, 138, 0.4) 100%)',
    icon: FaPlayCircle,
    category: 'STREAMING MEDIA'
  }
];

// Helper to render high-fidelity custom visual fallbacks for each project
const ProjectMockupUI = ({ projectId, isDark }) => {
  const textColor = isDark ? '#ffffff' : '#0f172a';
  const labelColor = isDark ? '#64748b' : '#64748b';
  const elementBg = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.04)';
  const borderStyle = `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`;

  switch (projectId) {
    case 'nexus':
      return (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: borderStyle, paddingBottom: '12px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#3b82f6', letterSpacing: '1px' }}>[NEXUS CORE ACTIVE]</span>
            <span style={{ fontSize: '0.65rem', color: '#10b981' }}>● SYSTEMS ONLINE</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {['Orchestrator', 'Diagnostic', 'Research'].map(agent => (
              <div key={agent} style={{ backgroundColor: elementBg, border: borderStyle, borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: textColor }}>{agent}</div>
                <div style={{ fontSize: '0.55rem', color: '#10b981', marginTop: '4px' }}>Agent Idle</div>
              </div>
            ))}
          </div>

          <div style={{ flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)', border: borderStyle, borderRadius: '12px', padding: '14px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '0.6rem', color: labelColor, fontFamily: 'monospace' }}>&gt; Initializing diagnostics swarm...</div>
            <div style={{ fontSize: '0.6rem', color: labelColor, fontFamily: 'monospace' }}>&gt; Incident severity evaluation: LOW</div>
            <div style={{ fontSize: '0.6rem', color: '#3b82f6', fontFamily: 'monospace' }}>&gt; Memory recall from episodic log #8321...</div>
            <div style={{ fontSize: '0.6rem', color: '#10b981', fontFamily: 'monospace' }}>&gt; Resolution tools generated. Pending approval.</div>
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', padding: '4px 10px', backgroundColor: '#3b82f6', borderRadius: '4px', fontSize: '0.55rem', fontWeight: '800', color: '#fff' }}>Awaiting Governance Approval</div>
          </div>
        </div>
      );

    case 'sentinel':
      return (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#10b981' }}>DATA GOVERNANCE LINEAGE</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
              <span style={{ fontSize: '0.55rem', color: '#ef4444', fontWeight: '700' }}>SLA RISK HIGH</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1, position: 'relative', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', zIndex: 2 }}>
              <div style={{ padding: '8px 12px', backgroundColor: elementBg, border: borderStyle, borderRadius: '6px', fontSize: '0.65rem', fontWeight: '700', color: textColor }}>Ingest DB</div>
              <div style={{ padding: '8px 12px', backgroundColor: elementBg, border: borderStyle, borderRadius: '6px', fontSize: '0.65rem', fontWeight: '700', color: textColor }}>Kafka Stream</div>
            </div>

            <div style={{ zIndex: 2, padding: '12px 16px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#10b981' }}>DAG ANALYST</div>
              <div style={{ fontSize: '0.55rem', color: labelColor, marginTop: '2px' }}>Gemini Core</div>
            </div>

            <div style={{ zIndex: 2, padding: '8px 12px', backgroundColor: elementBg, border: borderStyle, borderRadius: '6px', fontSize: '0.65rem', fontWeight: '700', color: textColor }}>Hotfix Patch</div>

            {/* Simulated graph lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
              <line x1="20%" y1="30%" x2="50%" y2="50%" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1.5" strokeDasharray="4" />
              <line x1="20%" y1="70%" x2="50%" y2="50%" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1.5" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#10b981" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case 'billora':
      return (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#8b5cf6' }}>BILLORA AI FINANCIALS</span>
            <span style={{ fontSize: '0.6rem', color: labelColor }}>Aug 2026</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flexGrow: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'stretch', gap: '10px' }}>
              <div style={{ flexGrow: 1, backgroundColor: elementBg, border: borderStyle, borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.55rem', color: labelColor }}>Monthly Revenue</span>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: textColor, margin: '2px 0' }}>$12,450.80</span>
                <span style={{ fontSize: '0.5rem', color: '#10b981' }}>↑ +14.2% from last month</span>
              </div>
              <div style={{ flexGrow: 1, backgroundColor: elementBg, border: borderStyle, borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.55rem', color: labelColor }}>Outstanding</span>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#8b5cf6', margin: '2px 0' }}>$2,105.00</span>
              </div>
            </div>

            {/* Custom SVG line chart */}
            <div style={{ backgroundColor: 'rgba(0,0,0,0.1)', border: borderStyle, borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.55rem', color: labelColor }}>Revenue Growth</span>
              <div style={{ flexGrow: 1, position: 'relative', marginTop: '10px' }}>
                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M0,45 Q20,30 40,35 T80,15 T100,5" fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
                  <path d="M0,45 Q20,30 40,35 T80,15 T100,5 L100,50 L0,50 Z" fill="url(#purpleGrad)" opacity="0.15" />
                  <defs>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.45rem', color: labelColor, marginTop: '4px' }}>
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'ms':
      return (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#10b981' }}>ESTUDIO MS FINANCIAL SUITE</span>
            <span style={{ fontSize: '0.55rem', color: '#10b981', fontWeight: '700', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '100px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>● CLIENT PAID PRODUCT</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '6px', padding: '10px' }}>
              <div style={{ fontSize: '0.5rem', color: labelColor }}>SERVICES ACTIVE</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#10b981' }}>Tax & Accounting</div>
            </div>
            <div style={{ backgroundColor: elementBg, border: borderStyle, borderRadius: '6px', padding: '10px' }}>
              <div style={{ fontSize: '0.5rem', color: labelColor }}>PRODUCTION STATUS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: textColor }}>LIVE ONLINE</div>
            </div>
          </div>

          <div style={{ flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.15)', border: borderStyle, borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.55rem', color: '#10b981', fontWeight: '700', fontFamily: 'monospace' }}>CLIENT ENGAGEMENT PIPELINE</span>
            <div style={{ fontSize: '0.55rem', color: labelColor, fontFamily: 'monospace', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              &gt; Direct Whatsapp API Integration & Lead Routing
            </div>
            <div style={{ fontSize: '0.55rem', color: '#10b981', fontFamily: 'monospace' }}>
              &gt; Custom corporate branding & responsive UI architecture
            </div>
          </div>
        </div>
      );

    case 'momentum':
      return (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#ec4899' }}>MOMENTUM FITNESS SAAS</span>
            <span style={{ fontSize: '0.55rem', color: '#10b981' }}>FIRESTORE SYNC ACTIVE</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px', flexGrow: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.55rem', color: labelColor }}>Active Training Programs</span>
              {['Hypertrophy Pro v2', 'Aerobic Threshold', 'Functional HIIT'].map((program, idx) => (
                <div key={program} style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', backgroundColor: elementBg, border: borderStyle, borderRadius: '6px', padding: '8px 12px' }}>
                  <span style={{ fontSize: '0.6rem', color: textColor, fontWeight: '700' }}>{program}</span>
                  <span style={{ fontSize: '0.5rem', color: idx === 0 ? '#ec4899' : labelColor }}>{idx === 0 ? 'Active' : 'Offline'}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: elementBg, border: borderStyle, borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '0.5rem', color: labelColor }}>BOOKING RATE</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#ec4899' }}>94.2%</div>
              <div style={{ fontSize: '0.45rem', color: '#10b981' }}>+8% vs last week</div>
            </div>
          </div>
        </div>
      );

    case 'revrecover':
      return (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#06b6d4' }}>REVRECOVER RISK MONITOR</span>
            <span style={{ fontSize: '0.55rem', color: '#ef4444' }}>ALERT: LEAKAGE DETECTED</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '6px', padding: '10px' }}>
              <div style={{ fontSize: '0.5rem', color: labelColor }}>MRR AT CHURN RISK</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ef4444' }}>$3,450.00</div>
            </div>
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '6px', padding: '10px' }}>
              <div style={{ fontSize: '0.5rem', color: labelColor }}>RECOVERED CAPITAL</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#10b981' }}>$2,820.00</div>
            </div>
          </div>

          <div style={{ flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.15)', border: borderStyle, borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '0.55rem', color: '#06b6d4', fontWeight: '700', fontFamily: 'monospace' }}>STRIPE AUTOPLAYBOOK WEBHOOK</span>
            <div style={{ fontSize: '0.55rem', color: labelColor, fontFamily: 'monospace', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              &gt; stripe.webhooks.constructEvent(payload, sig)
            </div>
            <div style={{ fontSize: '0.55rem', color: '#10b981', fontFamily: 'monospace' }}>
              &gt; Action: Trigger recovery mail sequence [SENT]
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const ProjectPreview = ({ project, colors, isHovered, t, isMobile, onInteractiveLoad, isLoaded }) => {
  const isDark = colors.sectionBg === '#000000';

  if (project.embed && isLoaded && !isMobile) {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <iframe
          src={project.embed}
          title={t(`projects.items.${project.id}.name`)}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            pointerEvents: 'auto',
            transition: 'all 0.5s ease'
          }}
        />
        {/* Blocker overlay during scrolling on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          backgroundColor: 'transparent'
        }} />
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: colors.cardBg,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'stretch',
      transition: 'background 0.5s ease, all 0.5s ease'
    }}>
      {/* Visual Workspace Content */}
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <ProjectMockupUI projectId={project.id} isDark={isDark} />
      </div>

      {/* Demand Loader Button (Desktop Only) */}
      {!isMobile && project.embed && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: isHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s ease'
        }}>
          <button
            onClick={onInteractiveLoad}
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: '100px',
              border: `1px solid ${colors.accentLink}`,
              backgroundColor: 'rgba(0,0,0,0.85)',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '0.8rem',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              boxShadow: `0 0 20px ${colors.accentLink}44`,
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = project.accentColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.85)';
            }}
          >
            {t('projects.load_interactive')}
          </button>
        </div>
      )}
    </div>
  );
};

const ArchitectureFlow = ({ flow }) => {
  return (
    <div style={{ margin: '1.2rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
      {flow.map((step, idx) => (
        <React.Fragment key={step}>
          <div style={{
            fontSize: '0.68rem',
            fontFamily: 'monospace',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '3px 8px',
            borderRadius: '4px',
            color: '#a1a1aa'
          }}>
            {step}
          </div>
          {idx < flow.length - 1 && (
            <span style={{ fontSize: '0.65rem', color: '#52525b', fontWeight: 'bold' }}>→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const InsideTheBuild = ({ list }) => {
  return (
    <div style={{ margin: '1rem 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '1.5px', color: '#52525b', textTransform: 'uppercase' }}>
        INSIDE THE BUILD
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
        {list.map(item => (
          <span key={item} style={{ fontSize: '0.7rem', color: '#a1a1aa' }}>
            ■ {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const FeaturedProject = ({ project, index, isMobile, colors, t }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isLeft = index % 2 === 0;

  const animProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(80px)',
    config: { tension: 120, friction: 22 }
  });

  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : (isLeft ? 'row' : 'row-reverse'),
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '2.5rem' : '4rem',
    width: '100%',
    maxWidth: '1200px',
    margin: isMobile ? '4rem auto' : '10rem auto',
    boxSizing: 'border-box'
  };

  const textColStyle = {
    flex: '1',
    width: '100%',
    maxWidth: isMobile ? '100%' : '440px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left'
  };

  const previewColStyle = {
    flex: '1.6',
    width: '100%',
    height: isMobile ? '280px' : '480px',
    borderRadius: '24px',
    border: `1px solid ${colors.borderCol}`,
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
    boxShadow: isHovered ? `0 25px 60px -10px ${colors.accentLink}33` : 'none'
  };

  return (
    <animated.div ref={ref} style={{ ...animProps, width: '100%', padding: '0 1rem' }}>
      <div style={rowStyle}>

        {/* INFO COLUMN */}
        <div style={textColStyle}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: '800', color: colors.accentLink, fontFamily: 'monospace' }}>
              0{index + 1}
            </span>
            <h4 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', fontWeight: '900', color: colors.title, margin: 0, letterSpacing: '-1px' }}>
              {t(`projects.items.${project.id}.name`)}
            </h4>
          </div>

          <p style={{ fontSize: '0.92rem', color: colors.accentLink, fontWeight: '700', marginBottom: '1.2rem', letterSpacing: '-0.2px' }}>
            {t(`projects.items.${project.id}.subtitle`)}
          </p>

          <p style={{ color: colors.body, fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '1rem', fontWeight: '400' }}>
            {t(`projects.items.${project.id}.desc`)}
          </p>

          {/* Optional Architecture diagrams */}
          {project.hasArchitecture && (
            <ArchitectureFlow flow={project.architecture} />
          )}

          {/* Optional Inside the Build details */}
          {project.insideTheBuild && (
            <InsideTheBuild list={project.insideTheBuild} />
          )}

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                backgroundColor: colors.tagBg,
                color: colors.title,
                border: colors.tagBorder,
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: '700'
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '1.5rem', borderTop: `1px solid ${colors.borderCol}`, paddingTop: '1.5rem', width: '100%' }}>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.accentLink, fontSize: '0.85rem', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {t('projects.live')} <FaExternalLinkAlt size={12} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.linkColor, fontSize: '0.85rem', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {t('projects.github')} <FaGithub size={14} />
            </a>
          </div>
        </div>

        {/* PREVIEW BROWSER COLUMN */}
        <div
          style={previewColStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Simulated Browser Header */}
          <div style={{
            height: '32px',
            backgroundColor: colors.metaBg,
            borderBottom: `1px solid ${colors.borderCol}`,
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: '8px'
          }}>
            {/* Dots */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
            </div>
            {/* Mock address bar */}
            <div style={{
              flexGrow: 1,
              height: '18px',
              backgroundColor: colors.sectionBg,
              borderRadius: '4px',
              fontSize: '0.55rem',
              color: colors.hint,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'monospace',
              border: `1px solid ${colors.borderCol}`
            }}>
              {project.demo.replace('https://', '')}
            </div>
          </div>

          {/* Viewport content */}
          <div style={{ height: 'calc(100% - 32px)', width: '100%' }}>
            <ProjectPreview
              project={project}
              colors={colors}
              isHovered={isHovered}
              t={t}
              isMobile={isMobile}
              onInteractiveLoad={() => setIsLoaded(true)}
              isLoaded={isLoaded}
            />
          </div>
        </div>

      </div>
    </animated.div>
  );
};

const MoreExperiments = ({ colors, t, isMobile, theme }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isDark = theme === 'dark';

  const gridAnim = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
    config: { tension: 100, friction: 22 }
  });

  return (
    <div style={{ marginTop: isMobile ? '6rem' : '10rem', width: '100%', maxWidth: '1200px', margin: `${isMobile ? '6rem' : '10rem'} auto 0`, padding: '0 1rem' }}>
      <h3 style={{
        fontSize: isMobile ? '2rem' : '3.2rem',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: '3.5rem',
        letterSpacing: '-1.5px',
        color: colors.title
      }}>
        {t('projects.more_title')} <span style={{
          background: 'linear-gradient(135deg, #00DDEB, #5B42F3, #AF40FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 10px rgba(91, 66, 243, 0.45))'
        }}>{t('projects.more_subtitle')}</span>
      </h3>

      <motion.div ref={ref} style={{
        ...gridAnim,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
        gap: '24px',
        width: '100%'
      }}>
        {secondaryExperiments.map(proj => {
          const IconComp = proj.icon;
          return (
            <motion.div
              key={proj.id}
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : colors.cardBg,
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : colors.borderCol}`,
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
              }}
              whileHover={{
                y: -8,
                borderColor: proj.accent,
                boxShadow: `0 14px 35px -5px ${proj.accent}35`
              }}
            >
              {/* Vibrant Banner Preview */}
              <div style={{
                height: '130px',
                background: proj.gradient,
                borderBottom: `1px solid ${proj.accent}33`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.1rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background glow circle */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: proj.accent,
                  opacity: 0.25,
                  filter: 'blur(20px)'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: '800',
                    letterSpacing: '1.5px',
                    color: proj.accent,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '3px 9px',
                    borderRadius: '100px',
                    border: `1px solid ${proj.accent}44`
                  }}>
                    {proj.category}
                  </span>
                  <IconComp style={{ color: proj.accent, fontSize: '1.3rem', filter: `drop-shadow(0 0 8px ${proj.accent})` }} />
                </div>

                <div style={{ zIndex: 1, marginTop: 'auto' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.5px' }}>
                    {t(`projects.items.${proj.id}.name`)}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', color: colors.body, lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {t(`projects.items.${proj.id}.desc`)}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.2rem' }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.68rem',
                        fontWeight: '700',
                        backgroundColor: `${proj.accent}1a`,
                        color: isDark ? '#ffffff' : colors.title,
                        border: `1px solid ${proj.accent}33`,
                        padding: '3px 10px',
                        borderRadius: '6px'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1.2rem', borderTop: `1px solid ${colors.borderCol}`, paddingTop: '0.9rem' }}>
                    <a href={proj.demo} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', fontWeight: '800', color: proj.accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {t('projects.live', 'Demo')} <FaExternalLinkAlt size={10} />
                    </a>
                    <a href={proj.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', fontWeight: '800', color: colors.linkColor, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {t('projects.github', 'Code')} <FaGithub size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const Projects = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const colors = themePalette[theme] || themePalette.dark;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? '4rem 0' : '8rem 0',
        backgroundColor: colors.sectionBg,
        overflow: 'hidden',
        position: 'relative',
        transition: 'background-color 0.4s ease'
      }}
    >
      {/* SECTION HEADER */}
      <div style={{ marginBottom: isMobile ? '3rem' : '6rem', textAlign: 'center', padding: '0 1rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: '900',
          letterSpacing: '3px',
          color: colors.accentLink,
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.75rem',
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
        }}>
          {t('projects.projects_count', '06 PROJECTS / 2024—2026')}
        </span>

        <motion.h3
          style={{
            fontSize: isMobile ? '2.5rem' : '4.5rem',
            fontWeight: '900',
            color: colors.title,
            margin: 0,
            letterSpacing: '-2px',
            transition: 'color 0.4s ease',
            textTransform: 'uppercase'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.section_title')} <span style={{
            background: 'linear-gradient(135deg, #00DDEB, #5B42F3, #AF40FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 12px rgba(91, 66, 243, 0.45))'
          }}>{t('projects.section_subtitle')}</span>
        </motion.h3>

        <p style={{
          color: colors.hint,
          fontSize: isMobile ? '0.95rem' : '1.1rem',
          marginTop: '15px',
          transition: 'color 0.4s ease',
          maxWidth: '600px',
          margin: '15px auto 0'
        }}>
          {t('projects.description')}
        </p>
      </div>

      {/* FEATURED WORK COMPOSITION */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '4rem' : '0px' }}>
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            index={index}
            isMobile={isMobile}
            colors={colors}
            t={t}
          />
        ))}
      </div>

      {/* MORE EXPERIMENTS GRID */}
      <MoreExperiments
        colors={colors}
        t={t}
        isMobile={isMobile}
        theme={theme}
      />

    </section>
  );
};

export default Projects;
