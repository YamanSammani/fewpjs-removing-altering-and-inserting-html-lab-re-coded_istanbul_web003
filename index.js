// Write your code here
let main = document.querySelector("main#main");
main.remove();


let newHeader = document.createElement("h1");
newHeader.id = "victory";
let text = document.createTextNode("victory");
newHeader.appendChild(text);

newHeader.innerHTML = "<h1>victory</h1><h3>Yaman is the champion </h3>";




// let elemnt = document.getElementById("new");
// elemnt.appendChild(newHeader);


