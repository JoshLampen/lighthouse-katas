const repeatNumbers = function(data) {
  let newString = '';
  data.forEach(element => {
    if (data.indexOf(element) === data.length - 1) {
      for (let i = 0; i < element[1]; i++) {
        newString += element[0];
      }
    } else {
      for (let i = 0; i < element[1]; i++) {
        newString += element[0];
      }
      newString += ', ';
    }
  });
  return newString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));