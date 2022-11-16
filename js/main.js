// let myArray = [12, 23, 34, 45, 56, 67, 78, 89, 90];


let lis = document.querySelectorAll("li");
let lis2 = document.getElementsByTagName("li");

console.log(lis);
console.log(lis2);

// Créer une boucle simple
// Créez une boucle qui affiche dans la console les entiers de 1 à 10. 
// Adaptez le code en créant une variable min et une variable max pour les valeurs des entiers (en remplacement de 1 et 10).
let min=0;
let max=10;
console.log("Créer une boucle simple");
for(let i=min; i<=max; i++){
    console.log(i);
}


// Ecrivez une boucle qui affiche dans la console les valeurs successives de myArray. 
//Essayez plusieurs méthodes. 
// Si vous ne l'avez déjà fait, utilisez la longueur du tableau obtenue par myArray.length.
let myArray = [12, 23, 34, 45, 56, 67, 78, 89, 90];
console.log("Parcourir un tableau");

for(let i=0; i<=10; i++){
    console.log(myArray[i]);
}

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}


// En partant du même tableau que précédemment, afficher un élément sur deux dans la console.
console.log("Parcourir un élément sur deux");
for(let i=0; i<myArray.length; i=i+2){
    console.log(myArray[i]);
}



// Créez une variable myH1 contenant la balise h1 du fichier index.html. 
// Modifiez la couleur du texte de la balise en rouge.
console.log("Modifier le style d'un élément");

let myH1 = document.getElementsbyTagname[0]("h1");



// Créez une variable lis contenant les éléments li de la page. 
// Vous pourrez utiliser document.getElementsByTagName("li") ou document.querySelectorAll("li"). 
// Cette variable lis doit être une HTMLCollection ou NodeList.
//  Parcourez la liste des éléments et modifier la couleur de chaque élément.
console.log("Modifier des éléments du DOM");

let myH1 = document.createElement("h1");



// Avec une boucle while, afficher les nombres entiers de 1 à 10.
console.log("while...");