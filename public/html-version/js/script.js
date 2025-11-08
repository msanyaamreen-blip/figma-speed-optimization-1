// Navigation scroll effect
const header = document.getElementById('header');
const nav = header.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// Close mobile menu when clicking on links
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu .btn');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// API Configuration - Update this URL based on your backend
const API_BASE_URL = 'http://localhost:8080/api'; // Java backend
// const API_BASE_URL = 'http://localhost:3001/api'; // Node.js backend (alternative)

// Consultation Form Submission
const consultationForm = document.getElementById('consultation-form');
if (consultationForm) {
  consultationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value,
      service: document.getElementById('service').value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showToast('Consultation request sent successfully! We will contact you soon.', 'success');
        consultationForm.reset();
      } else {
        showToast(data.message || 'Failed to send consultation request. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  });
}

// Footer Consultation Form
const footerConsultationForm = document.getElementById('footer-consultation-form');
if (footerConsultationForm) {
  footerConsultationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('footer-name').value,
      email: document.getElementById('footer-email').value,
      phone: document.getElementById('footer-phone').value,
      company: document.getElementById('footer-company').value,
      service: document.getElementById('footer-service').value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showToast('Consultation request sent successfully! We will contact you soon.', 'success');
        footerConsultationForm.reset();
      } else {
        showToast(data.message || 'Failed to send consultation request. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('newsletter-email').value;

    try {
      const response = await fetch(`${API_BASE_URL}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        showToast('Successfully subscribed to newsletter!', 'success');
        newsletterForm.reset();
      } else {
        showToast(data.message || 'Failed to subscribe. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  });
}

// Footer Form Submission
const footerForm = document.getElementById('footerForm');

footerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = footerForm.querySelector('input[type="email"]').value;
  
  if (!email) {
    showToast('Please enter your email', 'error');
    return;
  }
  
  const submitBtn = footerForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  
  try {
    const response = await fetch('http://localhost:3001/api/newsletter-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      showToast('Thank you for subscribing!', 'success');
      footerForm.reset();
    } else {
      showToast(data.error || 'Failed to subscribe. Please try again.', 'error');
    }
  } catch (error) {
    console.error('Error:', error);
    showToast('An error occurred. Please try again.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
  }
});

// Toast notification function
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// Testimonials Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonials-slide');
const totalSlides = slides.length;

// Create dots
const dotsContainer = document.getElementById('carouselDots');
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

function goToSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Show current slide
  slides[index].classList.add('active');
  
  // Update dots
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  
  currentSlide = index;
}

// Auto-advance carousel
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}, 5000);

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.stat-card, .industry-card, .benefit-card, .result-card, .project-card, .partner-card, .team-card, .client-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Video play button interaction
const videoCard = document.querySelector('.video-card');
if (videoCard) {
  videoCard.addEventListener('click', () => {
    showToast('Video player would open here', 'success');
  });
}

// Number counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const value = entry.target.textContent;
      const numericValue = parseInt(value.replace(/\D/g, ''));
      
      if (!isNaN(numericValue)) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target, numericValue);
      }
    }
  });
}, { threshold: 0.5 });

// Observe stat values
document.querySelectorAll('.stat-value, .result-value').forEach(el => {
  statsObserver.observe(el);
});

// Handle external link clicks in iframe context
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', (e) => {
    // Check if we're in an iframe
    if (window.self !== window.top) {
      e.preventDefault();
      const url = link.getAttribute('href');
      window.parent.postMessage({ type: 'OPEN_EXTERNAL_URL', data: { url } }, '*');
    }
  });
});

console.log('Website loaded successfully!');