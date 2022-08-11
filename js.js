const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const scoreText = document.querySelector('.scoreboard-text');
const currentRound = document.querySelector('#round-number');

class RockPaperScissors{
    constructor(){
        this.ROCK = 'rock'
        this.PAPER = 'paper'
        this.SCISSORS = 'scissors'
        this.winCap = 5
        this.playerMove = "unknown"
        this.computerMove = "unknown"
        this.playerWins = 0
        this.computerWins = 0
        this.roundCount = 0
    }
    
 getComputerMove() {
    // get a random num
    let n = Math.random() * 3;
    // floor it
    n = Math.floor(n);
    // variable for the move string
    var move;
    if (n == 0) {
        move = this.ROCK;
    } else if (n == 1) {
        move = this.PAPER;
    } else {
        move = this.SCISSORS;
    }
    return move;
}


setUpButtons(){
    const buttons = document.querySelectorAll('.button')
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id === this.ROCK || button.id === this.PAPER || button.id === this.SCISSORS) {
            // update the player move and play the round
            this.playerMove = button.id;
            this.playRound()
        } else if (button.id === "play-again") {
            this.resetGame()
        }
    });
});
}

playRound() {
    // get a move from the computer 
    this.computerMove = this.getComputerMove();
    let winner;
    if (this.computerWins < 5 && this.playerWins < 5) {
        if (this.playerMove === this.computerMove) {
            winner = "none";
        } else if (this.playerMove === this.ROCK && this.computerMove === this.PAPER) {
            scoreText.textContent = "Your rock loses to paper!";
            this.computerWins += 1;
            winner = "computer";
        } else if (this.playerMove === this.ROCK && this.computerMove === this.SCISSORS) {
            scoreText.textContent = "Your rock beats scissors!";
            this.playerWins += 1;
            winner = "player";
        } else if (this.playerMove === this.PAPER && this.computerMove === this.ROCK) {
            scoreText.textContent = "Your paper beats rock!";
            this.playerWins += 1;
            winner = "player";
        } else if (this.playerMove === this.PAPER && this.computerMove === this.SCISSORS) {
            scoreText.textContent = "Your paper loses to scissors!";
            this.computerWins += 1;
            winner = "computer";
        } else if (this.playerMove === this.SCISSORS && this.computerMove === this.ROCK) {
            scoreText.textContent = "Your scissors loses to rock!";
            this.computerWins += 1;
            winner = "computer";
        } else if (this.playerMove === this.SCISSORS && this.computerMove === this.PAPER) {
            scoreText.textContent = "Your scissors beats paper!";
            this.playerWins += 1;
            winner = "player";
        }
    }

    if (this.computerWins >= this.winCap || this.playerWins >= this.winCap) {
        this.updateScoreCard(winner)
        this.declareWinner()
     }else {
        this.roundCount += 1;
        this.updateScoreCard(winner)
     }  
}


updateScoreCard(winner){
    currentRound.textContent = this.roundCount;
    if (winner === "none") {
        scoreText.textContent = "Tie Round!";
    } else if (winner === "player") {
        playerScore.textContent = this.playerWins;
    } else {
        computerScore.textContent = this.computerWins;
    }
  }

declareWinner() {
    if (this.computerWins === this.playerWins) {
        scoreText.textContent = "The game is a tie!"
    } else if (this.computerWins > this.playerWins) {
        scoreText.textContent = "You lost to Mr Binary!"
    } else {
        scoreText.textContent = "You beat MR. Binary!"
    }
}

resetGame(){
    // reset the UI scores
    playerScore.textContent = 0
    computerScore.textContent = 0
    currentRound.textContent = 0
    scoreText.textContent = "Choose your weapon"
    // reset class properties
    this.playerMove = "unknown"
    this.computerMove = "unknown"
    this.playerWins = 0
    this.computerWins = 0
    this.roundCount = 0
}
}

const RunGame = (() =>{
    const rockPaperScissors = new RockPaperScissors()
    rockPaperScissors.setUpButtons()
})()

