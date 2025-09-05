document.addEventListener('DOMContentLoaded', function() {
    // Mettre un surlignement dans le lien actif dans la navigation
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.replace(/\/+$/, '');

    navLinks.forEach(link => {
        // Nettoie le href pour comparer proprement
        const linkPath = link.getAttribute('href').replace(/\/+$/, '');
        if (currentPath.endsWith(linkPath) && linkPath !== '') {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }

        // Ajoute un effet visuel au clic
        link.addEventListener('mousedown', () => {
            link.classList.add('clicked');
        });
        link.addEventListener('mouseup', () => {
            link.classList.remove('clicked');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('clicked');
        });
    });
});