const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [[N], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let answer = arr[0];
let sum = arr[0];

for (let i = 1; i < N; i++) {
  if (arr[i] - sum > answer) {
    answer = arr[i] - sum;
  }
  sum += arr[i];
}

console.log(answer);
