alert("je suis là")

// Les conditions

var a = 4
var b = 4
var c = 3

if (a == b){
    console.log ("c'est égal")
}

if (c<b && a+c != 3 )
{
    console.log ("ok") 
} 
else {
    console.log("raté")
}



switch (a)
 {
    case b :
        console.log("égal à b")
        break
    case c :
        console.log("égal à c")
        break
    default :
        console.log("égal à rien")
 }


//Les boucles

 let a = 6
 for(let i=0; i<=a ; i++) {
    console.log("oklm")
 }

 
 let a=3
 while (a<9) {
    a++
    if(a==7){
        continue
    }
    if (a==8) {
        break
    }
    console.log(a)
}

 
for (let i=1; i<=100; i++)
{
    if(i%15==0) {
        console.log("fizzbuzz")
    }
    if (i%5==0) {
        console.log("Buzz") 
    }   
    if (i%3==0) {
        console.log ("Fizz")
    }
    
}

while (i<=33){   
    if (i==17) {
        i+=10
    }
    if (i==33) {
        console.log("réussi")
    }
    console.log(i)
    i++
}



var a = "Jean"
var b = "Paul"
var result = checkName (a,b)

function checkName (p1,p2){
    if(p1===p2){
    return true
} else {
    return false
    }
}
console.log(result)


//Les tableaux
let names = [] 
names.push("Vincent","Paul","Arthur")

names.forEach(function (name){
    console.log(name + " va à la pêche")
})


//Les objets

let student = {
    name : "Mattieu",
    favfood : "Tiramisu",
    city : "Paris"
}
let result = 0 

let valeurs = Object.values(student)

valeurs.forEach(function (valeur) { 
    result +=valeur.length
    console.log (result)
    if (result %2 == 0){
        console.log ("pair")
    }
    else {
        console.log ("impair")
    }
})

//Les class

class Guerrier {
    constructor(attack, defense,hp) {
        this.attack = attack 
        this.defense = defense 
        this.hp = hp 
    }
    displayAttack(){
        console.log(this.attack)
    }
    getDefense(){
        console.log(this.defense)
    }
}

class Mage {
    constructor(attack) {
        this.attack = attack 
    }
    getAttack(){
        console.log(this.attack)
    }
}

let mat = new Guerrier (10,15,50)
mat.displayAttack()

let arthur = new Mage (15)
arthur.getAttack()


// Debug : Correction du programme

let users = ["Steph", "Gaia", "Etienne", "Michel", "Roberto","Julie"]

function countCharacter(value){
    return value.length
}

users.forEach(user=>{
    if (countCharacter(user) > 5){
        console.log("c'est un prénom lg de plus de 5 lettres.")
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
})





