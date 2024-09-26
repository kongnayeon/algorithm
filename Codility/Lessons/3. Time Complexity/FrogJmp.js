// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  // Implement your solution here
  let distance = Y - X;

  if (distance === 0) return 0;
  else if (distance <= D) return 1;
  else return Math.ceil(distance / D);
}
