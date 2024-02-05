// const promiseOne = new Promise(function (resolve,reject){
//     //Do an async task
//     //DB calls, cryptography ,network
//     setTimeout(function (){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promise is consumed");
//     console.log("---x----x------x------x-----x-----x---x----x--x");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 is completed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 is consumed");
//     console.log("---x----x------x------x-----x-----x---x----x--x");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 3");
//         let data = {
//             username : "tajansari612",
//             email : "tajansari@123.com"
//         }
//         resolve(data);
//     },1000)
// });

// promiseThree.then(function(data){
//     console.log(data);
//     console.log("---x----x------x------x-----x-----x---x----x--x");
// })


// const promiseFour = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         let error = false;
//     let data = {
//         username : "tajansari612",
//         email : "tajansari@123.com"
//     }
//     if(!error){
//         resolve(data);
//     }else{
//         reject("Error! Something went wrong");
//     }

//     },1000)
// });

// promiseFour.then((data)=>{
//     // console.log(data);
//     return data.username;    //returned value from then can be passed to another then
// }).catch((error)=>{
//     console.log(error);
// }).then((username)=>{
//     console.log(username);
// }).finally(()=>(console.log("The promise either resolved or rejected")))


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    // console.log(response);
    let data = response.json();
    return data;
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E",error);
}).finally(()=>{
    console.log("The promise either resolved or rejected")
})


// another method is to use async await
// async function promiseFive(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }
// promiseFive();