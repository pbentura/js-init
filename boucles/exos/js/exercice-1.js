let decompte = prompt('saisissez un nombre :')
if (decompte<0){
    console.error('Le nombre doit être superrieur à zero')
}
else {
    while (decompte !== 0) {
        decompte--
        console.log(decompte)
    }
}

