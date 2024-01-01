let arr1 = [2,5,6,3,4,1,9];
console.log(arr1);

let arr2 = arr1;
arr2[0] = 12;
arr2[1] = 14;
arr2[2] = 18;
arr2[3] = 127;

console.log(arr2);
console.log(arr1);    //arr1 is also changed because it is allocated in heap memory, all non-premitive data types are does not give copy either it gives reference.



// Array Methods

const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length);

arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
console.log(arr);

arr.pop()
arr.pop()
arr.pop()
console.log(arr);

arr.unshift(0)
arr.unshift(-1)
arr.unshift(-2)
console.log(arr);

arr.shift()
arr.shift()
arr.shift()
console.log(arr);


console.log(arr.includes(2))
console.log(arr.includes(98))
console.log(arr.indexOf(3))
console.log(arr.indexOf(98))

// !IMPORTANT
let arr4 = arr.slice(2,5);   // It creates the copy of the elements
console.log(arr4,arr);

let arr5 = arr.splice(2,5);  // It cut elements from one array to another array
console.log(arr5,arr);

let arr6 = arr.slice();
console.log(arr6,arr);