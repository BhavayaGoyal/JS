// First way to create Promise 
const promiseOne = new Promise( function (resolve, reject) {
    // do an async task => DB calls, cryptography, network
    setTimeout(function (){
       console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed"); 
})


// Second way to create Promise 
new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async Task 2")
     resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed")
})


const promiseThree = new Promise(function(resolve, reject){
setTimeout(function(){
resolve({username:"ABC", email: "abc@gmail.com"})
},1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "bhavaya", password: "123"})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
      console.log(user);
      return user.username
})
.then((username) =>{
     console.log(username)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=> console.log("The promise either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

    // use of async and await
async function consumePromiseFive(){
   try
   {
     const res = await promiseFive
    console.log(res);
}
catch(err){
    console.log(err)
}
}

consumePromiseFive()


// async function getAllUsers() {
//    try 
//    {
//     const response = await fetch('https://api.sampleapis.com/coffee/hot')
//    const data = await response.json()
//    console.log(data);
// }
//   catch(error){
//     console.log("E: ", error);
//   }
// }

// getAllUsers()

fetch('https://api.sampleapis.com/coffee/hot')
.then((respone) =>{
    return respone.json()
})
.then((data)=> {
    console.log(data);
})
.catch((e)=> console.log(e))
