const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const towers = input[1].split(' ').map(Number);

// 뒤에서 쐈을 때 신호를 받을 수 있는 탑들을 모아 두는 스택

const stack = [];
const result = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  // 1. stack에 원소가 존재하고, towers[i]의 높이보다 stack의 top이 큰 것만 남기기
  while (stack.length > 0 && towers[stack[stack.length - 1]] < towers[i]) {
    stack.pop();
  }

  // 2. pop을 처리한 후에 stack의 원소가 존재한다면 top이 수신하는 탑
  if (stack.length > 0) {
    result[i] = stack[stack.length - 1] + 1;
  }

  // 3. 현재 탑 stack에 push
  stack.push(i);
}

console.log(result.join(' '));
