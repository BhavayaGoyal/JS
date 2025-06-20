// Immediately Invoked Function Expressions (IIFE) ->is an idiom in which a JavaScript function runs as soon as it is defined.Avoiding polluting the global namespace by creating a new scope.


(function function1(){
    //named IIFE
    console.log("Hey !!")
}) (); //semi colon is mandatory for every IIFE 

( (name) => {
    //Simple IIFE
  console.log(`Hey ${name} !!`)  
}) ('bhavaya');

