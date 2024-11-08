// Exo 1 : Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
// Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
// Puis votre programme doit afficher le contenu du tableau.

var monTbl = [];

monTbl.length = [prompt("Saisir le nbre de données")];
document.write("Mon tableau contiendra " + monTbl.length + " éléments");

// const count = monTbl.push(vrb);

let x = 0;
monTbl[x] = "";

function ajout(ajt) {
    let count= 0;
    for (i = 0; i < monTbl.length; i++) {
    if ((x = "")) {
      count++;
    }
  }
  return count;
  //   x += ;
  //   x++;
}
alert(ajout(prompt("Saisir")));
console.log(monTbl[0]);
console.log(monTbl[2]);

console.log(monTbl);
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


// function rplr() {
//   for (i = 0; i < count; i++) {
//     if ((count = "")) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   return count;
// }

// monTbl[monTbl.length]= [];
