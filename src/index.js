const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorBtn = document.querySelector('#scissor-btn');

let computerScore = document.querySelector('#computer-score');
computerScore.textContent+= 0;

let playerScore = document.querySelector('#player-score');
playerScore.textContent += 0;

let draws = document.querySelector('#draws');
draws.textContent += 0;

let playerChoise = document.querySelector('#player-choise');
let computerChoise = document.querySelector('#computer-choise');

let result = document.querySelector('.win-lose');

const moves = ['r','p','s'];

const red = '#ff5959';
const green = '#49beb7';
const grey = '#5c5757';

let playerWinsCount = 0;
let computerWinsCount = 0;
let numOfDraws = 0;

let computerMove = function () {
    let random = Math.floor(Math.random()*moves.length);
    if (random === 0) {
        return 'r';
    }
    else if ( random === 1) {
        return 'p';
    }

    else {
        return 's';
    }
}


rockBtn.addEventListener('click', e => {
    computerMove();
    if (computerMove() === 'r') {
        computerChoise.textContent = 'Computer chose: Rock';
        console.log('Draw');

        result.textContent = "it's A Draw";
        result.style.backgroundColor = grey;

        numOfDraws += 1;
        draws.textContent = 'Draws: '+numOfDraws
    }
    
    else if (computerMove() === 's') {
        computerChoise.textContent = 'Computer chose: Scissors';
        console.log('Win');

        result.textContent = "You Won";
        result.style.backgroundColor = green;

        playerWinsCount += 1;
        playerScore.textContent = 'player: '+playerWinsCount;
    }
    
    else if (computerMove() === 'p') {
        computerChoise.textContent = 'Computer chose: Paper';
        console.log('Lose');

        result.textContent = "You Lost";
        result.style.backgroundColor = red;

        computerWinsCount += 1;
        computerScore.textContent = 'Computer: '+computerWinsCount;
    }
    
    playerChoise.textContent = 'You choose: Rock'; 

    e.stopPropagation;
});


paperBtn.addEventListener('click', function () {
    computerMove();
    if (computerMove() === 'r') {
        computerChoise.textContent = 'Computer chose: Rock';
        console.log('Won');

        result.textContent = "You Won";
        result.style.backgroundColor = green;

        playerWinsCount += 1;
        playerScore.textContent = 'player: '+playerWinsCount;
    }
    
    else if (computerMove() === 's') {
        computerChoise.textContent = 'Computer chose: Scissors';
        console.log('Lost');

        result.textContent = "You Lost";
        result.style.backgroundColor = red;

        computerWinsCount += 1;
        computerScore.textContent = 'Computer: '+computerWinsCount;
    }
    
    else if (computerMove() === 'p') {
        computerChoise.textContent = 'Computer chose: Paper';
        console.log('Draw');

        result.textContent = "it's A Draw";
        result.style.backgroundColor = grey;

        numOfDraws += 1;
        draws.textContent = 'Draws: '+numOfDraws
    }
    
    playerChoise.textContent = 'You choose: Paper'; 
});

scissorBtn.addEventListener('click', function () {
    computerMove();
    if (computerMove() === 'r') {
        computerChoise.textContent = 'Computer chose: Rock';
        console.log('Won');

        result.textContent = "You Lost";
        result.style.backgroundColor = red;

        computerWinsCount += 1;
        computerScore.textContent = 'Computer: '+computerWinsCount;
    }
    
    else if (computerMove() === 's') {
        computerChoise.textContent = 'Computer chose: Scissors';
        console.log('Draw');

        result.textContent = "it's A Draw";
        result.style.backgroundColor = grey;

        numOfDraws += 1;
        draws.textContent = 'Draws: '+numOfDraws
    }
    
    else if (computerMove() === 'p') {
        computerChoise.textContent = 'Computer chose: Paper';
        console.log('Won');

        result.textContent = "You won";
        result.style.backgroundColor = green;

        playerWinsCount += 1;
        playerScore.textContent = 'player: '+playerWinsCount;
    }
    
    playerChoise.textContent = 'You choose: Scissor'; 
});