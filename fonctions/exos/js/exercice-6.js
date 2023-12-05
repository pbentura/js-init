function compteLettre(mots,lettre){
    let letterCount = 0
    for (let letter of mots){
        if (letter === lettre){
            letterCount += 1
        }
    }
    return letterCount
}
console.log(compteLettre(prompt("dans le mot "),prompt("combien y'a t il de ")))
