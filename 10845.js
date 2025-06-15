const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const queue = [];

for (let i = 1; i <= Number(input[0]); i++) {
  const command = input[i];

  if (command === "front") {
    console.log(queue.length ? queue[0] : -1);
  } else if (command === "back") {
    console.log(queue.length ? queue[queue.length - 1] : -1);
  } else if (command === "empty") {
    console.log(queue.length === 0 ? 1 : 0);
  } else if (command === "pop") {
    console.log(queue.length ? queue.shift() : -1);
  } else if (command === "size") {
    console.log(queue.length);
  } else {
    const [, value] = command.split(" ");
    queue.push(value);
  }
}
