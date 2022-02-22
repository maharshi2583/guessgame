let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let pass = new Audio("pass.mp3");
let fail = new Audio("fail.mp3");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

//! Reload the game

const newGameBegin = () => {
    window.location.reload();
}

const startGame = () => {
    pass.play();
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
}

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

//! Main logic of Our Game

const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    //todo check the value

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is High 😨";
            userNumberUpdate.value = "";
            fail.play();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is Low 😟";
            userNumberUpdate.value = "";
            fail.play();
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😉";
            userNumberUpdate.value = "";
            startNewGame();
            pass.play();
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
            fail.play();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
            fail.play();
        } else {
            userGuessUpdate.innerHTML = "It's Correct 😉";
            userNumberUpdate.value = "";
            startNewGame();
            pass.play();
        }
    }

    document.getElementById("attemps").innerHTML = userGuess.length;
}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}