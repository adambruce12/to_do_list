

const elItem = document.getElementById("item");
console.log(elItem);

function addItem () {
    let newItem = prompt("What do you need to get done today?");
    var newEl = document.createElement('li');
    var newText = document.createTextNode(newItem);
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ol')[0];
    position.appendChild(newEl);
}

var elButton = document.getElementById("add");
elButton.onclick = addItem;
