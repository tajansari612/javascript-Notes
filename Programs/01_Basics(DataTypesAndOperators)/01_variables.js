const accountId = 1433;  //As accountId is constant it can't be changed

//accountId = 123;  //not allowed

let accountEmail = "taj@gmail.com";
var accountPassword = "12345";
accountCity = "dholakpur";
let accountState;

/*
    Prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId,accountEmail,accountPassword,accountCity,accountState);  //Print values with single space gap
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //Print values in tabular form
