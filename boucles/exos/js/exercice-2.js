console.log("Script Boucle é chargé !")
const guess = Math.floor(Math.random() * 10);

while(true) {
    const chiffre = prompt('Votre chiffre') 
    if (chiffre > guess) {
        console.log('Plus petit')
    } else if (chiffre < guess) {
        console.log('Plus grand')
    } else {
        break
    }
}
console.log('Bravo !')
