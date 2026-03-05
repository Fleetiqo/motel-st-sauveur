import './style.css'

// Carousel functionality
let currentSlide = 0;
const totalSlides = 6;

function showSlide(index) {
  const track = document.querySelector('.hero__carousel-track');
  if (!track) return;
  
  currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-advance carousel
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
}

// Smooth scroll
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Header scroll effect
function handleScroll() {
  const header = document.querySelector('header');
  const backToTop = document.getElementById('backToTop');
  
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Back to top button
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Carousel controls
  const prevBtn = document.querySelector('.hero__carousel-prev');
  const nextBtn = document.querySelector('.hero__carousel-next');
  
  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    stopCarousel();
    startCarousel();
  });
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    stopCarousel();
    startCarousel();
  });
  
  // Start carousel
  startCarousel();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (target !== '#') {
        smoothScroll(target);
      }
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', handleScroll);
  
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Mobile menu toggle
  const burger = document.querySelector('.header__menu-mobile');
  const menu = document.querySelector('.header__menu');
  
  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
  
  // Copyright year
  const yearElement = document.getElementById('copyright-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
