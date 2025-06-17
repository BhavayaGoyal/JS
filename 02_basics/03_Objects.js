// singleton  => Object.create


//object literals
const mySymbol = Symbol("Mykey1")
const user = {
    name: "Bhavaya",  //we define key and value in objects
    age : 20,
    [mySymbol]: "MyKey",
    "full name" : "Bhavaya Goyal",
    location : "Sirsa",
    email: "bhavaya@gmail.com",
    isLoggedIn: false,
    daysLoggedin : ["Monday", "Tuesday"]
}

// console.log( user.email)
// console.log( user["email"])
// console.log( user["full name"])
// console.log(user[mySymbol])

user.email = "bhavaya@chatgpt.com"
// Object.freeze(user) //the value of the object can't be changed after we freeze the object
user.email = "bhavaya@ms.com"
// console.log(user)

user.greeting = function(){
    console.log("Hello user")
}
// console.log(user.greeting());

user.greeting2 = function(){
    console.log(`hello user , ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());