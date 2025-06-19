function sayMyName(){
    console.log("Bhavaya");
    console.log("Goyal")
}
// sayMyName()

// function addTwoNumbers(no1, no2){
//     console.log( no1 + no2);
// }
function addTwoNumbers(no1, no2){
    // let res = no1 + no2
    // return res;
    return no1 + no2
}
const result = addTwoNumbers(4, 5)
// console.log("Result: ", result);

function loginUserMsg(username = "user"){
    if(username === undefined){
       // console.log("please enter a username")
        return
    } 
    return `${username} just logged in`
}
// console.log (loginUserMsg("Bhavaya"))
// console.log (loginUserMsg())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400))

const user = {
    username: "bhavaya",
    price: 200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "abc",
    price: 400
})

const mynewArray = [200,400,600,1000]

function return2ndValue(getArray){
    return getArray[2]
}
return2ndValue(mynewArray)
return2ndValue([700,800,600])