/**
 * Single source of truth for the portfolio content.
 *
 * Every section component reads from this module, so updating the résumé
 * means editing data here instead of touching markup. Keep copy short and
 * outcome-focused: recruiters scan, they do not read.
 */

/** A labelled external link (social profile, résumé, etc.). */
export interface Link {
  label: string;
  href: string;
}

/** A headline metric backed by a real, verifiable achievement. */
export interface Metric {
  value: string;
  description: string;
}

/** A focus area describing what the person brings to a team. */
export interface FocusArea {
  title: string;
  /** Optional current-status line shown at the top of the tile. */
  status?: string;
  description: string;
  tags: string[];
}

/** One position held at a company. */
export interface Role {
  title: string;
  /** Human-readable period, e.g. "Jul 2024 - Nov 2025". */
  period: string;
  highlights: string[];
}

/** A company with the roles held there, newest first. */
export interface Company {
  name: string;
  location: string;
  period: string;
  /** One-line context about the domain worked on. */
  summary: string;
  roles: Role[];
}

/** A group of related skills. */
export interface SkillGroup {
  name: string;
  items: string[];
}

/** A degree or certificate. */
export interface Credential {
  title: string;
  issuer: string;
  /** Optional period or location detail. */
  detail?: string;
}

export const profile = {
  name: 'Luis Alejandro Jaramillo',
  fullName: 'Luis Alejandro Jaramillo Rincon',
  role: 'Engineering Manager & Tech Lead',
  domain: 'Payments & Fintech',
  pitch:
    'I lead engineering teams that build critical payment infrastructure: cross-border payments, pricing, routing and fraud prevention.',
  location: 'Bogotá, Colombia',
  email: 'luisalejandrojaramillo@hotmail.com',
  resume: {
    label: 'Download resume',
    href: '/files/luis-alejandro-jaramillo-resume.pdf',
  },
  social: {
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luis-alejandro-jaramillo-rincon',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/luisalejandrojaramillo',
    },
  },
  languages: ['Spanish (native)', 'English (fluent)'],
} as const;

export const metrics: Metric[] = [
  {
    value: '+20%',
    description: 'transaction approval rate from routing, retry control and local payment methods',
  },
  {
    value: '~$20K',
    description: 'USD in monthly penalties avoided through the same payment flow improvements',
  },
  {
    value: '5+ yrs',
    description: 'building and running payment infrastructure in production',
  },
  {
    value: '3',
    description: 'promotions at PayU, from Junior to Specialist Software Engineer',
  },
];

export const focusAreas: FocusArea[] = [
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
];

export const experience: Company[] = [
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
];

export const skillGroups: SkillGroup[] = [
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
];

export const education: Credential[] = [
  {
    title: 'Master’s Degree in Artificial Intelligence',
    issuer: 'Universidad Internacional de Valencia (VIU)',
    detail: '2025 - 2026, remote',
  },
  {
    title: 'Software Engineering',
    issuer: 'Escuela Colombiana de Ingeniería Julio Garavito',
    detail: '2015 - 2020',
  },
];

export const certifications: Credential[] = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { title: 'Architecting on AWS', issuer: 'AWS Training and Certification' },
  { title: 'Manager Development Program', issuer: 'HR Evolution' },
  { title: 'Scrum Master Professional Certificate (SMPC)', issuer: 'Certiprof' },
];
