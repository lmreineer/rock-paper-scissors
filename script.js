function getComputerChoice() {
    const choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

const items = ['rock', 'paper', 'scissors'];

function getResult(playerSelect, computerSelect) {
    if(playerSelect == computerSelect) {
        return 'Tie';
    }
    else if (
    (playerSelect == 'rock' && computerSelect == 'scissors') ||
    (playerSelect == 'paper' && computerSelect == 'rock') ||
    (playerSelect == 'scissors' && computerSelect == 'paper')) {
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function playRound(playerSelect, computerSelect) {
    const result = getResult(playerSelect, computerSelect);
    if(result == 'Tie') {
        return `It's a tie! Both used ${computerSelect}`
    }
    else if(result == 'Player') {
        return `You won! You used ${playerSelect} and Computer used ${computerSelect}`
    }
    else {
        return `You lost, Computer used ${computerSelect} and You used ${playerSelect}`
    }
}

function getPlayerChoice() {
    let inputValid = false;
    while(inputValid == false) {
        const choice = prompt('Enter your choice here');
        if(choice == null) {
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if(items.includes(choiceInLower)) {
            inputValid = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('Hello! Welcome to Rock, Paper, Scissors! Open your console and enter your choice above!');
    console.log('--------------------')
    for(let i = 0; i < 5; i++) {
        const playerSelect = getPlayerChoice();
        const computerSelect = getComputerChoice();
        console.log(playRound(playerSelect, computerSelect));
        console.log('--------------------');
        if(getResult(playerSelect, computerSelect) == 'Player') {
            scorePlayer++;
        }
        else if(getResult(playerSelect, computerSelect) == 'Computer') {
            scoreComputer++;
        }
    }

    if(scorePlayer > scoreComputer) {
        console.log('Game over, You won!');
    }
    else if(scorePlayer < scoreComputer) {
        console.log('Game over, You lost.');
    } 
    else {
        console.log('Game over, It was a tie!');
    }
}

game();