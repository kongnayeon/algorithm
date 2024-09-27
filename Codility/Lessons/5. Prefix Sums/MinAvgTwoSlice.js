function solution(A) {
  const N = A.length;
  let minAvg = (A[0] + A[1]) / 2;
  let start = 0;

  for (let i = 0; i < N - 2; i++) {
    let avg2 = (A[i] + A[i + 1]) / 2;
    if (avg2 < minAvg) {
      minAvg = avg2;
      start = i;
    }

    let avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (avg3 < minAvg) {
      minAvg = avg3;
      start = i;
    }
  }

  let avg2 = (A[N - 2] + A[N - 1]) / 2;
  if (avg2 < minAvg) {
    minAvg = avg2;
    start = N - 2;
  }

  return start;
}
