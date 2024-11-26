const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const stack = [];
const result = [];

const sequence = input.splice(1);
const arr = Array.from({ length: input[0] }, (_, i) => i + 1);
let index = 0;

for (let i = 0; i < input[0]; i++) {
  if (stack.length === 0 || sequence[i] > stack[stack.length - 1]) {
    while (sequence[i] !== index) {
      stack.push(arr[index]);
      result.push('+');
      index++;
    }
    stack.pop();
    result.push('-');
  } else if (sequence[i] === stack[stack.length - 1]) {
    stack.pop();
    result.push('-');
  } else {
    console.log('NO');
    return;
  }
}

console.log(result.join('\n'));

// arr = [1, 2, 3, ... , N]

// arr을 돌면서 input에 있는 숫자를 하나씩 읽기
// 숫자 마주칠 때마다 push, pop 처리해 주기
// 1. 아직 push 안 된 숫자면 push pop
// 2. 이미 push 된 숫자인데 pop 할 수 이으면 pop만
// 3. 할 수 없으면 NO 출력
