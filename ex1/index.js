const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
const result = input
  .map(x => parseInt(x))
  .reduce((a, b) => {
    return a + (Math.floor(b / 3) - 2);
  }, 0);
console.log(result);
