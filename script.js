// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
});

// Scroll Progress Bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.setProperty('--parallax-offset', `${yPos}px`);
    });
});

// Cursor Trail Effect
const cursorTrail = document.createElement('div');
cursorTrail.className = 'cursor-trail';
document.body.appendChild(cursorTrail);

let trail = [];
const trailLength = 10;

for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.opacity = 1 - (i / trailLength);
    dot.style.transform = `scale(${1 - (i / trailLength)})`;
    document.body.appendChild(dot);
    trail.push(dot);
}

document.addEventListener('mousemove', (e) => {
    trail.forEach((dot, index) => {
        setTimeout(() => {
            dot.style.left = e.pageX + 'px';
            dot.style.top = e.pageY + 'px';
        }, index * 20);
    });
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Copyright Year
document.getElementById('year')?.textContent = new Date().getFullYear();

// Page Load Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
    }
    
    // Initialize parallax elements
    document.querySelectorAll('.hero-content, .about-content, .project-card').forEach(el => {
        el.classList.add('parallax');
        el.dataset.speed = '0.2';
    });
});