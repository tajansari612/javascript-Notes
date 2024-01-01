let box1 = document.querySelectorAll('.box');
console.log(box1);

let body = document.querySelector('body')
console.log(body);

box1.forEach((box) => {
    console.log(box)
    box.addEventListener('click',(e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'blue-box'){
            body.style.backgroundColor = 'blue';
            e.target.style.border = '2px solid black'
        }else if(e.target.id === 'orange-box'){
            body.style.backgroundColor = 'orange';
            e.target.style.border = '2px solid black'
        }else if(e.target.id === 'black-box'){
            body.style.backgroundColor = 'black';
            e.target.style.border = '2px solid black'
        }else{
            body.style.backgroundColor = 'burlywood';
            e.target.style.border = '2px solid black'
            e.target.style.color = 'fff'
            
        }
    })
});