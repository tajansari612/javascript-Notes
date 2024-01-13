// For of loop

let arr = [3, 4, 5, 6, 7, 8]

for (const val of arr) {
    console.log(val);
}
console.log()


// For In loop

let obj1 = {
    py : "Pyhton",
    cpp : "CPlusPlus",
    js : "Javascript",
    java : "Java"
}

for (const key in obj1 ){
    console.log(`${key} : ${obj1[key]}`);
}
console.log()

for (const i in arr) {
    console.log(`${i} ==> ${arr[i]}`);
}
console.log()

// For each loop

arr.forEach(element => {
    console.log(element);
});


console.log();
console.log();
console.log();
function print(element){
    console.log(element);
}

arr.forEach(print);

let data = [
    {
        name : "taj",
        rollNo : 14
    },
    {
        name : "ayaj",
        rollNo : 15
    },
    {
        name : "pravin",
        rollNo : 13
    }
]
console.log();
console.log();
console.log();
for (const element of data) {
    console.log(element);
}

console.log();
console.log();
console.log();
data.forEach(element => {
    console.log(`${element["name"]} : ${element["rollNo"]}`);
});