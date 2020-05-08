// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Ajouter l'heure , minite , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
function demarrerLaMontre() {
    //Extraire l'heure actuel à l'aide de l'objet Date()

    let heurActuel = new Date();

    let sec = heurActuel.getSeconds();
    let secDeg = ((sec / 60) * 360);

    let min = heurActuel.getMinutes();
    let minDeg = ((min / 60) * 360) + ((sec / 60) * 6);


    let hr = heurActuel.getHours();
    let hrDeg = ((hr / 12) * 360) + ((min / 60) * 30);


    AIGUILLESEC.style.transform = 'rotate(' + secDeg + 'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + minDeg + 'deg)';
    AIGUILLEHR.style.transform = 'rotate(' + hrDeg + 'deg)';

}
demarrerLaMontre();

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);