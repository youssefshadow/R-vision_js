function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
      // si le champs est vide j'envoi une alerte
      alert("Le champs est vide!");
      return;
  }
  let newItem = "<li>" + inputValue + " <button onclick='removeElement(this)'>supprimer</button></li>";
  document.getElementById("myUL").innerHTML += newItem;
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
