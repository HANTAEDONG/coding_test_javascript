const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
let line = 0;
const testCases = [];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number);
  const board = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );
  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    board[y][x] = 1;
  }
  testCases.push({ M, N, board });
}

const directions = [
  [-1, 0], // 좌
  [1, 0], // 우
  [0, -1], // 상
  [0, 1], // 하
];

const bfs = (startY, startX, board, N, M) => {
  const queue = [[startY, startX]];
  board[startY][startX] = 0; // 방문 처리

  while (queue.length) {
    const [y, x] = queue.shift();
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && board[ny][nx] === 1) {
        board[ny][nx] = 0;
        queue.push([ny, nx]);
      }
    }
  }
};

const answers = [];

for (let t = 0; t < T; t++) {
  const { M, N, board } = testCases[t];
  let count = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (board[y][x] === 1) {
        bfs(y, x, board, N, M);
        count++;
      }
    }
  }
  answers.push(count);
}

console.log(answers.join("\n"));
