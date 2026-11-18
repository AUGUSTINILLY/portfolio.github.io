
// Année automatique dans le footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("bi-list", "bi-x-lg");
    } else {
        icon.classList.replace("bi-x-lg", "bi-list");
    }
});

// Fermer le menu après sélection
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("bi-x-lg", "bi-list");

    });

});

// Animation au défilement
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});



document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-item, .contact-card"
).forEach(element => {
    observer.observe(element);
});