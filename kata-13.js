const makeCase = function(input, cases) {
  let inputList = [];
  let firstInput = "";
  if (typeof cases === "string") {
    inputList.push(cases);
  } else {
    inputList = cases;
  }
  // First layer of precedence
  for (let i = 0; i < inputList.length; i++) {
    switch (inputList[i]) {
    case "camel":
      for (let c = 0; c < input.length; c++) {
        if (input[c] && input[c - 1] === " ") {
          firstInput += input[c].toUpperCase();
        } else if (input[c] === " ") {
          firstInput += "";
        } else {
          firstInput += input[c];
        }
      }
      break;
    case "pascal":
      firstInput += input[0].toUpperCase();
      for (let p = 1; p < input.length; p++) {
        if (input[p] && input[p - 1] === " ") {
          firstInput += input[p].toUpperCase();
        } else if (input[p] === " ") {
          firstInput += "";
        } else {
          firstInput += input[p];
        }
      }
      break;
    case "snake":
      for (let s = 0; s < input.length; s++) {
        if (input[s] === " ") {
          firstInput += "_";
        } else {
          firstInput += input[s];
        }
      }
      break;
    case "kebab":
      for (let k = 0; k < input.length; k++) {
        if (input[k] === " ") {
          firstInput += "-";
        } else {
          firstInput += input[k];
        }
      }
      break;
    case "title":
      firstInput += input[0].toUpperCase();
      for (let t = 1; t < input.length; t++) {
        if (input[t] && input[t - 1] === " ") {
          firstInput += input[t].toUpperCase();
        } else {
          firstInput += input[t];
        }
      }
      break;
    }
  }
  if (!firstInput) {
    for (let i = 0; i < input.length; i++) {
      firstInput += input[i];
    }
  }
  // Second layer of precedence
  let secondInput = "";
  for (let i = 0; i < inputList.length; i++) {
    switch (inputList[i]) {
    case "vowel":
      for (let v = 0; v < firstInput.length; v++) {
        if (firstInput[v] === "a" || firstInput[v] === "e" || firstInput[v] === "i" || firstInput[v] === "o" || firstInput[v] === "u") {
          secondInput += firstInput[v].toUpperCase();
        } else {
          secondInput += firstInput[v];
        }
      }
      break;
    case "consonant":
      for (let c = 0; c < firstInput.length; c++) {
        if (!(firstInput[c] === "a" || firstInput[c] === "e" || firstInput[c] === "i" || firstInput[c] === "o" || firstInput[c] === "u")) {
          secondInput += firstInput[c].toUpperCase();
        } else {
          secondInput += firstInput[c];
        }
      }
      break;
    }
  }
  if (!secondInput) {
    for (let i = 0; i < firstInput.length; i++) {
      secondInput += firstInput[i];
    }
  }
  // Third layer of precedence
  let finalInput = "";
  for (let i = 0; i < inputList.length; i++) {
    switch (inputList[i]) {
    case "upper":
      for (let u = 0; u < secondInput.length; u++) {
        finalInput += secondInput[u].toUpperCase();
      }
      break;
    case "lower":
      for (let l = 0; l < secondInput.length; l++) {
        finalInput += secondInput[l].toLowerCase();
      }
      break;
    }
  }
  if (!finalInput) {
    for (let i = 0; i < secondInput.length; i++) {
      finalInput += secondInput[i];
    }
  }
  return finalInput;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));