

//  PART 1  #U2_01

function randomNumber(userGuess, computersNumber) {

  if (userGuess < 1 || userGuess > 100) {
  return "Please input a number between 1 and 100";

} else if (userGuess < computersNumber) {
  return "Higher";

} else if (userGuess > computersNumber) {
  return "Lower";

} else (userGuess === numberToGuess); {
  return `The number was ${userGuess}!`;
}
}

