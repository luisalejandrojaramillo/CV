/**
 * Theme handling for the `[data-theme-toggle]` button.
 *
 * The active theme is stored as `data-theme` on <html>. When it is absent,
 * the OS preference decides. Choices persist in localStorage when available.
 */
type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

/** Returns the theme currently on screen, explicit or inherited from the OS. */
function getActiveTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return darkQuery.matches ? 'dark' : 'light';
}

/** Applies a theme and tries to remember it. Storage failures are ignored. */
function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode or blocked storage: the choice lasts for this page view.
  }
}

/** Keeps the button's accessible label in sync with the action it performs. */
function updateLabel(button: HTMLButtonElement): void {
  const next = getActiveTheme() === 'dark' ? 'light' : 'dark';
  button.setAttribute('aria-label', `Switch to ${next} theme`);
}

export function initThemeToggle(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');

  buttons.forEach((button) => {
    updateLabel(button);
    button.addEventListener('click', () => {
      setTheme(getActiveTheme() === 'dark' ? 'light' : 'dark');
      buttons.forEach(updateLabel);
    });
  });

  // Follow OS changes while the visitor has not picked a theme explicitly.
  darkQuery.addEventListener('change', () => buttons.forEach(updateLabel));
}
