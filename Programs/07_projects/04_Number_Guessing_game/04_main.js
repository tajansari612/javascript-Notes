const submit = document.querySelector('#submit');
const userInput = document.querySelector('#number');
const prevGuess = document.querySelector('#prevGuess');
const lowOrHigh = document.querySelector('#lowOrHigh');
const newGameBtn = document.querySelector('#new-game-btn');


let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);



let numGuess = 0;
let prevGuesses = [];

let playGame = true;
if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number!")
    } else if (guess < 1) {
        alert("Please enter a number greater than or equal to 1");
    } else if (guess > 100) {
        alert("Please enter a number less than or equal to 100");
    } else {
        prevGuesses.push(guess);
        if (numGuess >= 9) {
            displayGuess(guess);
            displayMessage(`Game Over, random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}




function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Guesed number is too low`);
    } else {
        displayMessage(`Guessed number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    prevGuess.innerHTML += `${guess}, `;
    numGuess++;
    remGuess.innerHTML = `${10 - numGuess};`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    submit.setAttribute('hidden', '');
    playGame = false;
    newGameBtn.removeAttribute('disabled')
    newGameBtn.removeAttribute('hidden')
    newGame();
}

function newGame() {
    newGameBtn.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        numGuess = 0;
        prevGuesses = [];
        prevGuess.innerHTML = `Previous Guessess: `;
        remGuess.innerHTML = `${10 - numGuess};`
        lowOrHigh.innerHTML = ``;
        userInput.removeAttribute('disabled');
        playGame = true;
    })
}