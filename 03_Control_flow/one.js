// if statement
// const temp = 41
// if(temp < 50){
//     console.log("Yes temperature is less than 50")
// } else {
//     console.log("no")
// }

// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }


//Short hand notation

// const bal = 1000
// if(bal > 500) console.log("yes condition is true"); implicit condition

// if(bal < 500 ){
//  console.log("less than 500")
// } else if (bal < 750){
//   console.log("less than 750")
// } else if(bal < 900){
//     console.log("less than 900")
// } else{
//     console.log("less than 1500")
// }


const userLoggedIn = true
const debitCard = true


if(userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}
const loggedInEmail = true
const loggedInFromGoogle = false

if(loggedInEmail || loggedInFromGoogle || true){
    console.log("Welcome")
}