// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function isPowerOfTwo(n) {
  return !(n & (n - 1));
}

function getMaxGap(str) {
  let arr = str.split('1');
  if (str[str.length - 1] === '0') arr.pop();
  let lengthArr = arr.map((el) => el.length);
  return Math.max(...lengthArr);
}

function solution(N) {
  // Implement your solution here
  if (isPowerOfTwo(N)) return 0;
  else {
    return getMaxGap(N.toString(2));
  }
}
