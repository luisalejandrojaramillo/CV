/**
 * Copy-to-clipboard for `[data-copy-email]` buttons.
 *
 * The button briefly shows "Copied" (or an error) and the result is also
 * announced through the `[data-copy-status]` live region for screen readers.
 */
const RESET_DELAY_MS = 2000;

export function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    const email = button.dataset.copyEmail ?? '';
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
        show('copied', 'Email copied');
      } catch {
        show('error', 'Copy failed, use the email link');
      }
    });
  });
}
