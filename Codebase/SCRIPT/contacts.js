document.addEventListener('DOMContentLoaded', function() {
    // Mettre un surlignement dans le lien actif dans la navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (window.location.pathname.endsWith(linkPath)) {
            link.classList.add('active');
        }
    });
});