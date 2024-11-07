const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const ABC = (A * B * C).toString().split('').map(Number);

const arr = new Array(10).fill(0);

ABC.forEach((el) => arr[el]++);

arr.forEach((arr) => console.log(arr));
