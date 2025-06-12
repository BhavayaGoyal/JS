const score = 400
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //brings two zeros after the decimal

const num1 = 123.9855
// console.log(num1.toPrecision(3)) //Befor Decimal priority is high then after decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//*********** MATHS ***********

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(4, 2, 5, 7))
// console.log(Math.max(4, 2, 5, 7))

console.log(Math.random());
console.log(Math.floor(Math.random()*10) +1);

const min = 1
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)