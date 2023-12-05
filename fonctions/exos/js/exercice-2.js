function premiereLettreMaj(chaine){
    const firstletter = chaine.charAt(0).toUpperCase()
    const motSansPremiereLettre = chaine.slice(1)
    return firstletter + motSansPremiereLettre
}
console.log(premiereLettreMaj('manger'))

function majuscule(phrase){
    let array1 = phrase.split(' ')
    let newarray1 = []

    for(let word of array1){
        let firstletter = word.charAt(0).toUpperCase()
        let motSansPremiereLettre = word.slice(1)
        let mot = firstletter + motSansPremiereLettre
        newarray1.push(mot)
    }
    return newarray1.join(' ')
}
console.log(majuscule(prompt('Saisissez une phrase')))

