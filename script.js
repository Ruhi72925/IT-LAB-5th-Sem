// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-based Animation for Project Cards
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop - window.innerHeight < -100) {
            card.classList.add('visible');
        }
    });
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
    }
});