let div = document.createElement('div')
console.log(div);

div.className = "main";
div.id = "container";
div.style.backgroundColor = "blue"; 
div.style.padding = "12px"
div.style.borderRadius = '5px'
div.style.width = '400px'
div.style.textAlign = 'center'

const text = document.createTextNode("Chai aur code");
console.log(text);

div.appendChild(text);
console.log(div);

document.body.appendChild(div)