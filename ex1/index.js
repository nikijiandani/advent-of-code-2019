const fs = require('fs');

const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

function fuelRequired(mass) {
  return Math.floor(mass / 3) - 2;
}

const result = input
  .map(x => parseInt(x))
  .reduce((a, b) => {
    let currentFuel = fuelRequired(b);
    let totalFuel = 0;
    while (currentFuel > 0) {
      totalFuel += currentFuel;
      currentFuel = fuelRequired(currentFuel);
    }
    return a + totalFuel;
  }, 0);
console.log(result);
