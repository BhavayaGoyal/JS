const kdrama =[ "Happiness", "Vincenzo", "DOTS"]
const Bollywood = ["K3G", "Krish", "Raid"]

// kdrama.push(Bollywood)

// console.log(kdrama)
// console.log(kdrama[3][2])

// const ans= kdrama.concat(Bollywood)
// console.log(ans)

const all_Drama = [...kdrama, ...Bollywood]
// console.log(all_Drama)

const arr1 = [1, 2, 3, [4, 5, 6], 7,  [6, 7,[3, 2]]]
const arr2 = arr1.flat(Infinity)
//console.log(arr2 )


console.log(Array.isArray("bhavaya")) //checks if the input is array or not. 
console.log(Array.from("bhavaya")) //converts the string or any other tyoe to array
console.log(Array.from({name: "bhavaya"})) // interesting case if the from function is unable to convert the input it will give an empty array.

let score1= 100
let score2=200
let score3= 300

console.log(Array.of(score1, score2, score3))