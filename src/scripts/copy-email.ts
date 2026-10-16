/**
 * Copy-to-clipboard for `[data-copy-email]` buttons.
 *
 * The button briefly shows "Copied" (or an error) and the result is also
 * announced through the `[data-copy-status]` live region for screen readers.
 * Translated messages come from `data-copied-text` and `data-error-text` on
 * the button, so this script stays language-agnostic.
 */
const RESET_DELAY_MS = 2000;

export function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    const email = button.dataset.copyEmail ?? '';
    const copiedText = button.dataset.copiedText ?? 'Email copied';
    const errorText = button.dataset.errorText ?? 'Copy failed, use the email link';
    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    const status = button.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
    let resetTimer: number | undefined;

    const show = (state: 'copied' | 'error', text: string) => {
      button.dataset.state = state;
      if (label) label.textContent = text;
      if (status) status.textContent = text;

      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        delete button.dataset.state;
        if (label) label.textContent = email;
        if (status) status.textContent = '';
      }, RESET_DELAY_MS);
    };

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        show('copied', copiedText);
      } catch {
        show('error', errorText);
      }
    });
  });
}
