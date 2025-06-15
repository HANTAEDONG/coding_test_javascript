const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const map = input.map((v) => v.split("").map(Number));
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let answer = [];

const bfs = (start) => {
  const queue = [start];
  let cnt = 0;
  while (queue.length) {
    const [curY, curX] = queue.shift();
    cnt++;
    for (let i = 0; i < 4; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];
      if (ny >= 0 && ny < N && nx >= 0 && nx < N && map[ny][nx]) {
        map[ny][nx] = 0;
        queue.push([ny, nx]);
      }
    }
  }
  return cnt;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j]) {
      map[i][j] = 0;
      answer.push(bfs([i, j]));
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
