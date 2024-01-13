// Arrow Function
// The arrow function is one of the features introduced in the ES6 version
// of JavaScript. It allows you to create functions in a cleaner way compared
// to regular functions. Here are some of the valid syntax for arrow function:



let square = (num1) => {        // return keyword is necessary if curly braces is used
    return num1*num1;
}

console.log(square(5));


let addNum = (num1,num2) => (num1 + num2)    // return keyword is not necessary

console.log(addNum(5,6));



//Callback Functions
//A callback is a function passed as an argument to another function.

let calulator = (num1,num2,operation) =>{
    return operation(num1,num2);
}

console.log(calulator(5,6,(num1,num2)=>{
    return num1+num2;
}))

let substraction = (a,b) =>(a-b);
let result  = calulator(10,5,substraction);
console.log(result);