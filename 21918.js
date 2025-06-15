const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const S = input.shift().split(" ").map(Number);
for (let i = 0; i < M; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  if (a == 1) {
    S[b - 1] = c;
  }
  if (a == 2) {
    for (let j = b - 1; j <= c - 1; j++) {
      S[i] = 1 - S[i];
    }
  }
  if (a == 3) {
    for (let j = b - 1; j <= c - 1; j++) {
      S[i] = 0;
    }
  }
  if (a == 4) {
    for (let j = b - 1; j <= c - 1; j++) {
      S[i] = 1;
    }
  }
}

console.log(S.join(" "));
