const input = Number(
  require("fs").readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt"
  )
);

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

  enqueue(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return value;
  }

  size() {
    return this.length;
  }

  front() {
    return this.head?.value ?? null;
  }
}

const queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.enqueue(i);
}

while (queue.size() > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.front());
