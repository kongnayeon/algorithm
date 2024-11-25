const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logs = input.slice(1).map((el) => el.split(''));

// 커서 기준으로 front, back 배열 관리

logs.forEach((log) => {
  let front = [];
  let back = [];

  log.forEach((key) => {
    if (key === '<') {
      if (front.length > 0) back.push(front.pop());
    } else if (key === '>') {
      if (back.length > 0) front.push(back.pop());
    } else if (key === '-') {
      if (front.length > 0) front.pop();
    } else {
      front.push(key);
    }
  });

  console.log(front.join('') + back.reverse().join(''));
});
