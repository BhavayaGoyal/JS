const user ={
    username: "bhavaya",
    loginCount: 8,
    signedIn: true,

    getUser: function(){
        // console.log("Got User details from DB");
       // console.log(`Username is ${this.username}`)
      // console.log(this)
    }

}


console.log(user.username);
console.log(user.getUser());
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount= loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        //console.log(`welcome${this.username}`);
    }
    return this
}

const user1 =new User("bhavaya", 12, true)
const user2 = new User("abc", 13, false)
console.log(user1.constructor)
//console.log(user2)

//new keyword creates an empty object which is called instance/object.
// 1 constructor function is called
// 2 arguments gets in injected in object
// 3 function gets all information
