document.addEventListener('DOMContentLoaded', function() {
    //Mettre un surlignement dans le lien active 
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.style.textDecoration = 'underline';
            link.style.fontWeight = 'bold';
        }
    });
});
