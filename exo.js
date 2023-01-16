const collection = document.getElementsByTagName("p");
console.log(collection[2]);
collection[0].innerText='floflo';
console.log(collection[0]);
let title=document.getElementById("coolRaool");
console.log(title);

function ajouterTexte(pseudo, texte) {
    let parag = document.createElement("p");
    let strong = document.createElement("strong");
    strong.textContent = pseudo;
    parag.appendChild(strong);
    let textNode = document.createTextNode(` ${texte}`);
    parag.appendChild(textNode);
    document.body.appendChild(parag);
}
  

  ajouterTexte('florent','est de toute beauté');
  ajouterTexte('JOsé','Gracia');
  ajouterTexte('Grigny','La grande Borne');
  ajouterTexte('Roi','Heenok');
  ajouterTexte('Dongue','Rodrigue');
 