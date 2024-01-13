//1. Nullish coalescing operaptor

let var1 = 5 ?? 10;   //if left value is null,undefined,NaN then chooses right value othervise left
console.log(var1);

var1 = null ?? 10;
console.log(var1);

var1 = undefined ?? 10;
console.log(var1);

var1 = NaN ?? 10;
console.log(var1);

//2. Ternary operator

// (condition) ? true : false

(7>9) ? console.log("1st is greater") : console.log("2nd is greater");