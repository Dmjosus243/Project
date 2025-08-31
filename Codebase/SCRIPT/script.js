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

// Cinématique de bienvenue
document.addEventListener('DOMContentLoaded', function() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = "Bienvenue sur Langage Bags Web !";
    welcomeDiv.style.position = 'fixed';
    welcomeDiv.style.top = '50%';
    welcomeDiv.style.left = '50%';
    welcomeDiv.style.transform = 'translate(-50%, -50%)';
    welcomeDiv.style.background = 'rgba(45,62,90,0.97)';
    welcomeDiv.style.color = '#f0db4f';
    welcomeDiv.style.padding = '2rem 3rem';
    welcomeDiv.style.borderRadius = '18px';
    welcomeDiv.style.fontSize = '2rem';
    welcomeDiv.style.fontWeight = 'bold';
    welcomeDiv.style.boxShadow = '0 4px 32px rgba(0,0,0,0.18)';
    welcomeDiv.style.zIndex = '9999';
    welcomeDiv.style.opacity = '0';
    welcomeDiv.style.transition = 'opacity 1s';

    document.body.appendChild(welcomeDiv);

    // Apparition
    setTimeout(() => {
        welcomeDiv.style.opacity = '1';
    }, 100);

    // Disparition après 2,5 secondes
    setTimeout(() => {
        welcomeDiv.style.opacity = '0';
        setTimeout(() => {
            welcomeDiv.remove();
        }, 1000);
    }, 2500);
});