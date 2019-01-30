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

//const playerOne = 'scissors';
//const playerTwo = 'paper';

const humanSelection = 'rock';
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
console.log('Human selection ', humanSelection);
console.log('Computer selection ', computerSelection);
console.log(playGame(humanSelection, computerSelection));