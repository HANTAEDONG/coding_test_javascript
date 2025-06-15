const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [height, width] = input.shift().split(" ").map(Number);
const map = input.slice(0, height);

const answer = [];

for (let i = 0; i < height; i++) {
  answer[i] = [];
  let seen = -1;
  for (let j = 0; j < width; j++) {
    if (map[i][j] === "c") {
      seen = 0;
      answer[i].push(0);
    } else {
      if (seen === -1) {
        answer[i].push(-1);
      } else {
        seen++;
        answer[i].push(seen);
      }
    }
  }
}

console.log(answer.map((row) => row.join(" ")).join("\n"));
