let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Block Scope: ", a);
}


//console.log("Global Scope: ", a);
//console.log(b);
// console.log(c);


function One(){
    const username = "ABC"

    function two(){
        const website = "Utube"
        console.log(username);
    }
    //console.log(website);

    two()

}
//One()

if (true) {
    const username = "bhavaya"
    if(username === "bhavaya"){
        const web = " youtube" 
        // console.log(username + web);
    }
    //console.log(web);
}

//console.log(username);


//+++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++
console.log(addone(5))

function  addone(value){
    return value + 1
}  


console.log(addTwo(6))
const addTwo = function(num){
    return num + 2
}
