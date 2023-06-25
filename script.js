/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
let guesses = 0;
function randomNumber(userGuess, computersNumber) {
    // YOUR CODE BELOW
    guesses++;
  if (userGuess < 1 || userGuess > 100) {
  return "Please input a number between 1 and 100";

} else if (userGuess < computersNumber) {
  return "Higher";

} else if (userGuess > computersNumber) {
  return "Lower";

} else if (userGuess === numberToGuess); {
  return `The number was ${userGuess}, with ${guesses} guesses!`;
}

  // YOUR CODE ABOVE
};

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess() {
      // This should return a string that denotes the first guessed number

    // YOUR CODE ...
  return `Is your number ${currentNumber}?`
  };
  // console.log(startCompGuess());

  
 


let currentNumber = 1;
  let createGuess = () => {
    currentNumber = Math.floor(Math.random() * 101);
    return `Is your number ${currentNumber}?`;
  };
  console.log(createGuess());



function compGuess(reply) {
      /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.

    This should return a string indicating the computers response.
    */

  switch (reply) {
    case "lower":
      return `Your number is lower? Is it ${currentNumber}?`;
    case "higher":
      return `Your number is higher? Is it ${currentNumber}?`;
    case "correct":
      return `I knew it was ${currentNumber}!`;
    default:
      return ``;
  };
  }




