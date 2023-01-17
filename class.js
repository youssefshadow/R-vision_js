// Créer une classe Imc qui a dans son constructor 3 variables
//   °nom
//   ° poids 
//   ° taille 
//   Dans cette classe on a une fonction calculImc() qui calcule et retourne l’ imc.
//   on a aussi une fonction display() qui affiche les infos dans la console du navigateur
//   Exemple de ce que ça afficheSébastien 
//   Chabal (135 kg, 1.89 M) a un IMC de: 37.79
//   En dehors de cette classe on a une variable liste qui est un tableau contenant 
//   2 nouvelles instances (param au choix dans le constructor) de la classe Imc.
//   Trouver un moyen de parcourir cette liste de manière à utiliser la fonction display sur chaque élément de la liste.
class Imc {
    constructor(nom, poids, taille) {
      this.nom = nom;
      this.poids = poids;
      this.taille = taille;
    }
  
    calculImc() {
      return this.poids / (this.taille * this.taille);
    }
  
    display() {
        console.log(`${this.nom} ( ${this.poids} kg, ${this.taille} M) a un IMC de: ${this.calculImc().toFixed(2)}`);   
      }
  }
  
  const liste = [new Imc("Sébastien Chabal", 135, 1.89), new Imc("John Doe", 80, 1.75),new Imc("JOJO ", 300, 2),new Imc("Gontrand ", 90, 1.75),new Imc("Colonel Gran Jean ", 200, 1.75),new Imc("JOsiane de la Vega", 99, 1.55)];
  
  liste.forEach(imc => {
      imc.display();
  });