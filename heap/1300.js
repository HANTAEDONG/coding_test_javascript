const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.map(Number);
// const array = [];
// for (let i = 1; i <= N; i++) {
//   for (let j = 1; j <= N; j++) {
//     array.push(i * j);
//   }
// }
// array.sort((a, b) => a - b);
// console.log(array[K]);

function countLE(x) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    cnt += Math.min(Math.floor(x / i), N);
  }
  return cnt;
}

console.log(countLE(K));
