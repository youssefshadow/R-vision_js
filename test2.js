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










