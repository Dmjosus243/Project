document.addEventListener('DOMContentLoaded', function() {
    function showWelcome() {
        // Cinématique de bienvenue
        const welcomeDiv = document.createElement('div');
        welcomeDiv.textContent = "Bienvenue sur Langage Bags Web !";
        welcomeDiv.style.position = 'fixed';
        welcomeDiv.style.top = '50%';
        welcomeDiv.style.left = '50%';
        welcomeDiv.style.transform = 'translate(-50%, -50%) scale(0.85)';
        welcomeDiv.style.background = 'rgba(45,62,90,0.97)';
        welcomeDiv.style.color = '#f0db4f';
        welcomeDiv.style.padding = '2rem 3rem';
        welcomeDiv.style.borderRadius = '18px';
        welcomeDiv.style.fontSize = '2rem';
        welcomeDiv.style.fontWeight = 'bold';
        welcomeDiv.style.boxShadow = '0 8px 32px rgba(0,0,0,0.22)';
        welcomeDiv.style.zIndex = '9999';
        welcomeDiv.style.opacity = '0';
        welcomeDiv.style.transition = 'opacity 0.8s, transform 0.8s';
        welcomeDiv.style.textShadow = '0 0 16px #f0db4f88, 0 2px 8px #2d3e5a88';

        document.body.appendChild(welcomeDiv);

        // Apparition
        setTimeout(() => {
            welcomeDiv.style.opacity = '1';
            welcomeDiv.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);

        // Disparition après 2,5 secondes
        setTimeout(() => {
            welcomeDiv.style.opacity = '0';
            welcomeDiv.style.transform = 'translate(-50%, -50%) scale(0.85)';
            setTimeout(() => {
                welcomeDiv.remove();
            }, 800);
        }, 2500);
    }

    function highlightActiveLink() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (window.location.pathname.endsWith(linkPath)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    highlightActiveLink();
    showWelcome();

    // Pour gérer le retour sur la page via l'historique (cache navigateur)
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            showWelcome();
        }
    });
});