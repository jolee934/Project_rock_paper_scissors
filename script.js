

// Create variables
const choices = document.querySelector(".choices")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".scissor")
const scissor = document.querySelector(".paper")
const playerScore = document.querySelector(".your-score")
const robotScore = document.querySelector(".robot-score")
const round = document.querySelector(".round")


//function to return a Computer's choice of R, P, S randomly
function getComputerChoice() {
    let choice;
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        choice = "Rock"
    } else if (randomNumber === 1) {
        choice = "Paper"
    } else {
        choice = "Scissor"
    }
    return choice;
} 

let computerWinTotal= 0;
let playerWinTotal = 0;
let gameRound = 0;
let playerSelection;
let computerSelection;
let rockChosen = false;
let paperChosen = false;
let scissorChosen = false;


//function to play a round 
function playRound () {
    //note: this converts playerSection to uppercase to make comparison case insensitive
    
    computerSelection = getComputerChoice();
    gameRound++;
    
    round.textContent = gameRound;

    console.log(`computer selection is ${computerSelection}`);
    console.log(`rock is ${rockChosen}`);
    console.log(`paper is ${paperChosen}`);
    console.log(`scissor is ${scissorChosen}`);
    
    if (rockChosen === true) {
        if (computerSelection.toUpperCase() === "PAPER") {
            computerWinTotal++;
            console.log( "You Lose! Paper beats Rock")
            robotScore.textContent = computerWinTotal;
        }
        else if (computerSelection.toUpperCase() === "SCISSOR") {
            playerWinTotal++;
            console.log("You Win! Rock beats Scissor")
            playerScore.textContent =  playerWinTotal;
        }
        else if (computerSelection.toUpperCase() === "ROCK") {
            console.log("You Tie!")
        }
    // }   else if (playerSelection.toUpperCase() === "PAPER") {
    //     if (computerSelection.toUpperCase() === "SCISSOR") {
    //         computerWinTotal++;
    //         return "You Lose! Scissor beats Paper"
    //     }
    //     else if (computerSelection.toUpperCase() === "ROCK") {
    //         playerWinTotal++;
    //         return "You Win! Paper beats Scissor"
    //     }
    //     else if (computerSelection.toUpperCase() === "PAPER") {
    //         return "You Tie!"
    //    }
    // } else if (playerSelection.toUpperCase() === "SCISSOR") {
    //     if (computerSelection.toUpperCase() === "ROCK") {
    //         computerWinTotal++;
    //         return "You Lose! Rock beats Scissor"
    //     }
    //     else if (computerSelection.toUpperCase() === "PAPER") {
    //         playerWinTotal++;
    //         return "You Win! Scissor beats Paper"
    //     }
    //     else if (computerSelection.toUpperCase() === "SCISSOR") {
    //         return "You Tie!"
    //    }

    //When Game round hits 5, reset game and show winner
    rockChosen = false;
    paperChosen = false;
    scissorChosen = false;


    console.log(`game round is ${gameRound}`)
    if (gameRound === 5) {
        if (playerWinTotal > computerWinTotal) {
            console.log("You beat the robot!")
        }
        if (playerWinTotal < computerWinTotal) {
            console.log("You lost to the robot!")
        }
        else {console.log("You tied. Oh well. Try again. Or not. ")}
        gameRound = 0;
    }
    }  
}

choices.addEventListener("click", playRound);
rock.addEventListener("click", () => rockChosen = true)
paper.addEventListener("click", () => paperChosen = true)
scissor.addEventListener("click", () => scissorChosen = true)




//function to start the game - announces winner of 5 rounds
// function game() {
//     // for (let i = 0; i<5; i++) {
//         playerSelection = prompt("Type \"Rock\", \"Paper\", or \"Scissor\"")   
//         computerSelection = getComputerChoice(); 
//         console.log(computerSelection)    
//         console.log(playRound(playerSelection, computerSelection))
//     // }
//     if (playerWinTotal > computerWinTotal) {
//         console.log(`You won! You scored ${playerWinTotal} and the computer scored ${computerWinTotal}`)
//     } else if (computerWinTotal > playerWinTotal) {
//         console.log(`You lose! You scored ${playerWinTotal} and the computer scored ${computerWinTotal}`)
//     } else {
//         console.log(`You tied! You scored ${playerWinTotal} and the computer scored ${computerWinTotal}`)
//     }

// } 

// game();