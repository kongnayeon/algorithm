const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const word = fs.readFileSync(filePath).toString().split('');

const result = new Array('z'.charCodeAt() - 'a'.charCodeAt() + 1).fill(0);
word.forEach((el) => result[el.charCodeAt() - 'a'.charCodeAt()]++);

console.log(result.join(' '));
