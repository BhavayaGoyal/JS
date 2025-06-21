const useremail = "bhavaya@gmail.com"

if(useremail){
    //console.log("Got user email")
} else{
   // console.log("Don't have user email")
}
// falsy values
// 1. false 2. 0 3. -0 4. 0n 5. "" 6. null 7. undefined 8. NaN

//truthy values
// 1. "0" 2. "false", " ", [], {}, function(){}

// const userArray = []
// if(userArray.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 5
console.log(val1);


//Teraniary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("More than 80")