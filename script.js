// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('.section, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simple client-side validation
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  
  if (name && email && message) {
    alert('Thank you ' + name + '! Your message has been sent. Ill get back to you soon!');
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Header scroll effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  
  if (window.scrollY > 50) {
    header.style.background = 'rgba(255, 255, 255, 0.15)';
    header.style.backdropFilter = 'blur(25px)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.1)';
    header.style.backdropFilter = 'blur(20px)';
  }
  
  // Parallax effect for hero
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.image-placeholder');
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  lastScrollY = window.scrollY;
});
