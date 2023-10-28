class Personnage {
    constructor(name, santé_mentale){
        this.name = name
        this.santé_mentale = santé_mentale
    }
}
let perso = new Personnage ("John", 10)

let musiques = ["Anissa - Wejdene","Je Dis Aime (.) - M", "Burgers - Les Jones","House of the Rising Sun - The Animals", "Roxanne - The Police"]
function getrd_musique(min, max) {
    return Math.random() * (max - min) + min
}  


console.log(perso.name + " essaie de rentrer chez lui en taxi. Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.")

let feux_rouges = 0
let changements = 0

while (feux_rouges <30 && perso.santé_mentale>0){
    feux_rouges+=1
    let feux_rouges_restants = 30 - feux_rouges
    console.log ("Le taxi s'arrête au feu. Il reste encore " + feux_rouges_restants + " feux rouges à passer.")

    // A la radio

    let a = Math.floor(getrd_musique(0, musiques.length))
    let rd_musique = musiques[a]
    console.log (rd_musique, "passe à la radio.")

    // Au cours du Trajet
    if (a == 0){
    console.log(perso.name + " change de taxi.")
        if (a == 0){
            perso.santé_mentale -= 1
            console.log(perso.name + " a perdu 1 de santé mentale. Il lui en reste " + perso.santé_mentale + ".")
            changements +=1
        }
    }
}

// Fin 1 : Sa santé mentale tombe à 0
if (perso.santé_mentale ==0){
    console.log("Explosion !!!")
}

//Fin 2 : Il a passé les 30 feux rouges
else{
    console.log(perso.name + " est arrivé à destination. Il lui a fallu " + changements +" changements de taxis pour y arriver.")
}




