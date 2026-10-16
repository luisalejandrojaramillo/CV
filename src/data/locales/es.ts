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
    title: 'Luis Alejandro Jaramillo | Engineering Manager y Tech Lead',
    description:
      'Engineering Manager y Tech Lead con 5+ años en fintech. Lidero equipos de pagos transfronterizos, pricing, enrutamiento y prevención de fraude.',
  },
  nav: {
    expertise: 'Fortalezas',
    experience: 'Experiencia',
    skills: 'Habilidades',
    education: 'Formación',
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
    },
  },
  sections: {
    impact: 'Impacto',
    expertise: 'Lo que aporto a un equipo',
    experience: 'Experiencia',
    skills: 'Habilidades y herramientas',
    languages: 'Idiomas',
    education: 'Formación y certificaciones',
    educationHeading: 'Formación',
    certifications: 'Certificaciones',
    contact: {
      title: '¿Armando un equipo de pagos? Hablemos.',
      lead: 'Estoy abierto a conversar sobre roles de Engineering Manager y Tech Lead. Vivo en Bogotá, Colombia, y trabajo en español e inglés.',
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
    role: 'Engineering Manager & Tech Lead',
    pitch:
      'Lidero equipos de ingeniería que construyen infraestructura de pagos crítica: pagos transfronterizos, pricing, enrutamiento y prevención de fraude.',
    languages: ['Español (nativo)', 'Inglés (fluido)'],
  },
  metrics: [
    {
      value: '+20%',
      description: 'en tasa de aprobación de transacciones con enrutamiento, control de reintentos y medios de pago locales',
    },
    {
      value: '~$20K',
      description: 'USD mensuales en penalidades evitadas con esas mismas mejoras al flujo de pagos',
    },
    {
      value: '5+ años',
      description: 'construyendo y operando infraestructura de pagos en producción',
    },
    {
      value: '3',
      description: 'ascensos en PayU, de Junior a Specialist Software Engineer',
    },
  ],
  focusAreas: [
    {
      title: 'Liderazgo de ingeniería',
      status: 'Hoy lidero el equipo de pagos transfronterizos en PuntoRed.',
      description:
        'Contratación, onboarding, feedback y crecimiento profesional del equipo, con estándares claros de code review, deuda técnica y soporte en producción.',
      tags: ['Contratación y coaching', 'Desempeño', 'Entrega del roadmap', 'Stakeholders'],
    },
    {
      title: 'Arquitectura de plataformas de pago',
      description:
        'Orquestación, pricing, enrutamiento e integraciones con proveedores, diseñados para escalar y superar auditorías PCI DSS y regulatorias.',
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
      summary: 'Plataforma de pagos transfronterizos',
      roles: [
        {
          title: 'Software Tech Leader',
          period: 'Nov 2025 - Actualidad',
          highlights: [
            'Lidero el equipo de ingeniería de pagos transfronterizos: contratación, onboarding, feedback, desempeño y desarrollo de carrera.',
            'Respondo por la entrega completa del roadmap del dominio, junto a Producto y negocio en alcance, estimaciones y riesgos.',
            'Defino la arquitectura de la plataforma transfronteriza (orquestación, pricing, enrutamiento e integraciones con proveedores) y reviso diseños y código para mantener la calidad.',
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
            'Fui mentor de ingenieros junior y semi senior con code reviews y guía técnica.',
          ],
        },
        {
          title: 'Senior Software Engineer',
          period: 'Jun 2022 - Jul 2024',
          highlights: [
            'Entregué enrutamiento, control de reintentos e integraciones de medios de pago locales que subieron la tasa de aprobación en 20% y evitaron cerca de USD 20.000 mensuales en penalidades.',
            'Participé en auditorías PCI DSS y en requisitos regulatorios de cada país para operaciones de pago con licencia.',
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
      detail: '2025 - 2026, virtual',
    },
    {
      title: 'Ingeniería de Software',
      issuer: 'Escuela Colombiana de Ingeniería Julio Garavito',
      detail: '2015 - 2020',
    },
  ],
  certifications: [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
    { title: 'Architecting on AWS', issuer: 'AWS Training and Certification' },
    { title: 'Manager Development Program', issuer: 'HR Evolution' },
    { title: 'Scrum Master Professional Certificate (SMPC)', issuer: 'Certiprof' },
  ],
};
