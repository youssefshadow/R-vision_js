// const collection = document.getElementsByTagName("p");
// console.log(collection[2]);
// collection[0].innerText='floflo';
// console.log(collection[0]);
// let title=document.getElementById("coolRaool");
// console.log(title);

// function ajouterTexte(pseudo, texte) {
//     let parag = document.createElement("p");
//     let strong = document.createElement("strong");
//     strong.textContent = pseudo;
//     parag.appendChild(strong);
//     let textNode = document.createTextNode(` ${texte}`);
//     parag.appendChild(textNode);
//     document.body.appendChild(parag);
// }
  

//   ajouterTexte('florent','est de toute beauté');
//   ajouterTexte('JOsé','Gracia');
//   ajouterTexte('Grigny','La grande Borne');
//   ajouterTexte('Roi','Heenok');
//   ajouterTexte('Dongue','Rodrigue');
 

//   document.querySelector("#monTitre").addEventListener("click", function(){
//     console.log("Welcome to the hell !!!!");
//   });


  //tp à rendre 
  // Récupérer les éléments de lien
const ajoutLien = document.getElementById("ajoutLien");
const removeLink = document.getElementById("removeLink");
const toggleLink = document.getElementById("toggleLink");

// Récupérer l'élément de titre
const title = document.getElementById("title");

// Ajouter la classe maCouleur au titre lorsque le lien Ajouter est cliqué
ajoutLien.addEventListener("click", function() {
  title.classList.add("maCouleur");
});

// Supprimer la classe maCouleur du titre lorsque le lien Supprimer est cliqué
removeLink.addEventListener("click", function() {
  title.classList.remove("maCouleur");
});

// Toggle la classe maCouleur du titre lorsque le lien Toggle est cliqué
toggleLink.addEventListener("click", function() {
  title.classList.toggle("maCouleur");
});


