/**
 * Portfolio content model.
 *
 * This module holds two things:
 * 1. `profile`: facts that read the same in every language (name, email,
 *    links). Edit them once here.
 * 2. The `Content` type: the shape of each locale file in `src/data/locales/`.
 *    Every visitor-facing string lives in those files, so the section
 *    components render any language without duplicating markup.
 *
 * Keep copy short and outcome-focused: recruiters scan, they do not read.
 * Do not use em-dashes or en-dashes in any language.
 */
import type { NavId } from '../config/site';

/** A labelled external link (social profile, résumé, etc.). */
export interface Link {
  label: string;
  href: string;
}

/**
 * A short "at a glance" fact about what the person offers today.
 * `value` is the large headline, `description` completes the sentence.
 */
export interface Highlight {
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
  /** Optional period, e.g. "2025 - 2026". */
  period?: string;
  /** Optional location of the institution. */
  location?: string;
  /** Optional one-line note on why it matters, shown for featured items. */
  description?: string;
}

/** Everything a visitor reads, for one locale. */
export interface Content {
  /** How this locale identifies itself in markup and in the language switch. */
  language: {
    /** BCP 47 tag for `<html lang>` and `hreflang`, e.g. "es". */
    tag: string;
    /** Open Graph locale, e.g. "es_CO". */
    ogLocale: string;
    /** Name of the language in itself, e.g. "Español". */
    name: string;
    /** Accessible label of the switch that leads to this locale, in this locale. */
    switchLabel: string;
  };
  /** Document metadata for the home page. */
  meta: {
    title: string;
    /** Kept under ~160 characters for search snippets. */
    description: string;
  };
  /** Header navigation labels, keyed by section id. */
  nav: Record<NavId, string>;
  /** Interface strings that are not part of the résumé itself. */
  ui: {
    skipLink: string;
    primaryNav: string;
    /** Suffix of the brand link label, e.g. "home" in "Name, home". */
    home: string;
    getInTouch: string;
    portraitAlt: string;
    theme: {
      /** Label before JavaScript runs. */
      toggle: string;
      toLight: string;
      toDark: string;
    };
    resume: {
      /** Download button label. */
      download: string;
      /** Footer link label and preview dialog title. */
      short: string;
      /** Accessible label of the icon button that opens the preview. */
      view: string;
      /** Label of the button that closes the preview. */
      close: string;
    };
  };
  /** Section headings and section-specific copy. */
  sections: {
    /** Visually hidden heading of the highlights strip. */
    highlights: string;
    expertise: string;
    experience: string;
    skills: string;
    languages: string;
    education: string;
    /** Heading of the degrees listed beside the featured one. */
    degree: string;
    certifications: string;
    contact: {
      title: string;
      lead: string;
      sendEmail: string;
      copied: string;
      copyFailed: string;
    };
  };
  notFound: {
    /** Document title, followed by the site name. */
    title: string;
    heading: string;
    lead: string;
    action: string;
  };
  /** Translated profile fields. Language-neutral facts live in `profile`. */
  profile: {
    role: string;
    /** Shown after the role in the hero, e.g. "Payments & Fintech". */
    domain: string;
    pitch: string;
    languages: string[];
  };
  highlights: Highlight[];
  focusAreas: FocusArea[];
  experience: Company[];
  skillGroups: SkillGroup[];
  /** Degrees, newest first. The first entry is featured in the Education section. */
  education: Credential[];
  certifications: Credential[];
}

/** Facts that are identical in every language. */
export const profile = {
  name: 'Luis Alejandro Jaramillo',
  fullName: 'Luis Alejandro Jaramillo Rincon',
  location: 'Bogotá, Colombia',
  email: 'luisalejandrojaramillo@hotmail.com',
  /** Résumé PDF. Only an English version exists today. */
  resumeHref: '/files/luis-alejandro-jaramillo-resume.pdf',
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
} as const satisfies {
  name: string;
  fullName: string;
  location: string;
  email: string;
  resumeHref: string;
  social: Record<string, Link>;
};
