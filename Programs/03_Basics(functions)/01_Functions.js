// A function is a block of code that performs a specific task. Dividing
//  a complex problem into smaller chunks makes your program easy to 
// understand and reusable.


function AddTwoNumbers(num1 , num2){
    //console.log(num1 + num2);
    let ans = num1 + num2;
    return ans;
}

//AddTwoNumbers(5,7);
let ans = AddTwoNumbers(98,56);   //154
console.log(ans);
ans = AddTwoNumbers(98,"467");    //98467
console.log(ans);
ans = AddTwoNumbers(98,"d");     //98d
console.log(ans);

function loginUserMessage(username){
    if(!username){
        console.log(`Please enter username`);
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("taj"));


function addNumbers(val1,val2,...numbers){          //numbers acts as an array it stores all the arguments
    let sum=0;
    let n=numbers.length-1;
    while(n>=0){
        sum+=numbers[n];
        n--;
    }
    return val1+val2+sum;
}
console.log(addNumbers(5,7,8,902,2,5,67,9));   //addition of all the numbers i.e 1005


const obj1 = {
    name : "taj",
    rollno : 14
}

function greet(obj){
    console.log(`welcome home ${obj.name}`);
}
greet(obj1);


//Anonymous function
// The function which does not have a name is called anonymous 
// function and it can be stored in a variable

let hello = function (){
    console.log("Hello!");
}
hello();