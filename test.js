
let list = document.querySelector('ul');
list.addEventListener('click', toggleChecked, false);
// foncion pour checker les elements
function toggleChecked(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}
// fonction ajout élément 
function newElement() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        // si le champs est vide j'envoi une alerte
      alert("Le champs est vide!");
      return;
    }

    let li = createListItem(inputValue);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
  }

function createListItem(inputValue) {
    let li = document.createElement("li");
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    let span = document.createElement("span");
    let txt = document.createTextNode("supprimer");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    return li;
  }
  let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
    }
}
  
