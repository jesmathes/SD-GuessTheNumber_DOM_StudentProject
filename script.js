let randomNumber = Math.floor(Math.random() * 100) + 1;

function randomNumber(userGuess, numberToGuess) {
  // console.log("Random Number", computersNumber);

  if (userGuess < 1 || userGuess > 100) {
    return "Try again with a number between 1 and 100";
  }
  if (userGuess < numberToGuess) {
    return "Higher";
  } else if (userGuess > numberToGuess) {
    return "Lower";
  } else {
    return "That's it! The number was " + numberToGuess + "!!!";
  }
}

function startCompGuess(num) {
  return "Is it " + num + "?";
}

function compGuess(reply) {
  if (reply === "lower") {
    return "Lower";
  } else if (reply === "correct") {
    return "Correct";
  } else if (reply === "higher") {
    return "Higher";
  }
}
