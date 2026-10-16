/**
 * Runtime i18n helpers for components.
 *
 * Components call `getContent(Astro.currentLocale)` to get the copy for the
 * page being rendered. Astro derives `currentLocale` from the URL, so no
 * locale needs to be passed down through props.
 *
 * @see https://docs.astro.build/en/guides/internationalization/
 */
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { en } from '../data/locales/en';
import { es } from '../data/locales/es';
import type { Content } from '../data/profile';
import { defaultLocale, locales, type Locale } from './config';

export { defaultLocale, locales, type Locale };

const content: Record<Locale, Content> = { en, es };

/** Narrows any string (e.g. `Astro.currentLocale`) to a supported locale. */
export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Returns a supported locale, falling back to the default one. */
export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** Returns the copy for a locale, falling back to the default locale. */
export function getContent(value: string | undefined): Content {
  return content[resolveLocale(value)];
}

/**
 * Removes the locale prefix from a pathname so the same page can be linked in
 * another language: `/es/` becomes `/`, `/es/foo/` becomes `/foo/`.
 */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (isLocale(first) && first !== defaultLocale) return `/${rest.join('/')}`;
  return pathname;
}

/** Root-relative URL of `path` in `locale`, e.g. `localizePath('es', '/')` is `/es/`. */
export function localizePath(locale: Locale, path = '/'): string {
  return getRelativeLocaleUrl(locale, path.replace(/^\//, ''));
}

/** Absolute URL of `path` in `locale`, built from `site` in the Astro config. */
export function localizeUrl(locale: Locale, path = '/'): string {
  return getAbsoluteLocaleUrl(locale, path.replace(/^\//, ''));
}
