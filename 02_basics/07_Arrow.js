const user = {
    username : "Bhavaya",
    price: 1000,

    welcomemsg : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}
// user.welcomemsg()
// user.username = "Sam"
// user.welcomemsg() 
 //console.log(this) this will show empty brackets {}

// function func1(){
//     let user = "bhavaya"
//     console.log(this.user); //output will be undefined
// } 
// func1()


// const chai = function(){
//     let user = "bhavaya"
//      console.log(this.user); //output will be undefined
// }
// chai()

const func2 = () => {
    let user = "bhavaya"
    console.log(this)
}
// func2()
// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit
// }
// console.log(addTwo(7,5))

// const addTwo = (num1, num2) =>   num1 + num2 //implicit
   
// console.log(addTwo(7,5))

 const addTwo= (num1, num2) =>(num1 + num2) //implicit
//  console.log(addTwo(10,10))

const func1 = () => ({username: "bhavaya"})
// console.log(func1())

