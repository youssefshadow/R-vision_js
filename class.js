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




  class CompteBancaire {
    constructor(titulaire) {
      this.titulaire = titulaire;
      this.solde = 0;
    }
    // Ajoute un montant au solde
    crediter(montant) {
      //Cumul du montant dans le solde du compte bancaire
      this.solde += montant;
      console.log ("Ajout de: " + montant + " pour: " + this.titulaire);
    }

      // Retirer un montant au solde
    retirer(montant) {
      try {
          if (this.solde < montant){
              throw this.titulaire + ", retrait de: " +  montant + " refusé avec solde: " + this.solde;
          }
          // Ci dessous l'opération du retrait
              this.solde -= montant;
          console.log ("Retrait de: " + montant + " pour: " + this.titulaire);
      }
      catch (error) {
        //Quand il y a une exception elle est détectée par catch
        //Qui va afficher l'erreur (msg de throw) dans un console log
          console.log ("--J'AI ATTRAPÉ MON ERREUR CUSTOM--->" + error);
      }
    } 

// Le virement sera utilisé sur 1 instance de CompteBancaire 
    virer(montant, membre) {
        console.log ("Virement de: " + montant + " de la part: " + this.titulaire + " vers: " +
              membre.titulaire);
              console.log(this)

        membre.crediter(montant);
        this.retirer(montant);// Ici le this va récupérer l'instance sur laquelle on utilise .virer() 
    }
  
    // Renvoie la description du compte
    decrire() {
      return "titulaire: " + this.titulaire + ", solde: " + this.solde;
    }
  }
// Main scénario, gère 3 comptes bancaires dans un tableau associatif 
const lesComptes = {
  "Alex" : new CompteBancaire("Alex"),
  "Clovis" : new CompteBancaire("Clovis"),
  "Marco" : new CompteBancaire("Marco"),
}  
// lecture tableau associatif ou Objet["truc"] 
// Boucle FOR IN qui Crédite et décrit chaque compte
for (let element in lesComptes)
  lesComptes[element].crediter(1000);
  
// un retrait de la part d'ALex
lesComptes["Alex"].retirer (100);
// un petit virement de Marco à Clovis :
lesComptes["Marco"].virer (300, lesComptes["Clovis"]);
// un petit retrait incorrect pour Alex
lesComptes["Alex"].retirer (1200);
// bilan
for (let unTruc in lesComptes)
  console.log(lesComptes[unTruc].decrire());