const blocksAway = function(directions) {
  // Set variables to keep track of units moved in each direction
  let finalCoordinates = {
    east: 0,
    north: 0
  };
  // Go through the array pairs
  if (directions[0] === "right") {
    finalCoordinates.east += directions[1];
    if (directions[2] === "left") {
      finalCoordinates.north += directions[3];
      if (directions[4] === "left") {
        finalCoordinates.east -= directions[5];
      }
    }
  }
  if (directions[0] === "left") {
    finalCoordinates.north += directions[1];
    if (directions[2] === "right") {
      finalCoordinates.east += directions[3];
      if (directions[4] === "left") {
        finalCoordinates.north += directions[5];
        if (directions[6] === "right") {
          finalCoordinates.east += directions[7];
          if (directions[8] === "left") {
            finalCoordinates.north += directions[9];
            if (directions[10] === "right") {
              finalCoordinates.east += directions[11];
            }
          }
        }
      } else if (directions[4] === "right") {
        finalCoordinates.north -= directions[5];
        if (directions[6] === "right") {
          finalCoordinates.east -= directions[7];
        }
      }
    }
  }
  return finalCoordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));