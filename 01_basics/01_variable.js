const accountId=144553
let accountEmail="bhavayagoyal89@gmail.com"
var accountPassword="12345"
accountCity="Jaipur" //not prefered but their is a possibility 
let accountState; //the output will be undefined
// accountId=2 not allowed beacuse const has a fixed value which cannot be changed.
console.log(accountId)

/*
prefer not to use var beacuse of issue in block scope and functional scope
*/
accountEmail="hs@.com"
accountPassword="3456"
accountCity="hisar"

console.table([accountId, accountEmail, accountCity, accountState])
