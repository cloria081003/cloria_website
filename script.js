
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const dialog = document.querySelector('.lightbox');
const dialogImg = dialog?.querySelector('img');

document.querySelectorAll('.art-button').forEach(button => {
  button.addEventListener('click', () => {
    if (!dialog || !dialogImg) return;
    dialogImg.src = button.dataset.image;
    dialogImg.alt = button.dataset.alt || '';
    dialog.showModal();
  });
});

document.querySelector('.lightbox-close')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dialog?.open) dialog.close();
});
