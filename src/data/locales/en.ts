/**
 * English copy, served at `/`. Keep the structure in sync with `es.ts`;
 * the `Content` type flags any missing or extra field.
 */
import type { Content } from '../profile';

export const en: Content = {
  language: {
    tag: 'en',
    ogLocale: 'en_US',
    name: 'English',
    switchLabel: 'View this site in English',
  },
  meta: {
    title: 'Luis Alejandro Jaramillo | Engineering Lead, Payments & Fintech',
    description:
      'Engineering Lead with 5+ years in fintech and a Master’s in AI, leading the cross-border payments team at PuntoRed: people, architecture and delivery.',
  },
  nav: {
    expertise: 'Expertise',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
  },
  ui: {
    skipLink: 'Skip to content',
    primaryNav: 'Primary',
    home: 'home',
    getInTouch: 'Get in touch',
    portraitAlt: 'Portrait of Luis Alejandro Jaramillo',
    theme: {
      toggle: 'Switch color theme',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    resume: {
      download: 'Download resume',
      short: 'Resume',
    },
  },
  sections: {
    highlights: 'At a glance',
    expertise: 'What I bring to a team',
    experience: 'Experience',
    skills: 'Skills and tools',
    languages: 'Languages',
    education: 'Education and certifications',
    degree: 'Degree',
    certifications: 'Certifications',
    contact: {
      title: 'Let’s connect.',
      lead: 'I enjoy talking about engineering leadership, software architecture and AI-first development. Based in Bogotá, Colombia, working in Spanish and English.',
      sendEmail: 'Send an email',
      copied: 'Email copied',
      copyFailed: 'Copy failed, use the email link',
    },
  },
  notFound: {
    title: 'Page not found',
    heading: 'This page does not exist.',
    lead: 'The link may be outdated. Everything about my work is on the home page.',
    action: 'Back to home',
  },
  profile: {
    role: 'Engineering Lead',
    domain: 'Payments & Fintech Platforms',
    pitch:
      'I lead the cross-border payments team at PuntoRed, pairing 5+ years in fintech with a Master’s in Artificial Intelligence.',
    languages: ['Spanish (native)', 'English (fluent)'],
  },
  highlights: [
    {
      value: '5+ years',
      description: 'in fintech, building and running payment infrastructure in production',
    },
    {
      value: 'End-to-end',
      description: 'ownership of a payments domain: architecture, roadmap, delivery and production support',
    },
    {
      value: 'AI-first',
      description: 'team standards for AI-assisted coding, testing and code review with Claude Code',
    },
    {
      value: 'MSc in AI',
      description: 'Master’s degree in Artificial Intelligence from Universidad Internacional de Valencia',
    },
  ],
  focusAreas: [
    {
      title: 'Engineering leadership',
      status: 'Currently leading the cross-border payments team at PuntoRed.',
      description:
        'Hiring, onboarding, feedback and career growth for the team, with clear standards for code review, technical debt and production support.',
      tags: ['Hiring & coaching', 'Performance', 'Roadmap delivery', 'Stakeholders'],
    },
    {
      title: 'Payment platform architecture',
      description:
        'Orchestration, pricing, routing and provider integrations designed to scale and to pass PCI DSS and regulatory audits.',
      tags: ['Event-driven', 'Microservices', 'Kafka', 'PCI DSS'],
    },
    {
      title: 'AI-first engineering',
      description:
        'Team standards for AI-assisted coding, testing and code review, grounded in a Master’s degree in Artificial Intelligence.',
      tags: ['Claude Code', 'MCP', 'LLM tooling'],
    },
  ],
  experience: [
    {
      name: 'PuntoRed',
      location: 'Bogotá, Colombia',
      period: 'Nov 2025 - Present',
      summary: 'Cross-border payments platform',
      roles: [
        {
          title: 'Software Tech Leader',
          period: 'Nov 2025 - Present',
          highlights: [
            'Lead the cross-border payments engineering team, owning hiring, onboarding, feedback, performance and career development.',
            'Own end-to-end delivery of the domain roadmap, partnering with Product and business stakeholders on scope, estimates and risk.',
            'Define the architecture of the cross-border platform (orchestration, pricing, routing and provider integrations) and review designs and code to keep quality high.',
            'Established domain engineering standards for PR reviews, technical debt management and production support.',
            'Drive AI-first development, setting team standards for AI-assisted coding, testing and code review with Claude Code and LLM tooling.',
          ],
        },
      ],
    },
    {
      name: 'PayU',
      location: 'Bogotá, Colombia',
      period: 'Mar 2021 - Nov 2025',
      summary: 'Online payments across Latin America',
      roles: [
        {
          title: 'Specialist Software Engineer',
          period: 'Jul 2024 - Nov 2025',
          highlights: [
            'Led a development team to unify pricing across the platform.',
            'Designed the company’s first event-driven service for post-transactional processing.',
            'Mentored junior and mid-level engineers through code reviews and technical guidance.',
          ],
        },
        {
          title: 'Senior Software Engineer',
          period: 'Jun 2022 - Jul 2024',
          highlights: [
            'Delivered routing, retry-control and local payment method integrations that raised transaction approval rate by 20% and avoided around USD 20,000 in monthly penalties.',
            'Took part in PCI DSS audits and country-specific regulatory requirements for licensed payment operations.',
          ],
        },
        {
          title: 'Standard Software Engineer',
          period: 'Nov 2021 - Jun 2022',
          highlights: [],
        },
        {
          title: 'Junior Software Engineer',
          period: 'Mar 2021 - Nov 2021',
          highlights: [],
        },
      ],
    },
  ],
  skillGroups: [
    {
      name: 'Leadership',
      items: ['Hiring & coaching', 'Performance management', 'Delivery & roadmap', 'Stakeholder management', 'Agile'],
    },
    {
      name: 'AI-first engineering',
      items: ['Claude Code', 'AI-assisted coding', 'AI-assisted testing', 'AI code review', 'MCP'],
    },
    {
      name: 'Backend',
      items: ['Java 8-21', 'Spring Boot', 'TypeScript', 'Node.js', 'Python', 'SQL'],
    },
    {
      name: 'Architecture & security',
      items: ['Microservices', 'Event-driven', 'REST APIs', 'Kafka', 'PCI DSS', 'OWASP'],
    },
    {
      name: 'Cloud & data',
      items: ['AWS', 'Kubernetes', 'Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
  ],
  education: [
    {
      title: 'Master’s Degree in Artificial Intelligence',
      issuer: 'Universidad Internacional de Valencia (VIU)',
      period: '2025 - 2026',
      location: 'Valencia, Spain',
      description:
        'The foundation behind the AI-first practices I bring to my team: AI-assisted coding, testing and code review.',
    },
    {
      title: 'Software Engineering',
      issuer: 'Escuela Colombiana de Ingeniería Julio Garavito',
      period: '2015 - 2020',
      location: 'Bogotá, Colombia',
    },
  ],
  certifications: [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
    { title: 'Architecting on AWS', issuer: 'AWS Training and Certification' },
    { title: 'Manager Development Program', issuer: 'HR Evolution' },
    { title: 'Scrum Master Professional Certificate (SMPC)', issuer: 'Certiprof' },
  ],
};
