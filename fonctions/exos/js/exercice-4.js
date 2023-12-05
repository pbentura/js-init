function nombreVoyelle(chaine){
    const voyelles = 'aeiouyAEIOUY'
    let compteVoyelle = 0
    for (let lettre of chaine){
        if (voyelles.indexOf(lettre)!==-1){
            compteVoyelle+=1
        }
    }
    return compteVoyelle
}
console.log(nombreVoyelle("pinou"))