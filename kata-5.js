const urlEncode = function(text) {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    // Remove whitespace at beginning of string:
    if (text[i] === " " && !text[i - 1]) {
      newString += "";
    // Remove whitespace at end of string:
    } else if (text[i] === " " && i + 1 === text.length) {
      newString += "";
    // Replace whitespace inside string:
    } else if (text[i] === " " && text[i - 1] && text[i + 1]) {
      newString += "%20";
    // If not whitespace:
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
