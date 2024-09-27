// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let east = 0;
  let pass = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      // east
      east++;
    } else {
      pass += east;
    }
  }

  if (pass > 1000000000) return -1;

  return pass;
}
