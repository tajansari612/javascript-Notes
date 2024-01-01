function AddTwoNumbers(num1 , num2){
    //console.log(num1 + num2);
    let ans = num1 + num2;
    return ans;
}

//AddTwoNumbers(5,7);
let ans = AddTwoNumbers(98,56);
ans = AddTwoNumbers(98,"467");
ans = AddTwoNumbers(98,"d");
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
    return numbers;
}
console.log(addNumbers(5,7,8,902,2,5,67,9));


const obj1 = {
    name : "taj",
    rollno : 14
}

function greet(obj){
    console.log(`welcome home ${obj.name}`);
}
greet(obj1);