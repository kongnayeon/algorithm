const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ');

console.log(Number(A) + Number(B));
