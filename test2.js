let newItem = document.createElement("li");
let textnode = document.createTextNode(inputValue);
let button = document.createElement("button");
button.innerHTML = "supprimer";
button.onclick = function() {
  removeElement(this);
}
newItem.appendChild(textnode);
newItem.appendChild(button);
document.getElementById("myUL").appendChild(newItem);
document.getElementById("myInput").value = "";

function maFonction(pseudo, duTexte) {
    // Créer un élément p
    let parag = document.createElement("p");
    
    // Créer un élément strong pour afficher le pseudo en gras
    let strong = document.createElement("strong");
    strong.innerText = pseudo;
    
    // Ajouter le pseudo en gras dans le paragraphe
    p.appendChild(strong);
    
    // Ajouter le texte donné dans le paragraphe
    parag.innerHTML += " " + duTexte;
    
    // Ajouter le paragraphe dans la page
    document.body.appendChild(parag);
  }
  

  maFonction('florent','est de toute beauté');



























