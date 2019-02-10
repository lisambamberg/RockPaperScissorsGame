const computerPlay = () => {
    const computerInput = Math.floor(Math.random() * Math.floor(3));
    if (computerInput === 0){
        return 'rock';
    }
    if (computerInput === 1){
        return 'paper';
    }
    if (computerInput === 2){
        return 'scissors';
    }
}

const humanSelection = prompt("Rock paper or scissors?"); 
console.log(humanSelection.toLowerCase());

const lowerHumanSelection = humanSelection.toLowerCase();
const computerSelection = computerPlay();

const playGame = (human, computer) => {
    if (human === 'rock' && computer === 'scissors' || 
    human === 'scissors' && computer === 'paper' ||
    human === 'paper' && computer === 'rock'){
        return 'You win!';
    }
    if (human === 'rock' && computer === 'paper' ||
    human === 'scissors' && computer === 'rock' ||
    human === 'paper' && computer === 'scissors'){
        return 'Computer wins!';
    }

    if (human === computer){
        return 'It\'s a draw';
    }
}
console.log('the type of human selection is ', typeof humanSelection);
console.log('Human selection ', lowerHumanSelection);
console.log('the type of computer selection is ', typeof computerSelection);
console.log('Computer selection ', computerSelection);
console.log(playGame(lowerHumanSelection, computerSelection));