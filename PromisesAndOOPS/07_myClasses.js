

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}@123`
    }

    ChangeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const obj1 = new User("abc", "abc@gmail.com", "abc")

console.log(obj1.encryptPassword());
console.log(obj1.ChangeUsername());

// BTS

function User1(username, email, password){
       this.username = username
        this.email = email
        this.password = password
}

User1.prototype.encryptPassword = function(){
     return `${this.password}@123`
}

User1.prototype.ChangeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const obj2 = new User1("xyz", "xyz@gmail.com", "xyz1")

console.log(obj2.encryptPassword());
console.log(obj2.ChangeUsername());

// inheritance

class IUser{
    constructor(username){
        this.username= username
    }

    logMe()
    {
      console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends IUser{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password = password

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
   
}

const user1 =new Teacher("chai", "chai@teacher.com", "123")
user1.addCourse()
user1.logMe()

const masalaChai = new IUser ("Masala Chai")
masalaChai.logMe()

console.log(user1 instanceof IUser)