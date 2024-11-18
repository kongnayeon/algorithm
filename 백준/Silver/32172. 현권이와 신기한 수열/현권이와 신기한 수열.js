const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

let set = new Set([0]);

let prev = 0;
let next = 0;

for (let i = 1; i <= N; i++) {
  next = prev - i > 0 && !set.has(prev - i) ? prev - i : prev + i;
  set.add(next);
  prev = next;
}

console.log(next);
