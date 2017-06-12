const Stack = require('./Stack');

class Queue {
  constructor() {
    this._StackOne = new Stack();
    this._StackTwo = new Stack();
  }

  size() {
    this._StackOne.size();
  }

  enqueue(item) {
    this._StackOne.push(item);
  }

  dequeue() {
    // 1. Pop all from stack 1 to stack 2
    let s1 = this._StackOne;
    let s2 = this._StackTwo;
    while (s1.size() > 0) {
      s2.push(s1.pop());
    }

    // 2. Capture top item on stack 2
    let item = s2.pop();

    // 3. Pop all from stack 2 to stack 1
    while (s2.size() > 0) {
      s1.push(s2.pop());
    }
    return item;
  }
}

module.exports = Queue;
