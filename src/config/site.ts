/**
 * Site-wide settings that do not change between languages. Translated
 * metadata (title, description, nav labels) lives in `src/data/locales/`,
 * and locale codes live in `src/i18n/config.ts`.
 */
export const siteConfig = {
  /** Short name shown in the browser tab and as the installed app name. */
  name: 'Luis Alejandro Jaramillo',
  /** Browser UI color per theme, kept in sync with `--color-bg` tokens. */
  themeColor: {
    light: '#f6f7f6',
    dark: '#0d1110',
  },
} as const;

/**
 * In-page anchors shown in the header, in display order. Each id must match
 * a section id; each locale file provides the label under `nav`.
 */
export const navigation = ['expertise', 'experience', 'education', 'skills'] as const;

/** A section id that appears in the header navigation. */
export type NavId = (typeof navigation)[number];
