// var myVar = 123; 
// maFonction(); 
// function maFonction() 
// { 
//     console.log("myVar fonction : " + myVar); 
// } 
// if (myVar > 1) { 
//     console.log("myVar condition : " + myVar); 
// } 
// console.log("myVar fin : " + myVar);


// function myFunction(p1, p2) {
//     return p1 * p2;
//   }



//   var compteur = 2;
//   function myFunction(){
//     var myVar= 456;
//     console.log("myVar : " +myVar);
//   }

//   if(compteur>1){
//     let myVar2= "Wazaa !";
//     console.log("myVar2 : "+myVar2);
//   }


//   console.log(typeof compteur);


//   var age;
//   age= 25;
//   document.write("votre âge");
//   document.write("Votre âge est " + age);

//   document.write("\n <b>" + " Votre âge est " + "</b>" + age);

//   document.write(" test");

//   var reponse1 = window.prompt("Saisissez votre nom");
//   var reponse2 = window.prompt("Saisissez votre prénom");
//   var sexe = window.confirm('Etes-vous un homme');

//   if (sexe==true) {
//     alert("Bonjour Monsieur "+ reponse1+" "+reponse2+"."+" Bienvenue sur notre site.");
//   }
//   else{
//     alert("Bonjour Madame "+ reponse1+" "+reponse2+"."+" Bienvenue sur notre site.");

//   }


let x = 11;
let y = 5;

console.log(y += y);


var modele = "Laguna";
switch (modele) {
    case "508":
        console.log("Modèle 508 : marque Peugeot"); break;
    case "Laguna":
    case "Clio":
        console.log("Modèle Laguna : marque Renault"); break;
    case "C5":
        console.log("Modèle C5 : marque Citroën"); break;
    default:
        console.log("Modèle " + modele + ": marque inconnue");
}



// Exo 1 : Ecrivez un programme qui demande un nombre à l’utilisateur puis qui teste si ce nombre est pair. Le programme doit afficher le résultat « nombre pair » ou « nombre impair ». Vous devez utiliser l’opérateur modulo « % » qui donne le reste d’une division. a%2 donne le reste de la division de a par 2, si ce reste est égale à zéro, a est divisible par 2.

// let a= prompt("Saissisez votre nombre.");


// if (a%2==0) {
//     console.log("Ceci est un chiffre pair");
// } else {
//     console.log("Ceci est un chiffre impair");

// }

// Exo 2 : Ecrivez un programme qui demande l’année de naissance à l’utilisateur.
// En réponse votre programme doit afficher l’âge de l’utilisateur et indiquer si l’utilisateur est majeur ou mineur.

// let annee = prompt("quel est votre année de naissance?");

// let age = 2024 - annee;



// if (age<18) {
//     alert ("Vous avez "+ age + " ans. Vous êtes mineur");
// } else {
//     alert ("Vous avez "+ age + " ans. Vous êtes majeur");

// }

// (age >= 18) ? alert("Vous êtes majeur") : alert("Vous êtes mineur");


// Exo 3 :Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur '+', '-', '*' ou '/'.
// Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur "division par 0"), puis affichera le résultat.


// Le "parseInt" permet d'exiger que la valeur saisie soit un chiffre.
// Le "resultadd" n'est pas défini à l'avance parce que c'est le résultat de l'opération qu'on veut obtenir
// On "switch" la valeur "opérateur" car c'est elle qui prend différents opérateur.
// let number1 = parseInt(prompt("Saissir un chiffre"));
// let operateur = prompt("Saissir un opérateur");
// let number2 = parseInt(prompt("Saissir un autre chiffre"));
// let resuladd;
// switch (operateur) {
//     case "+":
//          resuladd = number1 + number2;

//         break;
//     case "-":
//          resuladd = number1 - number2;

//         break;
//     case "*":
//          resuladd = number1 * number2;

//         break;
//     case "/":
//          resuladd = number1 / number2;
//          if (number2==0) {
//             alert("Error");
//          }

//         break;

//     default:
//         break;
// }
// alert(resuladd);


// Exo 4 : A partir de la saisie du prix unitaire PU d’un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant le port PORT et la remise REM, sachant que :
// ▪ le port est gratuit si le prix des produits TOT est supérieur à 500 €. Dans le cas contraire, le port est de 2% de TOT
// ▪ la valeur minimale du port à payer est de 6 €
// ▪ la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà


// let PU = parseInt(prompt("Quel est le prix de ce produit ?"));
// let QTECOM = parseInt(prompt("Combien en voulez-vous ?"));
// let PAP= PU*QTECOM;
let PORT;
let REM;
let TOT;


// if (PAP>500) {
//     PORT=0;
// }
// else {
//     PORT= PAP * (2/100) ;

//     if (PORT <6){
//         PORT=6;
//     }
// }



// if (PAP> 100 && PAP<200) {
//     REM = PAP * (5/100);
// } else if (PAP>=200){
//     REM = PAP * (10/100);
// } else {
//     REM = 0;
// }
// alert("Prix à payer " + PAP);
// alert("Port " + PORT); 
// alert("Remise " + REM);

// TOT=PAP + PORT - REM;
// alert("Total " + TOT);


// Exo 5 : Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la façon suivante :
// ▪ si il est célibataire : participation de 20%
// ▪ si il est marié : participation de 25%
// ▪ si il a des enfants : participation de 10% supplémentaires par enfant La participation est plafonnée à 50%
// Si le salaire mensuel est inférieur à 1200 € la participation est majorée de 10%.
// Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation à laquelle il a droit.

// let prepas = 10;
// let situation = confirm("Etes-vous marié? OUI ou NON");
// let enfant = prompt("Combien d'enfants avez-vous?");
// let salaire = prompt("Quel est votre salaire");
// let maried;
// let enfants = 0;
// let minsalaire;


// // L'employé est il marié ou pas
// if (situation == true) {
//     maried = 25;
// } else {
//     maried = 20;
// }

// //    A t il des enfants
// if (enfant > 0) {
//     enfants = enfant * 10;
// }

// // Le salaire est il inférieur à 1200€
// if (salaire < 1200) {
//     minsalaire = 10;
// } else {
//     minsalaire = 0;
// }

// let participation = maried + enfants + minsalaire
// if (participation > 50) {
//     participation = 50;
// }
// alert("Vous avez droit à une participation de " + participation + "%.");



// PDF 07 Les boucles


// Boucle while
// var i = 0; 
// console.log("Table de multiplication par 5"); 
// console.log("============================="); 
// while (i <= 10) { 
//     resultat = 5 * i; 
//     console.log("5 x " + i + " = " + resultat); 
//     i++; 
// }


// Boucle do...while
var i = 0
console.log("Table de multiplication par 5"); console.log("=============================");
do {
    resultat = 5 * i;
    console.log("5 * " + i + " = " + resultat); i++;
} while (i <= 10);