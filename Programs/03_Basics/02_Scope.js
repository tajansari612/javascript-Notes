if(true){
    let a = 30;
    const b = 60;
    var c = 90;    //var keyword set the variable in global scope
}

//console.log(a);   //Error
//console.log(b);   //Error  
console.log(c);     // no error that's why we don't use var keyword 


// Hoisting

console.log(addone(5));   //No error
function addone(num1){
    return num1 + 1;
}

//console.log(addtwo(7));      //Error because hoisting
let addtwo = function(num2){
    return num2 + 2;
}
console.log(addtwo(4))