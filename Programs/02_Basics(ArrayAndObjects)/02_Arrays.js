const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]        // Spread operator mostly used than concat beacaue you can merge as many as arrays possible
console.log(all_new_heroes);


const myarr = [1,2,3,[4,5,6],7,[8,9,10,[11,12]]];
const flatArr = myarr.flat(1);                         // It converts the multidimentional arrays into array upto depth 1
console.log(flatArr);


console.log(Array.isArray("Taj"));    // returns false as it  string
console.log(Array.from("Taj"));       // creates the array of characters from the given string
console.log(Array.of("Taj","ayaj","raj"));   //creates the array of strings from the given values