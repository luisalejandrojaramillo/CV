// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { defaultLocale, locales } from './src/i18n/config.ts';

/**
 * Astro configuration.
 *
 * - `site` is the canonical production URL. It drives canonical links,
 *   Open Graph URLs and the JSON-LD profile. Update it when the domain changes.
 * - Fonts are fetched from Fontsource at build time and self-hosted, so the
 *   site never calls a third-party font CDN at runtime.
 * - i18n: English is served at `/`, every other locale at `/<code>/`.
 *   Locale codes live in `src/i18n/config.ts`.
 *
 * @see https://docs.astro.build/en/reference/configuration-reference/
 * @see https://docs.astro.build/en/guides/internationalization/
 */
export default defineConfig({
  site: 'https://luisjaramillo.netlify.app',
  i18n: {
    locales: [...locales],
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  ],
});
