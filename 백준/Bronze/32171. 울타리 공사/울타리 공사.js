const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((el) => el.split(' ').map(Number));

let A = 10,
  B = 10,
  C = -10,
  D = -10,
  answer = [];

arr.forEach(([a, b, c, d]) => {
  A = Math.min(A, a);
  B = Math.min(B, b);
  C = Math.max(C, c);
  D = Math.max(D, d);

  answer.push((C - A + D - B) * 2);
});

console.log(answer.join('\n'));
