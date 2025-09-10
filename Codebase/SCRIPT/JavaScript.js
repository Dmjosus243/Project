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

    // Création d'un nouvel élément pour un message 
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Bienvenue sur La Documentation JavaScript !';
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '50%';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translate(-50%, -50%) scale(0.95)';
    welcomeMessage.style.background = 'rgba(45,62,90,0.97)';
    welcomeMessage.style.color = '#f0db4f';
    welcomeMessage.style.padding = '2rem 3rem';
    welcomeMessage.style.borderRadius = '18px';
    welcomeMessage.style.fontSize = '2rem';
    welcomeMessage.style.fontWeight = 'bold';
    welcomeMessage.style.boxShadow = '0 8px 32px rgba(0,0,0,0.22)';
    welcomeMessage.style.zIndex = '9999';
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transition = 'opacity 0.8s, transform 0.8s';
    welcomeMessage.style.textShadow = '0 0 16px #f0db4f88, 0 2px 8px #2d3e5a88';

    document.body.appendChild(welcomeMessage);

    // Apparition animée
    setTimeout(() => {
        welcomeMessage.style.opacity = '1';
        welcomeMessage.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);

    // Disparition après 2,5 secondes
    setTimeout(() => {
        welcomeMessage.style.opacity = '0';
        welcomeMessage.style.transform = 'translate(-50%, -50%) scale(0.95)';
        setTimeout(() => {
            welcomeMessage.remove();
        }, 800);
    }, 2500);
});