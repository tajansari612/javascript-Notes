
//Selectors
const body = document.querySelector('.body');
const start = document.querySelector('#startBtn');
const stop = document.querySelector('#stopBtn');

//Functions
function randomColor() {
    const hex = "0123456789ABCDEF";
    let color= '#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId; 
function startChangingColor(){
    //If we not use below if condition then as many time you click it is called
    // it called and stoping it not work
    if(!intervalId){
        intervalId = setInterval(() =>{
            body.style.backgroundColor = randomColor();
            console.log(randomColor());
        },1000);
    }
    
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}
//Processing
start.addEventListener('click',(e) =>{
    console.log("Color changing started!");
    startChangingColor();
})

stop.addEventListener('click',(e) =>{
    stopChangingColor();
})
