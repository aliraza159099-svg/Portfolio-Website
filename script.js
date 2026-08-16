// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== LIGHTBOX FUNCTIONALITY =====
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const viewResultButtons = document.querySelectorAll('.view-result');

viewResultButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageUrl = button.dataset.image;
        const altText = button.dataset.alt;
        
        lightboxImage.src = imageUrl;
        lightboxImage.alt = altText;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and content
document.querySelectorAll('.skill-category, .project-card, .result-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const highlightNavLink = () => {
    const scrollPos = window.scrollY + 100;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.style.color = 'var(--text-secondary)');
                link.style.color = 'var(--accent-light)';
            }
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== BUTTON RIPPLE EFFECT =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Remove existing ripple
        const existing = this.querySelector('.ripple');
        if (existing) existing.remove();

        this.appendChild(ripple);
    });
});

// ===== CURSOR EFFECT (optional enhancement) =====
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

if (!isTouchDevice()) {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
}

// ===== FORM VALIDATION (for future contact form) =====
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== ACCESSIBILITY - FOCUS MANAGEMENT =====
// Improve keyboard navigation
document.querySelectorAll('button, a[href], input, textarea').forEach(el => {
    el.addEventListener('focus', function () {
        this.style.outline = '2px solid var(--accent-light)';
        this.style.outlineOffset = '2px';
    });

    el.addEventListener('blur', function () {
        this.style.outline = 'none';
    });
});

// ===== LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===== HANDLE MISSING CONTACT LINKS =====
document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.querySelector('.email-btn');
    const linkedinBtn = document.querySelector('.linkedin-btn');
    const githubBtn = document.querySelector('.github-btn');

    if (emailBtn && emailBtn.getAttribute('href').includes('your.email')) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Please update your email in the HTML file (line with your.email@example.com)');
        });
    }

    if (linkedinBtn && linkedinBtn.getAttribute('href').includes('yourprofile')) {
        linkedinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Please update your LinkedIn URL in the HTML file');
        });
    }

    if (githubBtn && githubBtn.getAttribute('href').includes('yourprofile')) {
        githubBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Please update your GitHub URL in the HTML file');
        });
    }
});

// ===== PREFERS REDUCED MOTION CHECK =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// ===== PERFORMANCE - DEBOUNCE SCROLL EVENTS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedHighlightNavLink = debounce(highlightNavLink, 100);
window.addEventListener('scroll', debouncedHighlightNavLink);

console.log('Portfolio loaded successfully! 🚀');
