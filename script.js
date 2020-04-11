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

    const heurActuel = new Date();

    let sec = heurActuel.getSeconds();
    let secDeg = sec * 6;
    AIGUILLESEC.style.transform = 'rotate(' + secDeg + 'deg)';

    let min = heurActuel.getMinutes();
    let minDeg = (min * 6) + (0.1 * sec);
    AIGUILLEMIN.style.transform = 'rotate(' + minDeg + 'deg)';


    let hr = heurActuel.getHours();
    let hrDeg = (hr * 30) + (0.5 * min);
    AIGUILLEHR.style.transform = 'rotate(' + hrDeg + 'deg)';

}
demarrerLaMontre();

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);