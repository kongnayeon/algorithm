function solution(A) {
  const len = A.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
    hash[A[i]] = A[i];
  }
  for (let i = 1; i < 1000002; i++) {
    if (!hash[i]) return i;
  }
  return 1;
}
