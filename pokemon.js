
class Pokemon {
    constructor(name, attack, defense,hp, luck) {
        this.name = name
        this.attack = attack 
        this.defense = defense 
        this.hp = hp 
        this.luck = luck 
    }
    isLucky(){
        return Math.random() < this.luck
    }
    attackPokemon(defenseur){
        if(this.isLucky()){
        let dmg = this.attack - defenseur.defense
            if (dmg <=0){
                console.log ("Le coup porté a été inefficace.")
            } else {
                defenseur.hp -= dmg
                console.log (dmg + " dégâts ont été infligés.")
                console.log("Il reste " + defenseur.hp + " HP à " + defenseur.name + ".")
            }
        } else{
            console.log("L'attaque a échoué.")
        }
    }
}


let Pok1 = new Pokemon ("Dracaufeu", 25, 12, 55,0.4) 
let Pok2 = new Pokemon ("Carabaffe", 15,20,50,0.5) 


while (Pok1.hp > 0  && Pok2.hp > 0){
    Pok1.attackPokemon(Pok2) 
    if (Pok2.hp<=0) {
        console.log(Pok2.name + " est KO.")
        break
    }

    Pok2.attackPokemon(Pok1)
    if (Pok1.hp<=0) {
        console.log(Pok1.name + " est KO.")
        break
    }
}
