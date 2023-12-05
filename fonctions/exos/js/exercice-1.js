// Définir la fonction retournerMotsInverses
function retournerMotsInverses(phrase) {
    return phrase.split('').reverse().join()
}

// Exemple d'utilisation
const phraseOriginale = "Bonjour à tous";
const resultat = retournerMotsInverses(phraseOriginale);
console.log(resultat); // Devrait afficher "ruojnoB à suot"