const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

let count = 1;

while (queue.length) {
  let shifted = queue.shift();
  if (count % K === 0) {
    result.push(shifted);
  } else {
    queue.push(shifted);
  }
  count++;
}

console.log(`<${result.join(', ')}>`);
