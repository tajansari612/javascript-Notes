let parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[2].innerHTML);

for (let i = 0 ; i < parent.children.length ; i++) {
    console.log(parent.children[i].innerHTML);
}

parent.children[2].style.color = 'orange';

console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

let firstChild = document.querySelector('.day')
console.log(firstChild);
console.log(firstChild.parentElement);
console.log(firstChild.nextElementSibling);