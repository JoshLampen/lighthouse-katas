const sumLargestNumbers = function(data) {
  let largest;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === Math.max(...data)) {
      largest = data[i];
      data.splice(i, 1);
    }
  }
  let secondLargest;
  for (let j = 0; j < data.length; j++) {
    if (data[j] === Math.max(...data)) {
      secondLargest = data[j];
    }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));