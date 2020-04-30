const squareCode = function(message) {
  let newString = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      newString += "";
    } else {
      newString += message[i];
    }
  }
  let increment = Math.ceil(Math.sqrt(newString.length));
  let finalString = "";
  for (let i = 0; i < increment; i++) {
    for (let j = i; j < newString.length; j += increment) {
      finalString += newString[j];
    }
    finalString += " ";
  }
  return finalString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));