const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const N = fs.readFileSync(filePath).toString().trim();

const number = N.split('').map(Number);

const arr = new Array(10).fill(0);

number.forEach((el) => {
  if (el === 6 || el === 9) {
    arr[6] <= arr[9] ? arr[6]++ : arr[9]++;
  } else {
    arr[el]++;
  }
});

console.log(Math.max(...arr));
