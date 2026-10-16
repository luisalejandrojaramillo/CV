/**
 * Supported locales. Imported by `astro.config.mjs`, so it must stay free of
 * `astro:*` virtual modules.
 *
 * To add a language: append its code here, create its content file in
 * `src/data/locales/`, register it in `src/i18n/index.ts` and add a page
 * folder under `src/pages/<code>/`.
 */
export const locales = ['en', 'es'] as const;

/** A supported locale code. It is also the URL prefix for non-default locales. */
export type Locale = (typeof locales)[number];

/** Served at `/` without a prefix. Other locales live at `/<code>/`. */
export const defaultLocale: Locale = 'en';
