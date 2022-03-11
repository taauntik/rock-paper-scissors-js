const
    computerChoiceDisplay = document.getElementById('computer-choice');
    userChoiceDisplay = document.getElementById('user-choice');
    resultDisplay = document.getElementById('result');
    container = document.getElementById('choice-container');
    btns = document.querySelectorAll('.btn');

let userChoice, computerChoice, result;

btns.forEach(btn => btn.addEventListener('click', ({ target }) => {
    userChoice = target.id;
    userChoiceDisplay.src = `images/${userChoice}.png`;
    generateComputerChoice();
    decideWinner();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        
        case 2:
            computerChoice = 'paper';
            break;

        case 3:
            computerChoice = 'scissors';
            break;

        default:
            return;
    }

    computerChoiceDisplay.src = `images/${computerChoice}.png`;
}

// rock && paper => paper win
// rock && scissors => rock win
// paper && scissors => scissors win

function decideWinner() {
    if (userChoice === computerChoice) {
        result = 'Draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors')
        || (userChoice === 'paper' && computerChoice === 'rock')
        || (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You won! yahu';
    } else {
        result = 'You lose :('
    }
    setTimeout(() => {
        if (!alert(result)) location.reload();
    }, 1000);
}
