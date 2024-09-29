// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let sum1 = 0;
  let sum2 = A.reduce((sum, num) => sum + num, 0);
  let diff = 100000;

  for (let i = 0; i < A.length - 1; i++) {
    sum1 += A[i];
    sum2 -= A[i];

    if (Math.abs(sum1 - sum2) < diff) diff = Math.abs(sum1 - sum2);
  }

  return diff;
}
