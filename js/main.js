document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('activity-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeBtn = modal.querySelector('.close-btn');

  // Open modal when clicking on an activity card
  document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
      const imageSrc = card.getAttribute('data-image');
      const title = card.getAttribute('data-title');
      const description = card.getAttribute('data-description');

      modalImage.src = imageSrc;
      modalImage.alt = title;
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    });
  });

  // Close modal on clicking close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  });

  // Close modal on clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }
  });

  // Close modal on pressing Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }
  });

  // Contact form submission handler
  const form = document.getElementById('contact-form');
  const responseEl = document.getElementById('form-response');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      responseEl.style.color = '#90ee90'; // light green
      responseEl.textContent = `Thank you, ${name}! Your message has been received.`;
      form.reset();
    } else {
      responseEl.style.color = '#ff6f91'; // pinkish red
      responseEl.textContent = 'Please fill in all fields.';
    }
  });
});
