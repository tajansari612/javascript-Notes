let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.getDate());

console.log(myDate.getDay());

console.log(myDate.getSeconds());
console.log(myDate.getTime());



let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toString());
myCreatedDate = new Date(2023,0,23,5,8);
console.log(myCreatedDate.toString());


console.log(myDate.getTime());    //Actual use for compairing times