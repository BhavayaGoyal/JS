const name = "bhavaya-bb "
const repoCount= 50

// console.log(name + repoCount+" value") not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const DramaName = new String ('Happiness-saebom-yihyun')

console.log(DramaName[0]);
console.log(DramaName.__proto__);

console.log(DramaName.length);
console.log(DramaName.toUpperCase());
console.log(DramaName.charAt('7'));
console.log(DramaName.indexOf('p'));
console.log(DramaName.toLowerCase());

const newstring = name.substring(0,4)
console.log(newstring);

const anotherString = DramaName.slice(0,4)
console.log(anotherString);

const String1="    bhavaya   ";
console.log(String1)
console.log(String1.trim())

const url = "https://youtube.com/youtube%20hello"

console.log(url.replace('%20','-'))

console.log(url.includes('youtube'))

console.log(DramaName.split('-'))
