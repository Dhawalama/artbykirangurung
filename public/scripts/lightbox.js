(() => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const image = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const category = document.getElementById('lightbox-category');
  const closeButton = lightbox.querySelector('.close');
  const items = Array.from(document.querySelectorAll('[data-lightbox]'));

  function openLightbox(item) {
    image.src = item.dataset.src;
    image.alt = item.dataset.title || 'Artwork preview';
    title.textContent = item.dataset.title || '';
    category.textContent = item.dataset.category || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    image.removeAttribute('src');
  }

  items.forEach((item) => {
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(item);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
})();
