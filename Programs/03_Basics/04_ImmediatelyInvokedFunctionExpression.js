// Declaration



(function hello(){
    console.log("Hello");
})();

(function hello(){
    console.log("Hello");  // This cause beacause you need to end the previos immediateley invoked function usin parenthesis
})();


(() => (console.log("Hello Taj")))();

((name) => (console.log(`Hello, ${name} `)))("Taj");


// Named IIFE
(function hello(){
    console.log("Hello Named IIFE");
})();

//Unnamed IIFE
(function (){
    console.log("Hello Unnamed IIFE");
})();
