class Queue {
  constructor() {
    this._storage = [];
  }

  size() {
    return this._storage.length;
  }

  enqueue(item) {
    this._storage.push(item);
  }

  dequeue() {
    return this._storage.shift();
  }
}

module.exports = Queue;
