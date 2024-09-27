// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // Implement your solution here
  let start = Math.ceil(A / K) * K;
  let end = Math.floor(B / K) * K;

  if (start > B) return 0;

  return Math.floor((end - start) / K) + 1;
}
