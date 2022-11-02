const items = ['rock', 'scissors', 'paper'];

function getComputerChoice() {
    const choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}


function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'Tie';
    }
    else if(
        (playerSelection == 'rock' && computerSelection == 'scissors'),
        (playerSelection == 'scissors' && computerSelection == 'paper'),
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return 'Player';
    }
    else {
        return 'Computer';  
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie') {
        return "It's a tie!"
    }
    else if(result == 'Player') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose, ${computerSelection} beats ${playerSelection}`
    } 
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt('Rock, paper, scissors');
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(items.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    console.log('Welcome!')
    console.log('--------')
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('------------------------------')
    }
}

game();