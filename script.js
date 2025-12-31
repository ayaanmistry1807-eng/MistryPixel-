// Particles - Reduced for mobile performance
particlesJS("particles-js", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } }, // Less particles
        color: { value: ["#facc15", "#1e40af"] },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#facc15",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5, // Slower = less battery drain
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            ontouch: { enable: true, mode: "repulse" }, // Touch support
            resize: true
        }
    },
    retina_detect: true
});

// AOS - Enable on mobile
AOS.init({
    duration: 1200,
    once: false,
    mirror: true,
    disable: false // Force enable on mobile
});

// Hamburger Menu Toggle - Fixed for mobile touch
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu(e) {
    if (e) e.preventDefault(); // Prevent scroll jump on touch
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('touchstart', toggleMenu); // Extra for some phones

// Smooth Scroll + Close menu on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close menu on mobile after click
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});
