

class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    encryptPass(password){
        let pass = password.toUpperCase();
        return pass;
    }

    set password(password){
        this._password = password;
    }

    get password(){
        return this.encryptPass(this._password);
    }
}

taj = new user("taj123@yuva.com","taj@123");
console.log(taj);
console.log(taj.email);
console.log(taj.password);