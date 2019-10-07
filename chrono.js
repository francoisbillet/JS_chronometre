var boutonElt = document.getElementById("bouton");

var compteurElt = document.getElementById("compteur");
var secondes = compteurElt.textContent;
var intervalId = null;

function modifierCompteur() {
    var secondes = Number(compteurElt.textContent);
    compteurElt.textContent = secondes + 1;
}

boutonElt.addEventListener("click", function() {
    if (boutonElt.textContent === "Démarrer") {
        boutonElt.textContent = "Arrêter";
        intervalId = setInterval(modifierCompteur, 1000);
    }
    else {
        boutonElt.textContent = "Démarrer";
        clearInterval(intervalId);
    }
});