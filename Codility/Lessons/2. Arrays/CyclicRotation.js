// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function rotateArr(A, plus) {
  let arr = Array(A.length).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (i + plus < A.length) {
      arr[i + plus] = A[i];
    } else {
      arr[i + plus - A.length] = A[i];
    }
  }

  return arr;
}

function solution(A, K) {
  // Implement your solution here
  let plus = 0;

  if (K > A.length) {
    plus = K % A.length;
    if (plus === 0) return A;
    else return rotateArr(A, plus);
  } else if (K === A.length) return A;
  else {
    plus = K;
    return rotateArr(A, plus);
  }
}
