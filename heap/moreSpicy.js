class MinHeap {
  constructor() {
    this.heap = [null];
  }
  Push(item) {
    let cur = this.heap.length;
    while (cur > 1) {
      let parent = Math.floor(cur / 2);
      if (item < this.heap[parent]) {
        this.heap[cur] = this.heap[parent];
        cur = parent;
      } else break;
    }
    this.heap[cur] = item;
  }
  remove() {
    const removeItem = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.pop();
      let cur = 1;
      let leftChild = cur * 2;
      let rightChild = cur * 2 + 1;
      while (this.heap[leftChild]) {
        let CompareChild = leftChild;
        if (this.heap[rightChild]) {
          if (this.heap[leftChild] > this.heap[rightChild]) {
            CompareChild = rightChild;
          }
        }
        if (this.heap[CompareChild] < this.heap[cur]) {
          [this.heap[CompareChild], this.heap[cur]] = [
            this.heap[cur],
            this.heap[CompareChild],
          ];
          cur = CompareChild;
        } else break;
        leftChild = cur * 2;
        rightChild = cur * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return 0;
    }
    return removeItem;
  }
  getSize() {
    return this.heap.length - 1;
  }
}

function solution(scoville, K) {
  var answer = 0;
  return answer;
}
