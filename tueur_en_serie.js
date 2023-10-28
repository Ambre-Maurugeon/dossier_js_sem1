console.log("Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt. Une équipe de choc est présente pour le neutraliser.")

class killer{
    constructor(name,hp){
    this.name=name
    this.hp=hp
    }
}

let tueur= new killer("Jason",100)

// le programme n'affiche pas d'HP neg du tueur
function pas_de_pv_neg (){
    if (tueur.hp<0){
        console.log ("Le tueur perd tous ses HP, le coup a été plus que mortel.")
    }
    else 
        if(tueur.hp==0){
        console.log ("Le tueur n'a plus d'HP.")
        }
    
        else 
            if (tueur.hp>0){
        console.log("Il reste",tueur.hp, "HP au tueur.")
        }
}

class survivants{
    constructor(name, carac, p_mourir, p_degats, p_md, statut){
    this.name=name
    this.carac = carac
    this.p_mourir=p_mourir
    this.p_degats=p_degats
    this.p_md=p_md
    this.statut=statut
    }
    Getp_mourir(){
        // Probabilité de mourir
        let a =  this.p_mourir > Math.random() 
        if (a) {
        console.log (tueur.name + " s'est empressé de tuer " + this.name + ", " + this.carac +".")
        this.statut="dcd"
        }
        return a
    }

    Getp_degats(){
        // Il ne meurt pas et inflige des dégâts
        let b = Math.random() < this.p_degats 
        if (b){
            tueur.hp-=10
            console.log(this.name + " esquive et inflige 10 au tueur.")
            pas_de_pv_neg()

            if (tueur.hp<=0) {
                console.log(this.name + " a achevé " + tueur.name + ". Le tueur est décédé sous les coups des survivants.") 
            }
        }
        return b
    }

    Getp_md(){  
        //vivant--> dégâts --> décédé 
        let c = Math.random() < this.p_md 
        if (c) {
            tueur.hp-=15
            console.log(this.name + this.carac + " a infligé 15 au tueur.")
            pas_de_pv_neg()
            this.statut="dcd"

            if (tueur.hp<=0) {
                console.log(this.name + ", " + this.carac + ", a entrainé " + tueur.name + " dans sa chute. Le tueur est ainsi décédé sous les coups des survivants.") 
                }
        }
    }
    
}

// Noms et Caractéristiques aléatoires

let random_names = ["Baptiste.a Leroux","Jean-Baptiste de Saint Jean","Pépé","Thomate","Jacques Line"]
let random_caracs = ["en roue libre","le fils à Papa","la Totally Spies", "le.la geekos", "le.la camionneur.se"]


function getrd_element(min, max) {
    return Math.random() * (max - min) + min
}  

function getrd_name(){
let a = Math.floor(getrd_element(0, random_names.length-1))
let b = random_names[a]
random_names.splice(a,1)
return b
}
function getrd_carac(){
let c = Math.floor(getrd_element(0, random_caracs.length-1))
let d = random_caracs[c]
random_caracs.splice(c,1)
return d
}


let Survivant1 = new survivants(getrd_name(),getrd_carac(),0.5,0.3,0.2, "vivant")
let Survivant2 = new survivants(getrd_name(),getrd_carac(),0.3,0.5,0.2, "vivant")
let Survivant3 = new survivants(getrd_name(),getrd_carac(),0.1,0.7,0.2, "vivant")
let Survivant4 = new survivants(getrd_name(),getrd_carac(),0.3,0.5,0.2, "vivant")
let Survivant5 = new survivants(getrd_name(),getrd_carac(),0.1,0.5,0.2, "vivant")



//Déroulement du tour d'un survivant

function Tour_du_survivant(ce_survivant){
    if(ce_survivant.statut == "vivant"){

        if (ce_survivant.Getp_mourir()){
            console.log(ce_survivant.name + ", " + ce_survivant.carac + ", est violemment décédé.")
        }
        else{  
            if (ce_survivant.Getp_degats()){
                console.log(ce_survivant.name +  ", "  + ce_survivant.carac + ", est toujours en vie.")
            }
            else{
                ce_survivant.Getp_md()
                console.log(ce_survivant.name + ", " + ce_survivant.carac + ", est mort en faisant des degats.")
            }
        }
    }
}


// Jason vs TOUS les survivants
// Jason est en vie ou au moins un survivant est en vie 
while (tueur.hp > 0 && (Survivant1.statut=="vivant" ||
                        Survivant2.statut=="vivant" || 
                        Survivant3.statut=="vivant" || 
                        Survivant4.statut=="vivant" || 
                        Survivant5.statut=="vivant") ){

    Tour_du_survivant(Survivant1)  

    if (tueur.hp > 0) {
        Tour_du_survivant(Survivant2)
    }

    if (tueur.hp > 0) {
        Tour_du_survivant(Survivant3)
    }
    
    if (tueur.hp > 0) {
        Tour_du_survivant(Survivant4)
    }
    if (tueur.hp > 0) {
        Tour_du_survivant(Survivant5)
    }
}


//Bilan des décès
let Array_perso=[Survivant1,Survivant2,Survivant3,Survivant4,Survivant5]

if( Survivant1.statut=="dcd" &&
    Survivant2.statut=="dcd" &&
    Survivant3.statut=="dcd" &&
    Survivant4.statut=="dcd" &&
    Survivant5.statut=="dcd" ) {

    console.log("Le tueur les a tous achevés.")
}
else{
    let compteur = 0
    for(i=0;i<5;i++){
        if (Array_perso[i].statut=="vivant"){
            console.log(Array_perso[i].name + ", " + Array_perso[i].carac + ", a survécu.")
            compteur+=1
        }
        else{
            console.log("On remercie " + Array_perso[i].name + ", " + Array_perso[i].carac + ", pour sa participation. Paix à son âme.")
        }
    }
    console.log("Il reste " + compteur + " survivant.s.")
    
}