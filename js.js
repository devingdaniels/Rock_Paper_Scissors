// CONSTANTS
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const winCap = 5;
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const scoreText = document.querySelector('.scoreboard-text');
const currentRound = document.querySelector('#round-number');




// VARIABLES
let buttons = document.querySelectorAll('button');
let playerMove;
let computerMove;
let computerWins = 0;
let playerWins = 0;
let roundCount = 0;

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id !== "play-again") {
            playerMove = button.id;
            getWinner();
        } else {
            window.location.reload();
            playerScore.textContent = 0;
        }
    });
});

function getWinner() {

    computerMove = getComputerMove();

    let winner;


    if (computerWins < 5 && playerWins < 5) {
        if (playerMove === computerMove) {
            winner = "none";
        } else if (playerMove === ROCK && computerMove === PAPER) {
            scoreText.textContent = "Your rock loses to paper!";
            winner = "computer";
        } else if (playerMove === ROCK && computerMove === SCISSORS) {
            scoreText.textContent = "Your rock beats scissors!";
            winner = "player";
        } else if (playerMove === PAPER && computerMove === ROCK) {
            scoreText.textContent = "Your paper beats rock!";
            winner = "player";
        } else if (playerMove === PAPER && computerMove === SCISSORS) {
            scoreText.textContent = "Your paper loses to scissors!";
            winner = "computer";
        } else if (playerMove === SCISSORS && computerMove === ROCK) {
            scoreText.textContent = "Your scissors loses to rock!";
            winner = "computer";
        } else if (playerMove === SCISSORS && computerMove === PAPER) {
            scoreText.textContent = "Your scissors beats paper!";
            winner = "player";
        }
    }

    if (computerWins >= winCap || playerWins >= winCap) {
        declareWinner();
    } else {
        roundCount += 1;
        currentRound.textContent = roundCount;
        if (winner === "none") {
            scoreText.textContent = "It's a tie!";
        } else if (winner === "player") {
            playerWins += 1;
            playerScore.textContent = playerWins;
        } else {
            computerWins += 1;
            computerScore.textContent = computerWins;
        }
    }
}


function declareWinner() {
    if (computerWins === playerWins) {
        scoreText.textContent = "It is a tie game!"
    } else if (computerWins > playerWins) {
        scoreText.textContent = "You lost to Mr Binary!"
    } else {
        scoreText.textContent = "You win!"
    }
}

function getComputerMove() {
    // get a random num
    let n = Math.random() * 3;
    // floor it
    n = Math.floor(n);
    // variable for the move string
    var move;
    if (n == 0) {
        move = ROCK;
    } else if (n == 1) {
        move = PAPER;
    } else {
        move = SCISSORS;
    }
    return move;
}