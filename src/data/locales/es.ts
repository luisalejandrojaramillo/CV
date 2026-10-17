/**
 * Spanish copy, served at `/es/`. Keep the structure in sync with `en.ts`;
 * the `Content` type flags any missing or extra field.
 *
 * Job titles, certification names and common industry terms (pricing,
 * roadmap, event-driven) stay in English on purpose: that is how they appear
 * in Colombian job posts and how recruiters search for them.
 */
import type { Content } from '../profile';

export const es: Content = {
  language: {
    tag: 'es',
    ogLocale: 'es_CO',
    name: 'Español',
    switchLabel: 'Ver este sitio en español',
  },
  meta: {
    title: 'Luis Alejandro Jaramillo | Líder de Ingeniería, Pagos y Fintech',
    description:
      'Líder de ingeniería con 5+ años en fintech y una Maestría en IA. Lidero el equipo de pagos internacionales (cross-border) en PuntoRed: personas, arquitectura y entrega.',
  },
  nav: {
    expertise: 'Fortalezas',
    experience: 'Experiencia',
    education: 'Formación',
    skills: 'Habilidades',
  },
  ui: {
    skipLink: 'Saltar al contenido',
    primaryNav: 'Principal',
    home: 'inicio',
    getInTouch: 'Contáctame',
    portraitAlt: 'Retrato de Luis Alejandro Jaramillo',
    theme: {
      toggle: 'Cambiar el tema de color',
      toLight: 'Cambiar a tema claro',
      toDark: 'Cambiar a tema oscuro',
    },
    resume: {
      download: 'Descargar hoja de vida',
      short: 'Hoja de vida',
      view: 'Ver hoja de vida',
      close: 'Cerrar',
    },
  },
  sections: {
    highlights: 'En resumen',
    expertise: 'Lo que aporto a un equipo',
    experience: 'Experiencia',
    skills: 'Habilidades y herramientas',
    languages: 'Idiomas',
    education: 'Formación y certificaciones',
    degree: 'Pregrado',
    certifications: 'Certificaciones',
    contact: {
      title: 'Conectemos.',
      lead: 'Me gusta conversar sobre liderazgo de ingeniería, arquitectura de software y desarrollo AI-first. Vivo en Bogotá, Colombia, y trabajo en español e inglés.',
      sendEmail: 'Enviar un correo',
      copied: 'Correo copiado',
      copyFailed: 'No se pudo copiar el correo',
    },
  },
  notFound: {
    title: 'Página no encontrada',
    heading: 'Esta página no existe.',
    lead: 'Puede que el enlace esté desactualizado. Todo sobre mi trabajo está en la página de inicio.',
    action: 'Volver al inicio',
  },
  profile: {
    role: 'Líder de Ingeniería',
    domain: 'Plataformas de pagos y fintech',
    pitch:
      'Lidero el equipo de pagos internacionales (cross-border) en PuntoRed, con 5+ años en fintech y una Maestría en Inteligencia Artificial.',
    languages: ['Español (nativo)', 'Inglés (fluido)'],
  },
  highlights: [
    {
      value: '5+ años',
      description: 'en fintech, construyendo y operando infraestructura de pagos en producción',
    },
    {
      value: 'End-to-end',
      description: 'responsabilidad de punta a punta sobre un dominio de pagos: arquitectura, roadmap, entrega y soporte en producción',
    },
    {
      value: 'AI-first',
      description: 'estándares de equipo para programar, probar y revisar código con IA usando Claude Code',
    },
    {
      value: 'MSc en IA',
      description: 'Maestría en Inteligencia Artificial de la Universidad Internacional de Valencia',
    },
  ],
  focusAreas: [
    {
      title: 'Liderazgo de ingeniería',
      status: 'Hoy lidero el equipo de pagos internacionales (cross-border) en PuntoRed.',
      description:
        'Contratación, onboarding, feedback y crecimiento profesional del equipo, con estándares claros de code review, deuda técnica y soporte en producción.',
      tags: ['Contratación y coaching', 'Desempeño', 'Entrega del roadmap', 'Stakeholders'],
    },
    {
      title: 'Arquitectura de plataformas de pago',
      description:
        'Orquestación, pricing, enrutamiento e integraciones con proveedores, diseñados para escalar y cumplir con auditorías PCI DSS y requisitos regulatorios.',
      tags: ['Event-driven', 'Microservicios', 'Kafka', 'PCI DSS'],
    },
    {
      title: 'Ingeniería AI-first',
      description:
        'Estándares de equipo para programar, probar y revisar código con IA, respaldados por una Maestría en Inteligencia Artificial.',
      tags: ['Claude Code', 'MCP', 'Herramientas LLM'],
    },
  ],
  experience: [
    {
      name: 'PuntoRed',
      location: 'Bogotá, Colombia',
      period: 'Nov 2025 - Actualidad',
      summary: 'Plataforma de pagos internacionales (cross-border)',
      roles: [
        {
          title: 'Software Tech Leader',
          period: 'Nov 2025 - Actualidad',
          highlights: [
            'Lidero el equipo de ingeniería de pagos internacionales (cross-border): contratación, onboarding, feedback, desempeño y desarrollo de carrera.',
            'Soy responsable de la entrega del roadmap del dominio de punta a punta, y acuerdo con Producto y negocio el alcance, las estimaciones y los riesgos.',
            'Defino la arquitectura de la plataforma de pagos internacionales (orquestación, pricing, enrutamiento e integraciones con proveedores) y reviso diseños y código para mantener la calidad.',
            'Establecí estándares de ingeniería del dominio para revisión de PRs, gestión de deuda técnica y soporte en producción.',
            'Impulso el desarrollo AI-first con estándares de equipo para programar, probar y revisar código con Claude Code y herramientas LLM.',
          ],
        },
      ],
    },
    {
      name: 'PayU',
      location: 'Bogotá, Colombia',
      period: 'Mar 2021 - Nov 2025',
      summary: 'Pagos en línea en Latinoamérica',
      roles: [
        {
          title: 'Specialist Software Engineer',
          period: 'Jul 2024 - Nov 2025',
          highlights: [
            'Lideré un equipo de desarrollo para unificar el pricing en toda la plataforma.',
            'Diseñé el primer servicio event-driven de la compañía para el procesamiento postransaccional.',
            'Acompañé el crecimiento de ingenieros junior y semi senior con code reviews y orientación técnica.',
          ],
        },
        {
          title: 'Senior Software Engineer',
          period: 'Jun 2022 - Jul 2024',
          highlights: [
            'Implementé mejoras de enrutamiento, control de reintentos e integraciones de medios de pago locales que aumentaron en 20% la tasa de aprobación y evitaron cerca de USD 20.000 mensuales en penalidades.',
            'Participé en auditorías PCI DSS y en requisitos regulatorios de cada país para operaciones de pago reguladas.',
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
      name: 'Liderazgo',
      items: ['Contratación y coaching', 'Gestión del desempeño', 'Entrega y roadmap', 'Gestión de stakeholders', 'Agile'],
    },
    {
      name: 'Ingeniería AI-first',
      items: ['Claude Code', 'Programación asistida por IA', 'Pruebas asistidas por IA', 'Code review con IA', 'MCP'],
    },
    {
      name: 'Backend',
      items: ['Java 8-21', 'Spring Boot', 'TypeScript', 'Node.js', 'Python', 'SQL'],
    },
    {
      name: 'Arquitectura y seguridad',
      items: ['Microservicios', 'Event-driven', 'APIs REST', 'Kafka', 'PCI DSS', 'OWASP'],
    },
    {
      name: 'Cloud y datos',
      items: ['AWS', 'Kubernetes', 'Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
  ],
  education: [
    {
      title: 'Maestría en Inteligencia Artificial',
      issuer: 'Universidad Internacional de Valencia (VIU)',
      period: '2025 - 2026',
      location: 'Valencia, España',
      description:
        'La base de las prácticas AI-first que llevo a mi equipo: programación, pruebas y code review asistidos por IA.',
    },
    {
      title: 'Ingeniería de Software',
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
