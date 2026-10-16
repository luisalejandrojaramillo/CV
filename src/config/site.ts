/**
 * Site-wide metadata used by the document head, the web app manifest
 * and structured data. Content about the person lives in `src/data/profile.ts`.
 */
export const siteConfig = {
  /** Short name shown in the browser tab and as the installed app name. */
  name: 'Luis Alejandro Jaramillo',
  /** Default `<title>` for the home page. */
  title: 'Luis Alejandro Jaramillo | Engineering Manager & Tech Lead',
  /** Meta description, kept under ~160 characters for search snippets. */
  description:
    'Engineering Manager and Tech Lead with 5+ years in fintech, leading teams that build cross-border payments, pricing, routing and fraud prevention.',
  /** BCP 47 language tag for the `<html lang>` attribute. */
  locale: 'en',
  /** Open Graph locale. */
  ogLocale: 'en_US',
  /** Browser UI color per theme, kept in sync with `--color-bg` tokens. */
  themeColor: {
    light: '#f6f7f6',
    dark: '#0d1110',
  },
} as const;

/** In-page anchors shown in the header. Each `id` must match a section id. */
export const navigation = [
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
] as const;
