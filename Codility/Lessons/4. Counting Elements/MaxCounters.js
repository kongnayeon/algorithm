// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // Implement your solution here
  let counter = new Array(N).fill(0);
  let max = 0;
  let currentMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      counter[A[i] - 1] = Math.max(counter[A[i] - 1], max) + 1;
      currentMax = Math.max(currentMax, counter[A[i] - 1]);
    } else if (A[i] === N + 1) {
      max = currentMax;
    }
  }

  for (let i = 0; i < N; i++) {
    counter[i] = Math.max(counter[i], max);
  }

  return counter;
}
