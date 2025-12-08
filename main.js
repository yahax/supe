const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

function toggleMenu() {
  mobileNav?.classList.toggle('open');
  burger?.classList.toggle('open');
  if (mobileNav?.classList.contains('open')) {
    mobileNav.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    mobileNav.style.display = 'none';
    body.style.overflow = '';
  }
}

burger?.addEventListener('click', toggleMenu);

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) toggleMenu();
  });
});

// Hero slider
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;
let autoSlide;

function createDots() {
  if (!dotsContainer || !slides.length) return;
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  dotsContainer.children[0]?.classList.add('active');
}

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  if (dotsContainer) {
    Array.from(dotsContainer.children).forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  updateSlides();
  resetAutoSlide();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startAutoSlide() {
  if (slides.length) {
    autoSlide = setInterval(nextSlide, 6500);
  }
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

prevBtn?.addEventListener('click', prevSlide);
nextBtn?.addEventListener('click', nextSlide);

createDots();
updateSlides();
startAutoSlide();

// Appear on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .banner, section').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});
