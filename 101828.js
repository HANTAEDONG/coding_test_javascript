const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(String);

class Stack {
  constructor() {
    this.storage = new Object();
    this.size = 0;
  }
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  top() {
    return this.storage[this.size];
  }
}

function solution(array) {
  const stack = new Stack();
  for (let i = 1; i <= Number(array[0]); i++) {
    if (array[i] === "pop") {
      if (stack.size === 0) {
        console.log("-1");
      } else {
        console.log(stack.top());
        stack.pop();
      }
    } else if (array[i] === "size") {
      console.log(stack.size);
    } else if (array[i] === "empty") {
      console.log(stack.size === 0 ? 1 : 0);
    } else if (array[i] === "top") {
      console.log(stack.size === 0 ? -1 : stack.top());
    } else {
      stack.push(array[i].split(" ")[1]);
    }
  }
}

solution(input);
