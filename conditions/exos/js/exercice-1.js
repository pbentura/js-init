console.log("Script condition-1 chargé !")

//Décommentez les lignes ci-dessous
//const currentYear = 2023
//const birthyear = prompt('Quel est votre année de naissance ?')


// Ecrire votre code ici, afficher le jeu video à l'aide de console.log('votre réponse')
const ageJoueur = prompt('quel âge avez vous')
if(ageJoueur<=13){
    console.log('fortnite')
}
else if(ageJoueur>13 && ageJoueur<18){
    console.log('call of duty ou fifa 23')
}
else{
    console.log('diablo')
}