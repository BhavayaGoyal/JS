function setUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this ,username)
    
    this.email = email
    this.password =password

}

const chai = new createUser("abc", "abc@gmail.com","1234")
console.log(chai)


// Static Property

 class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static uniqueId(){   // stops from using the function through objects
       return `123`
    }
 }

 const obj1 = new User("bhavaya")
//console.log( obj1.uniqueId())

class teacher extends User{
    constructor(username,email){
        super(username)
        this.emial = email
    }
}

const obj = new teacher("Iphone", "i@phone.com")
obj.logMe();
console.log(obj.uniqueId())