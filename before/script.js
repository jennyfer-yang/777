// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements we want to animate on scroll
  const animatableElements = document.querySelectorAll('.feature-card, .pricing-card, .section-title');
  
  animatableElements.forEach((el, index) => {
    // Add a small stagger effect
    el.style.opacity = '0';
    el.style.animationDelay = `${(index % 4) * 0.1}s`;
    observer.observe(el);
  });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return;
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
