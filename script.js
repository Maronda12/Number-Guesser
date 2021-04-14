let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Secret Target Number Function
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
};
// Compare Guesses Function
const compareGuesses = (targetGuess, humanGuess, computerGuess) => {
 const humanDifference = Math.abs(targetGuess - humanGuess)
 const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else (winner === 'computer') ;{
        computerScore++;
    }
}
const advanceRound = () => currentRoundNumber++;
