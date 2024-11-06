function maFonction(obligatoire, facultatif) {
    // Affiche 'Argument 1 : Paul' 
    console.log('Argument 1 : ' + obligatoire);
    // 1er appel : erreur car 2ème argument non envoyé
    // 2ème appel : affiche 'Argument 2 (facultatif) : Anne' 
    console.log('Argument 2 (facultatif) : ' + facultatif);
}
maFonction('Paul'); // 1er appel
maFonction('Paul', 'Anne'); // 2ème appel


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
var cube = function(nombre)
{
    var resultat = nombre * nombre * nombre;
    console.log("Le cube de " + nombre + " est égal à " + resultat);
    
}
// Appel de la fonction cube() :
var k = cube(2);

//Déclaration de la fonction produit ():
function produit(x, y) {
    console.log("Le produit de " + x + " x " + y + " est égal à " + x * y);
    console.log();
    
}

// Appel de la fonction produit() :
produit(3, 7);


// // Exo 2 : Ecrivez une fonction qui affiche une table de multiplication.
// Votre fonction doit prendre un paramètre qui permet d’indiquer quelle table afficher.
// Par exemple TableMultiplication(7)doit afficher :
// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21


//Déclaration de la fonction 

function multiplication(x){
    var n = 1;
    var resultat; 
    while (n<=10) {
        resultat = n * x ;
        console.log(n + " x " + x + " = " + resultat);
        n++;
    }
} 

//On appelle la fonction multiplication en lui donnant un argument (5) et ça nous renvoit la table de multiplication de 5 (de 1 à 10)
multiplication(5);