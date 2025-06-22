// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
  //  console.log(`each char is ${greet}`)
}

//Maps

const map =new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('UK', "United Kingdom")

//console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':- ', value)
}


const myObj = {
   drama1 : 'Vincenzo',
   drama2 : 'DOTS'
}

 //for (const [key , value] of myObj) {
//     console.log(key, ':- ', value)
// }


// forin loop with objects 


const myObject  = {
    js : 'javascipt',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

    for (const key in myObject) {
     //console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js","rb", "c++", "c"]

for (const key in programming) {
   //console.log(programming[key])
}

// for (const key in map) {
//     console.log(key);
// } maps are not iterable so forin loop will not work for the Map()

