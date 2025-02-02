// Constantes qui permettent de récupérer les boutons oui et non
const NoButton = document.querySelector('.no');
const YesButton = document.querySelector('.yes');

// Voici les messages que le bouton non va afficher dans cet ordre :
const Messages = [
    "T'es sûre ?",
    "Vraiment sûre ?",
    "Tu devrais dire oui",
    "S'il te plait...",
    "Réfléchis-y",
    "Si tu dis non, je serais triste...",
    "Tu ne sais pas ce que tu loupes",
    "Même contre des papouilles ?",
    "Ok c'est bon tu as gagné ...",
    "C'est une blague dis oui ! ❤️"
];

// Ecoute les boutons en question et active les fonctions au click
YesButton.addEventListener('click', handleYesClick);
NoButton.addEventListener('click', handleNoClick);

// Variable qui permet de forcer la définition de messageIndex à 0
let messageIndex = 0;

// Fonction qui permet de changer le texte du bouton non et de changer la taille du texte du bouton oui
function handleNoClick() {
    // Constante qui permet de récupérer la taille du texte du bouton oui
    const currentSize = parseFloat(window.getComputedStyle(YesButton).fontSize);
    // Condition qui permet de ne pas dépasser la longueur du tableau messages et qui permet de changer le texte du bouton non
    if (messageIndex < Messages.length) {
        NoButton.textContent = Messages[messageIndex];
        messageIndex++;
    }
    // Augmente la taille du texte du bouton oui en le doublant à chaque clic
    YesButton.style.fontSize = `${currentSize * 0.1}em`;
}
// Fonction qui permet de rediriger l'utilisateur vers la page yes.html
function handleYesClick() {
    window.location.href = "views/yes.html";
}