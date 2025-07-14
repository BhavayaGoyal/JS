class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}bhavaya`
    }
    set password(val){
        this._password = val
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
         this._email = val 
    }
}

const mili = new User ("Mili@gmail.com", 123)
console.log(mili.password);
console.log(mili.email);


//old syntax

function User1 (email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
             return this._email.toUpperCase()
        },
        set:function(val){
            this._email = val
        }
    })
       Object.defineProperty(this, 'password', {
        get: function(){
             return this._password.toUpperCase()
        },
        set:function(val){
            this._password = val
        }
    })
}

const chai =new User1("chai@gmail.com", "chai")
console.log(chai.email)

//Object based

const person = {
    _email: 'bhavaya@gmail.com',
    _password: "abc",

    get email(){
         return this._email.toUpperCase() 
    },

    set email(val){
       this._email = val
    }
}

const tea = Object.create(person)
console.log(tea.email);