const calculateChange = function(total, cash) {
  let change = {};
  let amount = cash - total;
  if (amount >= 2000) {
    change.twentyDollar = 0;
    while (amount >= 2000) {
      change.twentyDollar++;
      amount -= 2000;
    }
  }
  if (amount >= 1000) {
    change.tenDollar = 0;
    while (amount >= 1000) {
      change.tenDollar++;
      amount -= 1000;
    }
  }
  if (amount >= 500) {
    change.fiveDollar = 0;
    while (amount >= 500) {
      change.fiveDollar++;
      amount -= 500;
    }
  }
  if (amount >= 200) {
    change.twoDollar = 0;
    while (amount >= 200) {
      change.twoDollar++;
      amount -= 200;
    }
  }
  if (amount >= 100) {
    change.oneDollar = 0;
    while (amount >= 100) {
      change.oneDollar++;
      amount -= 100;
    }
  }
  if (amount >= 25) {
    change.quarter = 0;
    while (amount >= 25) {
      change.quarter++;
      amount -= 25;
    }
  }
  if (amount >= 10) {
    change.dime = 0;
    while (amount >= 10) {
      change.dime++;
      amount -= 10;
    }
  }
  if (amount >= 5) {
    change.nickel = 0;
    while (amount >= 5) {
      change.nickel++;
      amount -= 5;
    }
  }
  if (amount >= 1) {
    change.penny = 0;
    while (amount >= 1) {
      change.penny++;
      amount--;
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));