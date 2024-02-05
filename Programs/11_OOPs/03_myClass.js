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

let taj = new user("taj123","taj@yuva.com","1234");
let ayaj = new user("ayaj456","ayaj@yuva.com","1984");
console.log(taj);
console.log(ayaj);

console.log(taj.email);
console.log(taj.username);
console.log(taj.password);

ayaj.disp();