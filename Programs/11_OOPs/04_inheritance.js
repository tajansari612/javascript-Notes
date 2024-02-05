class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    disp() {
        console.log("username :",this.username);
        console.log("email :",this.email);
        console.log("password :",this.password);
    }
}

class student extends user{
    constructor(name,rollNo,username,email,password){
        super(username,email,password);
        this.name = name;
        this.rollNo  = rollNo;
    }
}

taj = new student("taj",14,"taj123","taj123@yuva.com","12345");
console.log(taj);
console.log();

console.log("name :",taj.name);
console.log("rollNo :",taj.rollNo);
console.log("username :",taj.username);
console.log("email :",taj.email);
console.log("password :",taj.password);
console.log();

taj.disp();