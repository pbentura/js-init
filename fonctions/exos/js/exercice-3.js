function lePlusLongMot(phrase){
    let mots = phrase.split(' ')
    let result = mots[0]
    for (let mot of mots){
        if (result.length<mot.length){
            result = mot
        }
    }
    return result
}
console.log(lePlusLongMot("la barre ovomaltine cest de le dynamique"))