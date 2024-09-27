// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // Implement your solution here
  const positions = new Set();

  for (let time = 0; time <= A.length; time++) {
    const position = A[time];

    if (position <= X) positions.add(position);

    if (positions.size === X) {
      return time;
    }
  }

  return -1;
}
