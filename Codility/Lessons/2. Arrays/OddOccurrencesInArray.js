// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function findUnpairNum(A) {
  let result = 0;

  for (let num of A) {
    result ^= num;
  }

  return result;
}

function solution(A) {
  if (A.length === 1) return A[0];
  else {
    return findUnpairNum(A);
  }
}
