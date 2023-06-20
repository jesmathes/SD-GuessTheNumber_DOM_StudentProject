
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
};


  // #U2_02 ⬇︎
  
  // main.js ⬇︎ ~ line 34 - on   ⬅︎
  
    // let currentNumber = 1;
  
  function startCompGuess() {
    return `Is your number ${currentNumber}?`
  };
  // console.log(startCompGuess());

  
  // #U2_02 ⬆︎
  

  // #U2_03 ⬇︎
 let currentNumber = 1;
  let createGuess = () => {
    currentNumber = Math.floor(Math.random() * 101);
    return `Is your number ${currentNumber}?`;
  };
  console.log(createGuess());
  