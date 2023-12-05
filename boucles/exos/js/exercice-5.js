console.log("Script Boucle 5 chargé !")

const staff = [
    {name:"Marc", gender:"M"},
    {name:"Sophie", gender:"F"},
    {name:"Eva", gender:"F"},
    {name:"Aaron", gender:"M"},
    {name:"Pierre", gender:"M"},
    {name:"Martine", gender:"F"},
    {name:"Chloé", gender:"F"},
    {name:"Hubert", gender:"M"},
    {name:"Aurore", gender:"F"},
]
const femmes = staff.filter(personne => personne.gender === "F")
const femmesPrenom = femmes.map(personne => personne.name)
const hommes = staff.filter(personne => personne.gender === "M")
const hommePrenom = hommes.map(personne => personne.name)
console.log(femmesPrenom)
console.log(hommePrenom)