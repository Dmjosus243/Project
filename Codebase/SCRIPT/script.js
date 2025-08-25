document.addEventListener('DOMContentLoaded', function() {
    // Mettre un surlignement dans  le lien actif dans la navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        }
    });
});7
