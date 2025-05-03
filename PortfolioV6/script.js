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

        const infoElement = document.getElementById('Info' + cardId).innerText;
        const codeElement = document.getElementById('Code' + cardId).innerText;

        if (!infoElement || !codeElement) return; // sécurité

        const isCodeButton = button.querySelector('.fa-code');
        const isInfoButton = button.querySelector('.fa-external-link-alt');

        if (isCodeButton) {
            modalTitle.textContent = 'Code du Projet';
            modalContent.innerHTML = `<pre><code>${codeElement}</code></pre>`;
        } else if (isInfoButton) {
            modalTitle.textContent = 'Informations sur le Projet';
            modalContent.innerHTML = `<div>${infoElement}</div>`;
            // modalContent.style.overflowY = 'auto';
        }

        modal.style.display = 'flex';
        isModalVisible = true;
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