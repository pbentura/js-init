console.log("Script condition-2 chargé !")

//Décommentez les lignes ci-dessous
// const password = prompt('Entrez un mot de passe')

// Ecrire votre code ici, afficher si le mot de passe est considéré comme fort ou non à l'aide de console.log('votre réponse')
const mdp = prompt('Mot de passe')
if(mdp.length>=8 && mdp.includes('@') && mdp.includes('_') && mdp.charAt(5)==='T'){
    console.log('mdp FORT')
}
else{
    console.log('mdp NUL')
}