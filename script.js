// UI
const allChoices = Array.from(document.querySelectorAll('.image'));
const topMessage = document.querySelector('.message');
const screenScorePlayer = document.querySelector('.score-player');
const screenScoreComputer = document.querySelector('.score-comp');
const pickHistoryPlayer = document.querySelector('.player-select');
const pickHistoryComputer = document.querySelector('.comp-select');
const rockChoice = document.querySelector('.image-rock');
const paperChoice = document.querySelector('.image-paper');
const scissorsChoice = document.querySelector('.image-scissors');


function getComputerChoice() {
    let items = ['Rock', 'Paper', 'Scissors'];
    const choice = items[Math.floor(Math.random()*items.length)];
    pickHistoryComputer.textContent = choice;
}


// player choice
let playerChoseRock = rockChoice;
let playerChosePaper = paperChoice;
let playerChoseScissors = scissorsChoice;

allChoices.forEach(image => {
    image.addEventListener('click', (ev) => {
         if(ev.target.matches('.image-rock')) {
            playerChoseRock = 'Rock';
            getComputerChoice();
            chooseRock();
        }
        else if(ev.target.matches('.image-paper')) {
            playerChosePaper = 'Paper';
            getComputerChoice();
            choosePaper();
        }
        else if(ev.target.matches('.image-scissors')) {
            playerChoseScissors = 'Scissors';
            getComputerChoice();
            chooseScissors();
        }
    })
})

function chooseRock() {
    if(playerChoseRock == 'Rock') {
        pickHistoryPlayer.textContent = playerChoseRock;
    }
}

function choosePaper() {
    if(playerChosePaper == 'Paper') {
        pickHistoryPlayer.textContent = playerChosePaper;
    }
}

function chooseScissors() {
    if(playerChoseScissors == 'Scissors') {
        pickHistoryPlayer.textContent = playerChoseScissors;
    }
}


rockChoice.addEventListener('click', () => {
    checkWinner();
    gameOver();
})

paperChoice.addEventListener('click', () => {
    checkWinner();
    gameOver();
})

scissorsChoice.addEventListener('click', () => {
    checkWinner();
    gameOver();
})

const wait = ms => new Promise(res => setTimeout(res, ms));       //delay function

const waitOneSecond = async () => {
    await wait(1000);
    window.location.reload();
}

// round
let playerScore = 0;
let computerScore = 0;
screenScorePlayer.textContent = playerScore;
screenScoreComputer.textContent = computerScore;

const user = ['Game Over, Player Wins!', 'Game Over, Computer Wins.'];

console.log(arrayToSentence('Game Over!', 'Player', 'Wins!'))

function gameOver() {                                                              
    if(playerScore == 4) {
        topMessage.textContent = user[0];
        topMessage.style.color = '#3f3f3f';
        screenScorePlayer.textContent = playerScore + 1;
        waitOneSecond();
    }
    else if(computerScore == 4) {
        topMessage.textContent = user[1];
        topMessage.style.color = '#3f3f3f';
        screenScoreComputer.textContent = computerScore + 1; 

        waitOneSecond();
    }
    else if(topMessage.textContent == 'You win!') {
        if(playerChoseRock == 'Rock') {
            screenScorePlayer.textContent = ++playerScore;
        }
        else if(playerChosePaper == 'Paper') {
            screenScorePlayer.textContent = ++playerScore;
        }
        else if(playerChoseScissors == 'Scissors') {
            screenScorePlayer.textContent = ++playerScore;
        }
    }
    else if(topMessage.textContent == 'You lost.') {
        if(pickHistoryComputer.textContent == 'Rock') {
            screenScoreComputer.textContent = ++computerScore;
        }
        else if(pickHistoryComputer.textContent == 'Paper') {
            screenScoreComputer.textContent = ++computerScore;
        }
        else if(pickHistoryComputer.textContent == 'Scissors') {
            screenScoreComputer.textContent = ++computerScore;
        }
    }
}


function checkWinner() {
    if(playerChoseRock === 'Rock') {
        if(pickHistoryComputer.textContent === 'Rock') {
            topMessage.textContent = 'Draw!'
            topMessage.style.color = '#3f3f3f';
        }
        else if(pickHistoryComputer.textContent === 'Paper') {
            topMessage.textContent = 'You lost.'
            topMessage.style.color = 'darkred';
        }
        else if(pickHistoryComputer.textContent === 'Scissors'){
            topMessage.textContent = 'You win!'
            topMessage.style.color = 'green';
        }
    }
    else if(playerChosePaper === 'Paper') {
        if(pickHistoryComputer.textContent === 'Paper') {
            topMessage.textContent = 'Draw!'
            topMessage.style.color = '#3f3f3f';

        }
        else if(pickHistoryComputer.textContent === 'Rock') {
            topMessage.textContent = 'You win!'
            topMessage.style.color = 'green';

        }
        else if(pickHistoryComputer.textContent === 'Scissors'){
            topMessage.textContent = 'You lost.'
            topMessage.style.color = 'darkred';

        }
    }
    else if(playerChoseScissors === 'Scissors') {
        if(pickHistoryComputer.textContent === 'Scissors') {
            topMessage.textContent = 'Draw!' 
            topMessage.style.color = '#3f3f3f';

        }
        else if(pickHistoryComputer.textContent === 'Rock') {
            topMessage.textContent = 'You lost.'
            topMessage.style.color = 'darkred';

        }
        else if(pickHistoryComputer.textContent === 'Paper'){
            topMessage.textContent = 'You win!'
            topMessage.style.color = 'green';

        }
    }
}
