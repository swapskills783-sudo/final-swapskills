// Sample skills data
const skills = [
    { name: "Web Development", description: "Learn HTML, CSS, JavaScript and more", category: "tech", time: 2 },
    { name: "Graphic Design", description: "Master Photoshop, Illustrator and design principles", category: "art", time: 1.5 },
    { name: "Self Defense", description: "Basic self defense techniques for personal safety", category: "defense", time: 1 },
    { name: "Cooking", description: "Learn to cook delicious meals from scratch", category: "diy", time: 2 },
    { name: "Yoga", description: "Yoga for flexibility and stress relief", category: "sports", time: 1 }
];

// Generate skill cards
const skillsGrid = document.getElementById('skillsGrid');

skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <p class="time">Time required: ${skill.time} hours/session</p>
            `;
    skillsGrid.appendChild(skillCard);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Update active class
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// Light animation on mouse move
document.addEventListener('mousemove', function (e) {
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => {
        // Randomize position with some offset
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;

        light.style.left = (e.pageX + offsetX) + 'px';
        light.style.top = (e.pageY + offsetY) + 'px';

        // Show and then hide the light
        light.style.opacity = '0.5';
        setTimeout(() => {
            light.style.opacity = '0';
            light.style.transition = 'opacity 1.5s';
        }, 100);
    });
});

// Add hover effect to all interactive elements
const interactiveElements = document.querySelectorAll('.btn, .skill-card, .step, .benefit, .testimonial');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    element.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});