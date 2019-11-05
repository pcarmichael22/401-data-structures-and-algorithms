'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = right;
    this.right = left;
  }
}

// Created with Sarah from lecture yesterday with Amanda.

class BinarySearchTree extends BinaryTree {

  add(value){
    if(this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._addForNode(value, this.root);
  }

  _addForNode(value, parentNode) {
  
    if(value > parentNode.value){
      if(parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.right);
        return;
      }
    }
    if(value <= parentNode.value){
      if(parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.left);
      }
    }
  }

  // METHOD FOR CODE CHALLENGE 16


  BuzzFizz(current){
    if (current == null) {
      return;
    }
    if (current.value %3 === 0 && current.value %5 === 0) {
      current.value = 'FizzBuzz';
    } else if (current.value %3 === 0) {
      current.value = 'Fizz';
    } else if (current.value %5 === 0) {
      current.value = 'Buzz';
    }
    
    this.BuzzFizz(current.right);
    this.BuzzFizz(current.left);
  }
}

module.exports = BinarySearchTree;
