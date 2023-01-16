function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
      // si le champs est vide j'envoi une alerte
      alert("Le champs est vide!");
      return;
  }
  let newItem = document.createElement("li");
  let textnode = document.createTextNode(inputValue);
  let button = document.createElement("button");
  button.innerText = "supprimer";
  button.onclick = function() {
    removeElement(this);
}
newItem.appendChild(textnode);
newItem.appendChild(button);
document.getElementById("myUL").appendChild(newItem);
document.getElementById("myInput").value = "";
}
function removeElement(element) {
  element.parentNode.remove();
}
let list = document.querySelector('ul');
list.addEventListener('click', toggleChecked, false);
// foncion pour checker les elements
function toggleChecked(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}
