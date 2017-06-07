const expect = require('chai').expect;
const Queue = require('../src/Queue');

describe('Queue', function () {

  describe('Queue.size', function () {

    it('should have a size operation', function () {
      let queue = new Queue;
      expect(queue.size).to.be.a('function');
    });

    it('should return 0 when given a new queue', function () {
      let queue = new Queue();
      expect(queue.size()).to.equal(0);
    });

    it('should not return 0 after adding to queue', function () {
      let queue = new Queue();
      queue.enqueue('x');
      expect(queue.size()).not.to.equal(0);
    });

    it('should return a number equal to amount of enqueues minus dequeues', function () {
      let queue = new Queue();
      queue.enqueue('x');
      queue.enqueue('y');
      queue.enqueue('z');
      queue.dequeue();
      queue.dequeue();
      queue.enqueue('t');
      expect(queue.size()).to.equal(2);
    });

  });

  describe('Queue.enqueue', function () {

    it('should have a enqueue operation', function () {
      let queue = new Queue;
      expect(queue.enqueue).to.be.a('function');
    });

    it('should increase the size', function () {
      let queue = new Queue;
      queue.enqueue('x');
      queue.enqueue('y');
      queue.enqueue('z');
      expect(queue.size()).to.equal(3);
    });

  });

  describe('Queue.dequeue', function () {

    it('should have a dequeue operation', function () {
      let queue = new Queue;
      expect(queue.dequeue).to.be.a('function');
    });

    it('should return a value', function () {
      let queue = new Queue;
      queue.enqueue('x');
      var returnValue = queue.dequeue();
      expect(returnValue).to.not.equal(undefined);
    });

    it('should return the value first enqueued', function () {
      let queue = new Queue;
      queue.enqueue('x');
      queue.enqueue('y');
      queue.enqueue('z');
      var returnValue = queue.dequeue();
      expect(returnValue).to.equal('x');
    });

  });

});
