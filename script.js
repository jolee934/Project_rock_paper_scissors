
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

//function to play a round 
function playRound (playerSelection, computerSelection) {
    //note: this converts playerSection to uppercase to make comparison case insensitive
    let outcome;
    
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "PAPER") {
            computerWinTotal++;
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection.toUpperCase() === "SCISSOR") {
            playerWinTotal++;
            return "You Win! Rock beats Scissor"
        }
        else if (computerSelection.toUpperCase() === "ROCK") {
            return "You Tie!"
        }
    }   else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "SCISSOR") {
            computerWinTotal++;
            return "You Lose! Scissor beats Paper"
        }
        else if (computerSelection.toUpperCase() === "ROCK") {
            playerWinTotal++;
            return "You Win! Paper beats Scissor"
        }
        else if (computerSelection.toUpperCase() === "PAPER") {
            return "You Tie!"
       }
    } else if (playerSelection.toUpperCase() === "SCISSOR") {
        if (computerSelection.toUpperCase() === "ROCK") {
            computerWinTotal++;
            return "You Lose! Rock beats Scissor"
        }
        else if (computerSelection.toUpperCase() === "PAPER") {
            playerWinTotal++;
            return "You Win! Scissor beats Paper"
        }
        else if (computerSelection.toUpperCase() === "SCISSOR") {
            return "You Tie!"
       }
    }


   
}


let playerSelection;
let computerSelection;
/*testing computerSelection
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))*/


function game() {
    for (let i = 0; i<5; i++) {
        playerSelection = prompt("Type \"Rock\", \"Paper\", or \"Scissor\"")   
        computerSelection = getComputerChoice(); 
        console.log(computerSelection)    
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerWinTotal > computerWinTotal) {
        console.log(`You won! You scored ${playerWinTotal} and the computer scored ${computerWinTotal}`)
    } else if (computerWinTotal > playerWinTotal) {
        console.log(`You lose! You scored ${playerWinTotal} and the computer scored ${computerWinTotal}`)
    } else {
        console.log(`You tied! You scored ${playerWinTotal} and the computer scored ${computerWinTotal}`)
    }

} 

game();