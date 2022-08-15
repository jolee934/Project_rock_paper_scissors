
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


//function to play a round 
function playRound (playerSelection, computerSelection) {
    //note: this converts playerSection to uppercase to make comparison case insensitive
    let outcome;
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection.toUpperCase() === "SCISSOR") {
            return "You Win! Rock beats Scissor"
        }
        else if (computerSelection.toUpperCase() === "ROCK") {
            return "You Tie!"
        }
    }   else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "SCISSOR") {
            return "You Lose! Scissor beats Paper"
        }
        else if (computerSelection.toUpperCase() === "ROCK") {
            return "You Win! Paper beats Scissor"
        }
        else if (computerSelection.toUpperCase() === "PAPER") {
            return "You Tie!"
       }
    } else if (playerSelection.toUpperCase() === "SCISSOR") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "You Lose! Rock beats Scissor"
        }
        else if (computerSelection.toUpperCase() === "PAPER") {
            return "You Win! Scissor beats Paper"
        }
        else if (computerSelection.toUpperCase() === "SCISSOR") {
            return "You Tie!"
       }
    }


    /*    
    } else if ((playerSelection.toUpperCase() === "PAPER")) {

    } else if ((playerSelection.toUpperCase() === "SCISSOR"))
    return outcome */
   
}

//testing the code
const playerSelection = "scissor";
const computerSelection = getComputerChoice();
//testing computerSelection
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))