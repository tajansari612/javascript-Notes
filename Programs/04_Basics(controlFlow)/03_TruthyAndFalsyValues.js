if(0){
    console.log("True");
}else{
    console.log("False");
}

// Falsy values
// 0, "", false, -0, null, undefined, NaN

// Truthy Values
// 1, true, " ", "0", [], {}, function (){}, "false"

let arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}else {
    console.log("Array is not Empty");
}


let obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}else{
    console.log("Object is not Empty");
}
