// RPS game elements 
class Game {
    constructor(paper, rock, scissors, computerWins, playerWins) {
        this.computerWins = computerWins;
        this.playerWins = playerWins;
        this.paper = paper;
        this.rock = rock;
        this.scissors = scissors;
    }
};

const winCap = 5;
const startingScore = 0;
let theGame = new Game("paper", "rock", "scissors", 0, 2);



function playRound(playerMove) {

    // get computer move 
    const computerSelection = getComputerMove();
    const playerSelection = playerMove;


    if (playerSelection === theGame.rock && computerSelection === theGame.scissors) {
        theGame.playerWins++;
    } else if (playerSelection === theGame.rock && computerSelection === theGame.paper) {
        theGame.computerWins++;
    } else if (playerSelection === theGame.paper && computerSelection === theGame.rock) {
        theGame.playerWins++;
    } else if (playerSelection === theGame.paper && computerSelection === theGame.scissors) {
        theGame.computerWins++;
    } else if (playerSelection === theGame.scissors && computerSelection === theGame.rock) {
        theGame.computerWins++;
    } else if (playerSelection === theGame.scissors && computerSelection === theGame.paper) {
        theGame.playerWins++;
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
        move = theGame.rock;
    } else if (n == 1) {
        move = theGame.paper;
    } else {
        move = theGame.scissors;
    }
    return move;
}