const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [line1, line2, line3] = fs.readFileSync(filePath).toString().split('\n');

const N = Number(line1);
const arr = line2.split(' ').map(Number);
const X = Number(line3);
let result = 0;
const occur = {};

for (let i = 0; i < N; i++) {
  if (X - arr[i] && occur[X - arr[i]]) result++;
  occur[arr[i]] = true;
}

console.log(result);
