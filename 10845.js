const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(String);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    this.length++;
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }
  pop() {
    if (!this.head) {
      console.log(-1);
      return;
    }
    const value = this.head.value;
    console.log(value);
    this.head = this.head.next;
    this.length--;
    if (!this.head) this.tail = null;
    return value;
  }
  front() {
    console.log(this.head ? this.head.value : -1);
  }
  back() {
    console.log(this.tail ? this.tail.value : -1);
  }
  empty() {
    console.log(this.head === null ? 1 : 0);
  }
  size() {
    console.log(this.length);
  }
}

const queue = new Queue();

for (let i = 1; i <= input[0]; i++) {
  if (input[i] === "front") {
    queue.front();
  } else if (input[i] === "back") {
    queue.back();
  } else if (input[i] === "empty") {
    queue.empty();
  } else if (input[i] === "pop") {
    queue.pop();
  } else if (input[i] === "size") {
    queue.size();
  } else {
    queue.push(input[i].split(" ")[1]);
  }
}
