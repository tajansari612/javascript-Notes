let name = "Taj";
let rollNo = 14;

console.log("My name is "+ name + " and roll no. is " + rollNo + ".");  //Deprecated, Outdated and not flexible for use

//Latest and mostly used flexible way is :
console.log(`My name is ${name} and My Roll no. is ${rollNo}.`)

let var1 = "concatenate";
console.log(var1[0]);
console.log(var1[2]);
console.log(var1[4]);
console.log(var1[8]);

console.log(var1.length);
console.log(var1.slice(0,5));
console.log(var1.slice(-4));   //last 4 vlaues  //if -6 last 6 values
console.log(var1.substring(0,5));
console.log(var1.charAt(5));
console.log(var1.indexOf('t'));
console.log(var1.indexOf('t',6));

let email = "   taj@gmail%com  ";
console.log(email);
console.log(email.trim());
console.log(email.replace('%','.').trim());

let name2 = "taj_mohammad_ansari";
console.log(name2.split('_'));
console.log(name2.split('_',2));



