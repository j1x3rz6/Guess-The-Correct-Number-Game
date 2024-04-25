//Random number generated between 1 - 100
const ranNumber = Math.floor(Math.random() * 100) + 1; //Random number generated
let guesses = 0; //This is variable that stores the number that has been guessed

document.getElementById('guessButton').addEventListener('click', checkGuess); //Specifies click event occurs and calls the check function

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value); //Getting user guess
  guesses++; //Incrementing the guess count
  const mesElement = document.getElementById('message'); //Getting message element

  if (guess === ranNumber) { //checking guess is correct
    mesElement.textContent = 'Congratulations! You guessed the correct number.'; //Display success message
    mesElement.style.color = 'green'; //change message to green
    document.getElementById('guessInput').setAttribute('disabled', 'true'); //Display input field
    document.getElementById('guessButton').setAttribute('disabled', 'true'); // Display guess button
  } else if (guess < ranNumber) { //Checking if this guess is too low
    mesElement.textContent = 'Too low! Please try a higher number.'; //Display message for low guess
    mesElement.style.color = 'blue'; //Change message colour blue
  } else { // If guess too high
    mesElement.textContent = 'Too high! Please try a lower number.'; //Message for high guess
    mesElement.style.color = 'red'; //Change message colour red
  }
}
