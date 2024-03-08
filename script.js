const rpsButtons = document.querySelectorAll('button');
const container = document.querySelector('#container');
let decision = document.createElement('p');
const ending = document.createElement('p');
const playSecond = document.createElement('p')


const restartButton = document.createElement('button');
restartButton.textContent = 'Restart';

let yourScoreList = document.createElement('li');
let computerScoreList = document.createElement('li');
const scoreList = document.createElement('ul');

let yourScore = 0;
let computerScore = 0;



yourScoreList.textContent = 'Your score is : ' + yourScore;
computerScoreList.textContent = 'The computer score is : ' + computerScore;


container.appendChild(scoreList);
scoreList.appendChild(yourScoreList);
scoreList.appendChild(computerScoreList);
container.appendChild(decision);

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


rpsButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if(yourScore < 5 && computerScore < 5){
            let choice = button.textContent;
            score = playRound(choice);
            if (score == 0){
                decision.textContent = " It's a draw!";
            }
            else if(score == 1){
                decision.textContent = "the computer won!";
                computerScore++;
                computerScoreList.textContent = 'The computer score is : ' + computerScore;
            }
            else{
                decision.textContent = "You won!"
                yourScore++;
                yourScoreList.textContent = 'Your score is : ' + yourScore;
            }
            if(yourScore == 5){
                ending.textContent = 'You have won the game, congratulation! Press the Restart button to play another game!';
                container.appendChild(ending);
                container.appendChild(restartButton);
            }
            if(computerScore == 5){
                ending.textContent = 'You have lost the game. Press the Restart button to play another game!';
                container.appendChild(ending);
                container.appendChild(restartButton);
            }
        }
        else{
            if(playSecond.textContent == ''){
                playSecond.textContent = 'You need to start another game!';
            }
            playSecond.textContent = 'You need to start another game!';
            container.appendChild(playSecond);
        }
    })
})  

restartButton.addEventListener('click', ()=>{
    yourScore = 0;
    computerScore = 0;
    yourScoreList.textContent = 'Your score is : ' + yourScore;
    computerScoreList.textContent = 'The computer score is : ' + computerScore;
    decision.textContent = '';
    ending.textContent = '';
    playSecond.textContent='';
    container.removeChild(restartButton);
})






