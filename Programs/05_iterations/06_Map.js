let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = array.map((element) => (element + 10))
console.log(arr);


// Chaining

let arr1 = array.map((element) => (element + 10));
console.log(arr1);


let arr2 = array.map((element) => (element + 10)).map((element) => (element + 1));
console.log(arr2);

let arr3 = array
    .map((element) => (element + 10))
    .map((element) => (element + 1))
    .filter((element) => (element >= 15));
console.log(arr3);