const prompt = require("prompt-sync")({ sigint: true });

// main function => intro()
intro = () => {
  let nameUser = prompt("What is your name? ");
  console.log(
    "Hey there " +
      nameUser.charAt(0).toUpperCase() +
      nameUser.slice(1) +
      "!\nLet 's play guessing game and try to guess a number in my mind. "
  );
  return guessGame();
};

guessGame = () => {
  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1; // a number

  // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;

  let guess;

  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)

    guess = prompt("Now, I have a number. It is between 1-100, guess it? "); // a string

    guess = Number(guess); // string to number?

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).

    if (guess < 0 || guess > 100) {
      console.log("Between 1-100 only!");
    } else {
      if (guess === numberInMind) {
        foundCorrectNumber = true; // auto end game
        console.log(
          "That's right. The number is " + numberInMind + ". You won!! "
        );
        return setReset();
      } else if (guess < numberInMind) {
        console.log("You guessed is too low. Guess again? ");
      } else if (guess > numberInMind) {
        console.log("You guessed is too high. Guess again? ");
      } else {
        console.log("No letter, number only!");
      }
    }
  }
};

setReset = () => {
  let foundCorrectNumber = false;
  let proceed = prompt("New game or give up? (Y/N): ");

  while (!foundCorrectNumber) {
    if (proceed === "Y" || proceed === "y") {
      return intro();
    } else if (proceed === "N" || proceed === "n") {
      console.log("Bye.");
      break;
    } else {
      console.log("Yes(Y) or No(N)? ");
    }
  }
};

intro();
// Bonus Point: prompt user and provide option for user to start a new game after winning
