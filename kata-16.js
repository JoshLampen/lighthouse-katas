let whiteQueen = [0, 0];
let blackQueen = [5, 7];

let generatedBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i <= 7; i++) {
    let row = [];
    for (let j = 0; j <= 7; j++) {
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }
  return board;
};

let queenThreat = function() {
  let threat = false;
  // Row check
  if (whiteQueen[0] === blackQueen[0]) {
    threat = true;
  }
  // Column check
  if (whiteQueen[1] === blackQueen[1]) {
    threat = true;
  }
  // Set function to create array of northeast threat positions
  let findNortheast = function(position) {
    let rowArray = [];
    let columnArray = [];
    let positionArray = [];
    for (let i = position[0]; i >= 0; i--) {
      rowArray.push(i);
    }
    for (let j = position[1]; j <= 7; j++) {
      columnArray.push(j);
    }
    for (let z = 0; z < rowArray.length; z++) {
      positionArray.push([rowArray[z], columnArray[z]]);
    }
    return positionArray;
  };
  // Set function to create array of southeast threat positions
  let findSoutheast = function(position) {
    let rowArray = [];
    let columnArray = [];
    let positionArray = [];
    for (let i = position[0]; i <= 7; i++) {
      rowArray.push(i);
    }
    for (let j = position[1]; j <= 7; j++) {
      columnArray.push(j);
    }
    for (let z = 0; z < rowArray.length; z++) {
      positionArray.push([rowArray[z], columnArray[z]]);
    }
    return positionArray;
  };
  // Set function to create array of southwest threat positions
  let findSouthwest = function(position) {
    let rowArray = [];
    let columnArray = [];
    let positionArray = [];
    for (let i = position[0]; i <= 7; i++) {
      rowArray.push(i);
    }
    for (let j = position[1]; j >= 0; j--) {
      columnArray.push(j);
    }
    for (let z = 0; z < rowArray.length; z++) {
      positionArray.push([rowArray[z], columnArray[z]]);
    }
    return positionArray;
  };
  // Set function to create array of northwest threat positions
  let findNorthwest = function(position) {
    let rowArray = [];
    let columnArray = [];
    let positionArray = [];
    for (let i = position[0]; i >= 0; i--) {
      rowArray.push(i);
    }
    for (let j = position[1]; j >= 0; j--) {
      columnArray.push(j);
    }
    for (let z = 0; z < rowArray.length; z++) {
      positionArray.push([rowArray[z], columnArray[z]]);
    }
    return positionArray;
  };
  // Set function to create final array of positions
  let threatPositions = function(position) {
    let combinedArray = [];
    for (const array of findNortheast(position)) {
      if (array[0] !== position[0] && array[1] !== position[1] && array[0] && array[1]) {
        combinedArray.push(array);
      }
    }
    for (const array of findSoutheast(position)) {
      if (array[0] !== position[0] && array[1] !== position[1] && array[0] && array[1]) {
        combinedArray.push(array);
      }
    }
    for (const array of findSouthwest(position)) {
      if (array[0] !== position[0] && array[1] !== position[1] && array[0] && array[1]) {
        combinedArray.push(array);
      }
    }
    for (const array of findNorthwest(position)) {
      if (array[0] !== position[0] && array[1] !== position[1] && array[0] && array[1]) {
        combinedArray.push(array);
      }
    }
    return combinedArray;
  };
  // Check if other queen is in a threat position
  for (const array of threatPositions(whiteQueen)) {
    if (array[0] === blackQueen[0] && array[1] === blackQueen[1]) {
      threat = true;
    }
  }
  return threat;
};

console.log(generatedBoard(whiteQueen, blackQueen));
console.log(queenThreat(generatedBoard(whiteQueen, blackQueen)));