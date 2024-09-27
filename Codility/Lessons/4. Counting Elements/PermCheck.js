// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here

  let arr = A.sort((a, b) => a - b);

  let start = arr[0];

  if (start !== 1) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== start) return 0;
    start++;
  }

  return 1;
}
