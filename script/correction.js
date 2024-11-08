/**
 * Lire un entier saisi au clavier
 * @param {*} message
 */
function getInteger(message) {
    return parseInt(prompt(message));
  }
  
  /**
   * Créer et initialiser un tableau
   */
  function initTab() {
    const taille = getInteger(
      "Entrez le nombre de notes souhaitées dans le tableau"
    );
    return taille;
  }
  
  /**
   * Saisie des valeurs du tableau
   * @param {*} _tableau
   */
  function saisieTab(_tableau) {
  
    for (let i = 0; i < tableau.length; i++) {
      _tableau[i]=getInteger(`Entrez la valeur pour la note ${i + 1}`);
      if (tableau[i] === null) {
          console.log("Saisie interrompue.");
          break;
      }
    }
  }
  
  /**
   * Afficher tout le tableau
   * @param {*} _tableau
   */
  function afficheTab(_tableau) {
    console.log("Contenu du tableau :", _tableau);
  }
  
  /**
   * Afficher le maximum et la moyenne des valeurs du tableau
   * @param {*} _tableau
   */
  function infoTab(_tableau) {
    if (_tableau.length == 0) {
      console.log("le tableau est vide");
      return;
    }
  
    const max = Math.max(..._tableau);
    const moyenne = _tableau.reduce((acc, val) => cc + val, 0) / _tableau.length;
  
    console.log("Max:" + max);
    console.log("Moyenne: " + moyenne);
  }
  
  /**
   * Afficher le contenu du tableau dont l'index est saisi au clavier
   * @param {*} _tableau
   */
  function rechercheTab(_tableau) {
    const index = getInteger("Entrez l'index de la note à afficher");
  
    if (index >= 0 && index < _tableau.length) {
      console.log(`Valeur à l'index ${index} : ${tableau[index]}`);
    } else {
      console.log("Index invalide");
    }
  }
  let taille= initTab();
  let tableau=new Array(taille) ;
  saisieTab(tableau,taille);
  
  let choix;
  
  do {
    choix = getInteger(
      "Menu : \n" +
        "1. Afficher tout le contenu du tableau \n" +
        "2. Afficher la note à l'index du tableau \n" +
        "3. Afficher le maximum et la moyenne \n" +
        "4. Quitter \n" +
        "Choisissez une option "
    );
  
    switch (choix) {
      case 1:
        afficheTab(tableau);
        break;
      case 2:
        rechercheTab(tableau);
        break;
      case 3:
        infoTab(tableau);
        break;
      case 4:
        console.log("Fin du programme");
        break;
      default:
        console.log("Option invalide, veuillez réessayer");
    }
  } while (choix !== 4);

  