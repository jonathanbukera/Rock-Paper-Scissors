function getComputerChoice(){
    let choice = Math.round(Math.random()*2);
    let computerChoice = "";
    if(choice == 0){
        computerChoice = "rock";
    }
    else if(choice == 1){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }

    return computerChoice;
}
 
function playerSelection(){
    let selection = prompt("what is your selection for the game?");
    selection = selection.toLowerCase();
    while(selection !== "rock" && selection !== "paper" && selection !== "scissor"){
        selection = prompt("You did not enter a valid selection to play rock paper scissor");
        selection = selection.toLowerCase();
    }
    return selection;
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice();

    if(playerSelection == computerSelection){
        console.log("You have selected " + playerSelection  + " and the computer has selected " + computerSelection + " It's a draw!");
        return 0;
    }
    else if(computerSelection == "rock" && playerSelection == "scissor" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissor" && playerSelection == "paper"){
        console.log("You have selected " + playerSelection  + " and the computer has selected " + computerSelection + " you lose!");
        return 1;
    }
    else{
        console.log("You have selected " + playerSelection  + " and the computer has selected " + computerSelection + " you win congratulation!");
        return 2;
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i<5; i++){

        let score = playRound(playerSelection());
        if(score == 1){
            ++computerScore;
        }
        else if(score == 2){
            ++playerScore;
        }
    }
    if(computerScore > playerScore){
        return "You have lost!";
    }
    else if(computerScore < playerScore){
        return "You have won congratulation!";
    }
    else{
        return "It is a draw!";
    }
}