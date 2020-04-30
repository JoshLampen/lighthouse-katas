const whereCanIPark = function(spots, vehicle) {
  let coordinates = false;
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      if (vehicle === 'regular') {
        if (spots[y][x] === 'R') {
          coordinates = [x, y];
          return coordinates;
        }
      } else if (vehicle === 'small') {
        if (spots[y][x] === 'R' || spots[y][x] === 'S') {
          coordinates = [x, y];
          return coordinates;
        }
      } else if (vehicle === 'motorcycle') {
        if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M') {
          coordinates = [x, y];
          return coordinates;
        }
      }
    }
  }
  return coordinates;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));