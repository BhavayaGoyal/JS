// let myName = "bhavaya      "

// console.log(myName.trueLength);
 

let myHeros = ["thor", "spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.bhavaya = function(){
    console.log(`bhavaya is present in all objects `)
}

Array.prototype.heyBhavaya= function(){
    console.log(`Hello`)
}

// heroPower.bhavaya()
//myHeros.bhavaya()
myHeros.heyBhavaya()
// heroPower.heyBhavaya()

// inheritance
// old model
const user1= {
    name: "abc",
    email:"abc@gmail.com"
}

const teacher  = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true, 
    __proto__: teachingSupport
}

teacher.__proto__ = user1

// modern access

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "Bhavaya Goyal      "
String.prototype.trueLength = function(){
    console.log(`${this}`);    
    console.log(`True length is ${this.trim().length}`)
}
anotherUserName.trueLength()
"Mili".trueLength()
"Goyal ".trueLength()