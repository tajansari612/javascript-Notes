let title1 = document.getElementById('title1');
console.log(title1);
console.log(title1.innerHTML);
console.log(title1.id);
console.log(title1.className);

console.log(title1.getAttribute('id'));
console.log(title1.getAttribute('class'));

console.log(title1.setAttribute('class','test'));
console.log(title1.getAttribute('class'));


title1.style.backgroundColor='green';
title1.style.color='blue';
title1.style.borderRadius='5px'


console.log(title1.innerText);  //shows inner text excluding hidden texts
console.log(title1.textContent); //shows inner text including hidden text
console.log(title1.innerHTML);  //shows innet html including tags

console.log(document.querySelector('h1'))  //selects the first h1

const head2 = document.querySelector('h2')
head2.style.backgroundColor = 'blue'
document.querySelector('#head2').style.backgroundColor = 'purple'

const ul = document.querySelector('ul')
ul.style.color = 'yellow'

const li = document.querySelectorAll('li')    //all li is stored in nodelist & it is not an array
// li.style.backgroundColor = 'green';        //error
li[0].style.backgroundColor = 'green';        

li.forEach((l) => (l.style.backgroundColor = 'red'))   //for each loop can be use for node list, no other loops are available


let tempList = document.getElementsByClassName('list-item')   // all li is stored as HTML collection, here no loops are available
console.log(tempList)

let arrList = Array.from(tempList);  // it converts the HTML collection to array so all the properties of array can be used like map,reduce, filter push pop,etc
console.log(arrList)

arrList.forEach(element => {
    element.style.backgroundColor = 'orchid';
});