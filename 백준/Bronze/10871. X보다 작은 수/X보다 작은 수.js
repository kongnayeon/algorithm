const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [line1, line2] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, X] = line1.trim().split(' ').map(Number);
const numbers = line2.trim().split(' ').map(Number);

const result = [];
numbers.forEach((el) => {
  if (el < Number(X)) {
    result.push(el);
  }
});

console.log(result.join(' '));
