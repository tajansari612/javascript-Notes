let user = {
    username : "taj",
    price : 999,
    welcomeMessage : function(){
        // console.log(`${user.username}, welcome to this website.` )
        console.log(`${this.username}, welcome to this website.` )
    }
}

user.welcomeMessage()
user.username = "ayaj";
user.welcomeMessage()


// Arrow Function

/*let addNum = (num1,num2) => {        // return keyword is necessary if curly braces is used
    return num1 + num2;
}

console.log(addNum(5,6));*/


let addNum = (num1,num2) => (num1 + num2)    // return keyword is not necessary

console.log(addNum(5,6));

let returnObj = (num1,num2) => ({username : "TAJ"})
console.log(returnObj(5,7));