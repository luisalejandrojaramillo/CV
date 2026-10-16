// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

/**
 * Astro configuration.
 *
 * - `site` is the canonical production URL. It drives canonical links,
 *   Open Graph URLs and the JSON-LD profile. Update it when the domain changes.
 * - Fonts are fetched from Fontsource at build time and self-hosted, so the
 *   site never calls a third-party font CDN at runtime.
 *
 * @see https://docs.astro.build/en/reference/configuration-reference/
 */
export default defineConfig({
  site: 'https://luisjaramillo.netlify.app',
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
