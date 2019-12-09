const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(',');
input[1] = 12;
input[2] = 2;

const numArr = input.map(x => parseInt(x));

for (let i = 0; i < numArr.length; i += 4) {
  console.log('Running loop');
  let result = 0;
  if (numArr[i] === 99) {
    break;
  } else if (numArr[i] === 1) {
    numArr[numArr[i + 3]] = numArr[numArr[i + 1]] + numArr[numArr[i + 2]];
  } else if (numArr[i] === 2) {
    numArr[numArr[i + 3]] = numArr[numArr[i + 1]] * numArr[numArr[i + 2]];
  }
}

console.log(numArr[0]);
