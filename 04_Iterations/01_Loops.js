// for
 
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is mid")
    }
    //console.log(element)   

}


for (let i = 1; i <= 2; i++) {
    //console.log(`outer loop : ${i}`);
      for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
       // console.log(i+ ' * '+ j + ' = '+i*j);
      }
    
}

let myArray = ["ABC", "DEF", "XYZ"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
}

// break & continue

for (let index = 0; index < 20; index++) {
    if(index == 5){
    //console.log(`value of i ${index}`);
    break
    }
}

for (let index = 0; index <= 20; index++) {
    if(index == 5){
    console.log(`5 detected`);
    continue
    }
    console.log(`value of i ${index}`)

}