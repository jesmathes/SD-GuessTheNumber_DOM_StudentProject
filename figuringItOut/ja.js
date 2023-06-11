function getRandom() {
  const randomNumber = getRandom();
}
console.log(getRandom());

// Math.random();
// Math.floor(Math.random() * 10);
console.log("Equal to: ", "3" == 3);
console.log("Equal to: ", "3" == 3);
// Strict Equal To
console.log("Strictly Equal to: ", "3" === 3);
// Not Equal To
console.log("Not Equal to: ", "3" != 3);
console.log("Strict Not Equal to: ", "3" !== 3); // strict
console.log("Strict Not Equal to 2: ", 3 !== 3); // strict

let aName = "bob";
console.log("Check Name", aName == "Bob");

function getRandom() {
  return Math.random();
}

// const randomNumber = getRandom();
// console.log(randomNumber);

const randomNumber = getRandomIntInclusive(1, 50);
console.log(randomNumber);
