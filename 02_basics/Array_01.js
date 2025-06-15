const myArr = [0, 1, 2, 3, 4]
const myheros= [ "spiderman", "wonderwoman"];

const myArr2 = new Array(0, 1, 2, 3)
// console.log(myArr[1])

// Array Methods

myArr.push(5)
myArr.push(6)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(-1)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(-2))

const newArr = myArr.join()

// console.log(myArr)
// console.log( newArr)

//slice, splice

console.log("a", myArr);

const mynew1 = myArr.slice(1,3)
console.log(mynew1)
console.log("b", myArr);

const mynew2 = myArr.splice(1,3)
console.log(mynew2)
console.log("c", myArr);

