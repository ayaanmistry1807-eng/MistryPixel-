// Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: ["#facc15", "#1e40af"] },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: "#facc15", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1.5 }
    },
    interactivity: { events: { onhover: { enable: true, mode: "repulse" }, ontouch: { enable: true, mode: "repulse" } } },
    retina_detect: true
});

// AOS
AOS.init({ duration: 1200, once: false, mirror: true });

// Hamburger & Scroll
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
