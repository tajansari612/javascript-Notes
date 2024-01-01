//Creating Elements

function addLang(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addLang("Python")
addLang("Ruby")
addLang("C++")


//Optimiazed approach

function addOptiLang(language){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(language));
    document.querySelector('.language').appendChild(li);
}

addOptiLang("Golang")
addOptiLang("Kotlin")
addOptiLang("Swift")



//Editing the elements

const thirdLang = document.querySelector('li:nth-child(3)');
console.log(thirdLang);
const newli = document.createElement('li');
newli.appendChild(document.createTextNode('Typescript'));
thirdLang.replaceWith(newli);


const firstlang = document.querySelector('li:first-child');
firstlang.outerHTML = "<li>Android Studio</li>";


//Deleting the elements

let lastLang = document.querySelector('li:last-child');
lastLang.remove()

lastLang = document.querySelector('li:last-child');
lastLang.remove()

lastLang = document.querySelector('li:last-child');
lastLang.remove()
