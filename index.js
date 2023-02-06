function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    let computerSelection;
    if(random ===0){computerSelection = "rock"}
    else if(random === 1){computerSelection = "paper"}
    else{computerSelection = "scissors"}
    console.log(computerSelection);
    return computerSelection
}

function getPlayerChoice(){
    let playerSelection = prompt("rock, paper or scissors ?").toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return("TIE!");
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper"){
                playerScore = playerScore+1;
                return(`Winner Winner Chicken Dinner, ${playerSelection} beats ${computerSelection}!`);
    }
    else{
        computerScore = computerScore +1;
        return(`Rip in pepperoni, ${computerSelection} beats your little ${playerSelection}!`);
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player = ${playerScore}, computer = ${computerScore}`);
    }
}

let playerScore = 0;
let computerScore =0;

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(game());