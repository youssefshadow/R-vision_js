function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
      // si le champs est vide j'envoi une alerte
      alert("Le champs est vide!");
      return;
  }
  // créer élément li
  let newItem = document.createElement("li");
  // le texte de mon element li est le inputValue
  let textnode = document.createTextNode(inputValue);
  // créer bouton  pour que je puisse supprimer mon élément
  let button = document.createElement("button");
  button.innerText = "supprimer";
  // Mon bouton fais le travail de ma fonction removeElement
  button.onclick = function() {
    removeElement(this);
}
newItem.appendChild(textnode);
newItem.appendChild(button);
document.getElementById("myUL").appendChild(newItem);
document.getElementById("myInput").value = "";
}
//Ma fonction supprimer qui reprend la fonction native js remove()
function removeElement(element) {
  element.parentNode.remove();
}
// j'ajoute un addEventListener pour marquer le check d'un élément.
let list = document.querySelector('ul');
list.addEventListener('click', toggleChecked, false);
// foncion pour checker les elements
function toggleChecked(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}

// let icon=document.querySelector('img');
// let icon2=document.querySelector('monImg');
// let body=document.querySelector('body');
// icon.addEventListener("click", function(){
//   body.style.backgroundColor = "black";
//   icon.style.display = "none";
//   icon2.style.display = "block";
// });

// icon2.addEventListener("click", function(){
//   body.style.backgroundColor = "blue";
//   icon.style.display = "block";
//   icon2.style.display = "none";
// });
let body=document.querySelector('body');
let icon=document.querySelector('img');
let icon2=document.querySelector('#monImg'); 
icon.addEventListener("click", function(){
  body.style.backgroundColor = "black";
  icon.style.display = "none";
  icon2.style.display = "block";
});

icon2.addEventListener("click", function(){
  body.style.backgroundColor = "white";
  icon.style.display = "block";
  icon2.style.display = "none";
});





