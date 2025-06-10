// console.log(null>0) //false
// console.log(null==0) //false
// console.log(null>=0) // true becoz null is turned into 0 while comparision and the statement turn to be 0>=0 which is logically and mathematically true

//The answer will false if we compare undefined with 0 or any other value

// console.log("2"===2) //strict checking it means that it checks datatype too while comparing

// PRIMITIVE DATA TYPES 

// 7 Types => String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const id2=Symbol('123')
// console.log(id===id2);

const bigno = 46846135165n
// console.log(bigno)
// REFERNCE (non primitive)

// Arrays, Objects, Functions

const heros=["superman", "batman", "spiderman"]
let myobj={
    name:"bhavaya",
    age:20,
}
// console.log(heros)
// console.log(myobj)

const myFunction = function(){
    console.log("HEllo")
}
// myFunction() calling function with the help of a constant

console.log(typeof bigno)
