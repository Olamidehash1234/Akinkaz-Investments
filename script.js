/* ===== MOBILE NAV ===== */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');

function openMenu() {
  mobileMenu.classList.add('open');
  hamburgerBtn.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) closeMenu();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

/* ===== SCROLL REVEAL ===== */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revObs.observe(el));

/* ===== NAV SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 40 ? '0 2px 24px rgba(14,27,46,0.08)' : 'none';
});

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = (a.getAttribute('href') === '#' + current) ? 'var(--navy)' : '';
  });
});

/* ===== SUBMIT ===== */
document.getElementById('submitBtn').addEventListener('click', function() {
  this.textContent = '✓ Message Sent';
  this.style.background = '#2a6e4e';
  this.style.borderColor = '#2a6e4e';
  this.style.color = 'white';
  setTimeout(() => {
    this.textContent = 'Send Message';
    this.style.background = '';
    this.style.borderColor = '';
    this.style.color = '';
  }, 3000);
});
