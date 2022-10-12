//créer un objet 
let data = {
    "age": 22
}
//ajouter une paire clé / valeur à obj existant
data["ville"] = "Paris"

//Récupérer toutes les clés de mon objet
let keys = Object.keys(data)
console.log(keys)

//Object.entries() -> tableau avec les pairs (clé/valeur)
let pairs = Object.entries(data)
console.log(pairs) //tableau de pairs

//rappel pas de tableau[-1]
//tableau[tableau.length-1]

//fusion d'objet JS
let data1 = {"age": 22, "nom": "Paul"}
let data2 = {"ville": "Paris"}
let data3 = Object.assign({}, data1, data2)
//accolade vide {} pour pas que data1 ou data2 
//soient modifiés
data3["poulet"] = "oui"
console.log(data3)
console.log(data1)




