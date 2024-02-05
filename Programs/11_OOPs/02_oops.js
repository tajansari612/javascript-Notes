const student = {
    name : "taj",
    rollNo : 14,
    pass :  true,

    disp : function (){
        console.log("Name :",this.name);
        console.log("RollNo :",this.rollNo);
        console.log("Pass :",this.pass);
    }
}

console.log(student.name);
console.log(student.rollNo);
student.disp();


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcome ${username}`);
    }
}

const userOne = new User("taj",14,true);
console.log(userOne);
const userTwo = new User("ayaj",15,false);
console.log(userTwo);



