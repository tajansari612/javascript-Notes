
// Declaring Symbols
const mySymb = Symbol();
console.log(mySymb);
console.log(typeof mySymb);

const jsUser = {
    name : "taj",
    "full name" : "Taj Mohammad Ansari",
    age : 23,
    location : "Pune",
    email : "taj@gmail.com",
    idLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"],
    [mySymb] : "key2"
}

console.log(jsUser.email);
console.log(jsUser["email"]);

// console.log(jsUser.full name);      //error
// console.log(jsUser."full name");      //error
console.log(jsUser["full name"]);    // no error  and It is mostly used

console.log(jsUser[mySymb]);
console.log(typeof jsUser[mySymb]);
console.log(jsUser);

jsUser.name = "ayaj";
console.log(jsUser);

//Object.freeze(jsUser);

jsUser.name = "raj";
console.log(jsUser);


jsUser.greeting = function() {
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);


const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e'}
const obj3 = {6:'f'}

//const obj4 = Object.assign(obj1,obj2,obj3);  // It adds obj2 and obj3 to obj1 and reference as obj4
//const obj4 = Object.assign({},obj1,obj2,obj3);  // It adds obj2 and obj3 and obj1 to a empty object then reference as obj4  
const obj4 = {...obj1,...obj2,...obj3};   //Same like strings it a spread operator which is mainly used

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)


const arr = Object.keys(obj4);       // It stores all the in an array
console.log(arr);
const arr2 = Object.values(obj4);
console.log(arr2);


// Objects Part-3
const student = {
    Name: "Taj",
    Rollno : 14,
    Mark : "Pass",
    isLoggedIn : true
}

console.log(student.Name);

const {Name} = student;
console.log(Name);


// API json format
/*{
    "name" : "taj",
    "Rollno" : 14,
    "Gender" : false

}*/