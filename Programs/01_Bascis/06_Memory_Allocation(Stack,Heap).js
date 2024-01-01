// Stack   //Primitive data types are stored in Stack

//Example

let var1 = "Taj";
let var2 = var1;             //The copy of value is created in var2
console.log(var1,var2);

var2 = "Ayaj";              //Changes made in var2 does not affect the value in var1
console.log(var1,var2);



// Heap   //Non-Primitive(Reference) data types are stored in heap
//Example

let st1 = {
    name : "Taj",
    rollNo : 14,
    gender : "Male"
}

let st2 = st1;                //The value of st1 is passed by reference and not by value so copy is not created
console.log(st1.name,st2.name);


st2.name = "Ayaj";           //The changes made in st2 is reflected in st1
console.log(st1.name,st2.name);