const urlDecode = function(text) {
  let finalObject = {};
  let firstKey = "";
  let firstKeyEnd;
  let firstValue = "";
  let firstValueEnd;
  // Find first key
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "=") {
      firstKeyEnd = i;
      break;
    } else {
      firstKey += text[i];
    }
  }
  // Find first key value
  for (let j = firstKeyEnd + 1; j < text.length; j++) {
    if (text[j] === "&") {
      firstValueEnd = j;
      break;
    } else if (text[j] === "%") {
      firstValue += " ";
    } else if (text[j] === "2" && text[j - 1] === "%") {
      firstValue += "";
    } else if (text[j] === "0" && text[j - 1] === "2" && text[j - 2] === "%") {
      firstValue += "";
    } else {
      firstValue += text[j];
    }
  }
  finalObject[firstKey] = firstValue;
  if (!firstValueEnd) {
    return finalObject;
  } else {
    // Find second key
    let secondKey = "";
    let secondKeyEnd;
    let secondValue = "";
    for (let w = firstValueEnd + 1; w < text.length; w++) {
      if (text[w] === "=") {
        secondKeyEnd = w;
        break;
      } else {
        secondKey += text[w];
      }
    }
    // Find second key value
    for (let z = secondKeyEnd + 1; z < text.length; z++) {
      if (text[z] === "%") {
        secondValue += " ";
      } else if (text[z] === "2" && text[z - 1] === "%") {
        secondValue += "";
      } else if (text[z] === "0" && text[z - 1] === "2" && text[z - 2] === "%") {
        secondValue += "";
      } else {
        secondValue += text[z];
      }
    }
    finalObject[secondKey] = secondValue;
    return finalObject;
  }
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);