// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random() * 16)]
    }
    return color
}
//console.log(randomColor());
   let intervalId;

const startChangingColor = function(){
    intervalId = setInterval(changeByColor, 1000);

   function changeByColor() {
        document.body.style.backgroundColor  =randomColor();
    }
}
const stopChangingColor = function(){
     

}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)