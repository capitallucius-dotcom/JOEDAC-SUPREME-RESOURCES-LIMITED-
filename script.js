
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// Mobile navigation menu
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close menu' : 'Open menu'
    );

    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
      menuToggle.textContent = '☰';
    });
  });
}

// Automatically update the footer year
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
