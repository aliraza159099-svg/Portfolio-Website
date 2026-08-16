// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && hamburger && !e.target.closest('.navbar')) {
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
        
        if (lightboxImage && lightbox) {
            lightboxImage.src = imageUrl;
            lightboxImage.alt = altText;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close lightbox functions
const closeLightbox = () => {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
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
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.style.color = 'var(--text-secondary)');
                    link.style.color = 'var(--accent-light)';
                }
            }
        }
    });
};

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

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== BUTTON RIPPLE EFFECT (FIXED) =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Clean up any existing ripple spans first
        const existingRipples = this.querySelectorAll('.ripple');
        existingRipples.forEach(r => r.remove());

        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        // Auto-remove ripple DOM node after animation finishes
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===== CURSOR EFFECT =====
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

// ===== ACCESSIBILITY - FOCUS MANAGEMENT =====
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
                if (img.dataset.src) img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===== PREFERS REDUCED MOTION CHECK =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
}

console.log('Portfolio script loaded successfully! 🚀');
