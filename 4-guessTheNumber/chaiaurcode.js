let randomNo = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const user = document.querySelector('#guessField')
const guessSlot=  document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')

const p =document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(user.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //if he has guessed a number which is valid
    if(isNaN(guess)){
        alert('please enter a valid number')
    } else if(guess < 1){
        alert('please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number Less than 100')
    }
    else{
       prevGuess.push(guess)
       if(numGuess === 11){
           displayGuess(guess)
           displayMsg(`game Over. Random number was ${randomNo}`)
           endGame()
       } else {
        displayGuess(guess)
        checkGuess(guess)
       }
    }
}

function checkGuess(guess){
    //for printing msg to check whether the number is matched, high, low
    if(guess === randomNo){
        displayMsg(`You guessed it right 😊`)
        endGame()
    } else if(guess < randomNo){
        displayMsg(`Number is TOOO low`)
    }else if(guess > randomNo){
        displayMsg(`Number is TOOO high`)
    }
}

function displayMsg(msg){
    //it will interact with DOM
    lowOrHi.innerHTML = `<h3>${msg} </h3>`
}

function displayGuess(guess){
    //
     user.value = ''
    guessSlot.innerHTML += `${guess} `;
    numGuess++; 
    remaining.innerHTML = `${11-numGuess} `;
}

function newgame(){
   //

   const newGameBtn = document.querySelector('#newGame')
   newGameBtn.addEventListener('click', function (event){
    randomNo = parseInt(Math.random()*100+1);    
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML= '';
    remaining.innerHTML = `${11-numGuess} `;
    user.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
   })
}

function endGame(){
    //
    user.value= '';
    user.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newgame();
}