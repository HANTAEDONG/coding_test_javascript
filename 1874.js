const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const sequence = input.slice(1);

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    if (this.size === 0) return null;
    const removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  top() {
    return this.storage[this.size];
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
const result = [];

let current = 1;
let possible = true;

for (let i = 0; i < n; i++) {
  const target = sequence[i];
  while (current <= target) {
    stack.push(current++);
    result.push("+");
  }
  if (stack.top() !== target) {
    possible = false;
    break;
  }
  stack.pop();
  result.push("-");
}

if (possible) {
  console.log(result.join("\n"));
} else {
  console.log("NO");
}
