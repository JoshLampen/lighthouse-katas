let prompt = require("prompt-sync")();

let answer = Number(prompt("Guess a number between 1 and 100: "));
let number = Math.ceil(Math.random() * 100);
let guesses = [];

let j = "a"; // Ensures continued loop
for (let i = 0; i !== j; i++) {
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
    answer = Number(prompt("Guess a number between 1 and 100: "));
  } else if (guesses.includes(answer)) {
    console.log("Already guessed! Try again!");
    answer = Number(prompt("Guess a number between 1 and 100: "));
  } else if (answer > number) {
    guesses.push(answer);
    console.log("Too High!");
    answer = Number(prompt("Guess a number between 1 and 100: "));
  } else if (answer < number) {
    guesses.push(answer);
    console.log("Too Low!");
    answer = Number(prompt("Guess a number between 1 and 100: "));
  } else if (answer === number) {
    guesses.push(answer);
    console.log(`You got it! You took ${guesses.length} attempts!`);
    break;
  }
}