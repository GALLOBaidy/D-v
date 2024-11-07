// function maFonction(obligatoire, facultatif) {
//   // Affiche 'Argument 1 : Paul'
//   console.log("Argument 1 : " + obligatoire);
//   // 1er appel : erreur car 2ème argument non envoyé
//   // 2ème appel : affiche 'Argument 2 (facultatif) : Anne'
//   console.log("Argument 2 (facultatif) : " + facultatif);
// }
// maFonction("Paul"); // 1er appel
// maFonction("Paul", "Anne"); // 2ème appel

// function maFonction(obligatoire, facultatif)
// {
// if (typeof facultatif == 'undefined')
// {
// facultatif = 'Anne';
// }
// // Affiche 'Argument 1 : Paul'
// console.log('Argument 1 : '+obligatoire);
// // 1er appel : erreur car 2ème argument non envoyé
// // 2ème appel : affiche 'Argument 2 (facultatif) : Anne'
// console.log('Argument 2 (facultatif) : '+facultatif);
// }
// maFonction('Paul'); // 1er appel
// maFonction('Paul', 'Anne'); // 2ème appel

// function maFonction() {
//     var plop1 = 123;
//     return plop1;
// }
// function maFonction2() {
//     plop2 = 456;
// }
// 9
// plop1 = maFonction();
// console.log("fonction 1 / plop1 : " + plop1);
// maFonction2();
// console.log("mafonction2 > plop2 : " + plop2);

// var x = 0;
// while (x < 5) {
//     console.log("x : " + x);
//     x++;
// }

// function boucle(x) {
//     if (x >= 10) {
//         return;
//     }
//     console.log("x : " + x);
//     boucle(x + 1); // appel récursif
// }
// boucle(0); // appel initial de la fonction

//Exo 1 : Créer les 2 fonctions suivantes :
// • produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
// • afficheImg(image) qui affiche l’image passée en paramètre.

// Déclaration de la fonction cube() :
// var cube = function (nombre) {
//   var resultat = nombre * nombre * nombre;
//   console.log("Le cube de " + nombre + " est égal à " + resultat);
// };
// // Appel de la fonction cube() :
// var k = cube(2);

// //Déclaration de la fonction produit ():
// function produit(x, y) {
//   console.log("Le produit de " + x + " x " + y + " est égal à " + x * y);
// }

// // Appel de la fonction produit() :
// produit(3, 7);

//Afficher le papillon

//On crée la fonction en mettant l'image dedans
// function papillon(){
//     document.write('<img src="img/papillon.jpg" alt="description papillon">');
// }

//On affiche l'image en appellant la fonction
// papillon();

// // Exo 2 : Ecrivez une fonction qui affiche une table de multiplication.
// Votre fonction doit prendre un paramètre qui permet d’indiquer quelle table afficher.
// Par exemple TableMultiplication(7)doit afficher :
// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21

//Déclaration de la fonction

// function multiplication(x) {
//   var n = 1;
//   var resultat;
//   while (n <= 10) {
//     resultat = n * x;
//     console.log(n + " x " + x + " = " + resultat);
//     n++;
//   }
// }

//On appelle la fonction multiplication en lui donnant un argument (5) et ça nous renvoit la table de multiplication de 5 (de 1 à 10)
// multip lication(5);

// //Exo 3 : Ecrivez une fonction qui prend deux paramètres :
// ▪ phrase de type string
// ▪ lettre de type string
// La fonction compte le nombre de fois ou lettre apparaît dans phrase.


//Les deux premières variables déclarés demandent à l'utilisateur de saisir d'abord une phrase ensuite de déterminer la lettre qu'il veut compter

// let _phrase = prompt("Saisir une phrase");
// let _lettre = prompt("Choisir une lettre");


//Le .length permet de voir combien de lettre il y a dans la phrase
//Le [i] permet de considérer la variable phrase comme un tableau
// Le return permet de renvoyer la variable count; c'est à dire le nombre de lettre qui a été compté
// function nbLtr(phrase, lettre) {

//   let count = 0; 
//   for (let i = 0; i < phrase.length; i++) {
//     if (phrase[i] === lettre) {
//       // Vérifie si le caractère courant est égal à "lettre"
//       count++; // Incrémente le compteur si on trouve une correspondance
//     }
//   }
//   return count;
// }
// alert(nbLtr(_phrase,_lettre));

// console.log(nbLtr("Exemple pour comprendreee", "e"));

// let variable1  = prompt("Veuillez saisir une phrase");
// let variable2  = prompt("Veuillez saisir une lettre");
// console.log(nbLtr(variable1, variable2));


