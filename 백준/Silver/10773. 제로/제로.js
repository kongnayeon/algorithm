const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let sum = 0;
const stack = [];

input.splice(1).forEach((num, index) => {
  if (num === 0) {
    sum -= stack.pop();
  } else {
    sum += num;
    stack.push(num);
  }
});

console.log(sum);
