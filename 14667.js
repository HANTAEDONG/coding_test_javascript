const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(`\n`);

const observeNum = Number(input.shift());
const array = {};
let answer = 0;

for (let i = 0; i < observeNum; i++) {
  const [cowNum, direction] = input[i].split(" ").map(Number);
  if (array.hasOwnProperty(cowNum) && array[cowNum] != direction) {
    answer++;
  }
  array[cowNum] = direction;
}

console.log(answer);
