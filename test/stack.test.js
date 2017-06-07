const expect = require('chai').expect;
const Stack = require('../src/Stack');

describe('Stack', function () {

  describe('Stack.size', function () {

    it('should have a size operation', function () {
      let stack = new Stack;
      expect(stack.size).to.be.a('function');
    });

    it('should return 0 when given a new stack', function () {
      let stack = new Stack();
      expect(stack.size()).to.equal(0);
    });

    it('should not return 0 after adding to stack', function () {
      let stack = new Stack();
      stack.push('x');
      expect(stack.size()).not.to.equal(0);
    });

    it('should return a number equal to amount of pushes minus pops', function () {
      let stack = new Stack();
      stack.push('x');
      stack.push('y');
      stack.push('z');
      stack.pop();
      stack.pop();
      stack.push('t');
      expect(stack.size()).to.equal(2);
    });

  });

  describe('Stack.push', function () {

    it('should have a push operation', function () {
      let stack = new Stack;
      expect(stack.push).to.be.a('function');
    });

    it('should increase the size', function () {
      let stack = new Stack;
      stack.push('x');
      stack.push('y');
      stack.push('z');
      expect(stack.size()).to.equal(3);
    });

  });

  describe('Stack.pop', function () {

    it('should have a pop operation', function () {
      let stack = new Stack;
      expect(stack.pop).to.be.a('function');
    });

    it('should return a value', function () {
      let stack = new Stack;
      stack.push('x');
      var returnValue = stack.pop();
      expect(returnValue).to.not.equal(undefined);
    });

    it('should return the value last pushed', function () {
      let stack = new Stack;
      stack.push('x');
      stack.push('y');
      stack.push('z');
      var returnValue = stack.pop();
      expect(returnValue).to.equal('z');
    });

  });

});
