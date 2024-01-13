if(true){
    let a = 30;
    const b = 60;
    var c = 90;    //var keyword set the variable in global scope
}

//console.log(a);   //Error
//console.log(b);   //Error  
console.log(c);     // no error that's why we don't use var keyword 


// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter 
// appears to move the declaration of functions, variables, classes, or 
// imports to the top of their scope, prior to execution of the code.

console.log(addone(5));   //No error
function addone(num1){
    return num1 + 1;
}

//console.log(addtwo(7));      //Error because hoisting
let addtwo = function(num2){
    return num2 + 2;
}
console.log(addtwo(4))

//IMP note: If the anonymous function or arrow function is stored in
// a variable then hoisting is not going to work