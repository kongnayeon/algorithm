// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here

  let n = A.length;
  let expectedSum = ((n + 1) * (n + 2)) / 2;
  let actualSum = A.reduce((sum, num) => sum + num, 0);

  if (A.length > 1) return expectedSum - actualSum;

  return n + 1;
}
