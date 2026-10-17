/**
 * Resume preview: on large screens with a precise pointer, clicks on
 * `[data-resume-view]` links open the PDF inside `[data-resume-dialog]`
 * instead of a new tab.
 *
 * Phones and tablets keep the link's default behaviour (open the PDF in a new
 * tab), because their browsers do not render PDFs embedded in a page.
 */
const PREVIEW_QUERY = '(min-width: 900px) and (pointer: fine)';

export function initResumePreview(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-resume-dialog]');
  const frame = dialog?.querySelector<HTMLIFrameElement>('[data-resume-frame]');
  if (!dialog || !frame || typeof dialog.showModal !== 'function') return;

  const canPreview = window.matchMedia(PREVIEW_QUERY);

  document.querySelectorAll<HTMLAnchorElement>('[data-resume-view]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!canPreview.matches) return;
      event.preventDefault();
      // Load the PDF lazily, the first time the preview is opened.
      if (!frame.getAttribute('src') && frame.dataset.src) frame.src = frame.dataset.src;
      dialog.showModal();
    });
  });

  dialog.querySelector('[data-resume-close]')?.addEventListener('click', () => dialog.close());

  // A click on the backdrop lands on the dialog element itself.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
