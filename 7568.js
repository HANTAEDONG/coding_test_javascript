const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(`\n`);

const N = parseInt(input.shift());
const people = [];
const ranks = [];
for (let i = 0; i < N; i++) {
  people.push(input[i].split(" ").map(Number));
}
for (let i = 0; i < N; i++) {
  let rank = 1;
  const [currentWeight, currentHeight] = people[i];
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const [otherWeight, otherHeight] = people[j];
    if (otherWeight > currentWeight && otherHeight > currentHeight) {
      rank++;
    }
  }
  ranks.push(rank);
}

console.log(ranks.join(" "));
