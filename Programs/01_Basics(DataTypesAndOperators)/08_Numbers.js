const num1 = 200;               //Dynamically chooses a number as a datatype
console.log(num1);

const num2 = new Number(100);     //Strictly a number
console.log(num2);
console.log(num2.toString().length);
console.log(num2.toFixed(2));

let num3 = 26.897;
console.log(num3.toPrecision(3));
console.log(num3.toPrecision(2));
console.log(num3.toPrecision(4));

let num4 = 1000000;
console.log(num4.toLocaleString());
console.log(num4.toLocaleString('en-IN'));


// Math library

let num5 = 23.768;
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.floor(num5));
console.log(Math.ceil(num5));
console.log(Math.round(num5));



console.log(Math.min(3,5,6,1,3,7));
console.log(Math.max(3,5,6,1,3,7));
console.log(Math.floor(Math.random()*10)+1);           //1 to 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1) + min));  //from min to max
