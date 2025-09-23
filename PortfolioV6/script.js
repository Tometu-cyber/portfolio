const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.modal .close');
let isModalVisible = false;

// On sélectionne tous les boutons "Voir le code" et "Voir le projet"
const allButtons = document.querySelectorAll('.project-links a');
allButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const card = button.closest('.project-card'); // remonte à la carte parente
        const cardId = card.id.replace('card-', ''); // récupère ce qu'il y a après "card-"
        const infoElement = document.getElementById('Info' + cardId);
        const codeElement = document.getElementById('Code' + cardId);
        
        const isCodeButton = button.querySelector('.fa-code');
        const isInfoButton = button.querySelector('.fa-external-link-alt');
        
        if (isCodeButton) {
            // Vérifier s'il y a un lien GitHub dans l'élément Code
            const githubLink = isCodeButton.getAttribute('data-github-link');
            if (githubLink) {
                // Rediriger vers le lien GitHub
                window.open(githubLink, '_blank');
                return;
            }
        } else if (isInfoButton) {
            if (!infoElement) return; // sécurité
            
            modalTitle.textContent = 'Informations sur le Projet';
            modalContent.innerHTML = `<div>${infoElement.innerHTML}</div>`;
            
            modal.style.display = 'flex';
            isModalVisible = true;
        }
    });
});

// Fermeture du modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    isModalVisible = false;
});

// Fermer en cliquant en dehors
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
        isModalVisible = false;
    }
});

// Cacher les contenus dans les cartes
document.querySelectorAll('.Info, .Code').forEach(el => el.style.display = 'none');

// Gestion du menu mobile
const hamburger = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Optionnel : changer l'icône du hamburger
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fermer le menu mobile quand on clique sur un lien
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});