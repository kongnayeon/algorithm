// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // Implement your solution here

  let sLen = S.length;

  let A = new Array(sLen + 1).fill(0);
  let C = new Array(sLen + 1).fill(0);
  let G = new Array(sLen + 1).fill(0);

  for (let i = 0; i < sLen; i++) {
    A[1 + i] = A[i] + (S[i] === 'A' ? 1 : 0);
    C[1 + i] = C[i] + (S[i] === 'C' ? 1 : 0);
    G[1 + i] = G[i] + (S[i] === 'G' ? 1 : 0);
  }

  const result = [];

  for (let i = 0; i < P.length; i++) {
    const start = P[i];
    const end = Q[i] + 1;

    // A가 존재하는지 확인
    if (A[end] - A[start] > 0) {
      result.push(1);
    }
    // C가 존재하는지 확인
    else if (C[end] - C[start] > 0) {
      result.push(2);
    }
    // G가 존재하는지 확인
    else if (G[end] - G[start] > 0) {
      result.push(3);
    }
    // T는 나머지 경우
    else {
      result.push(4);
    }
  }
  return result;
}
