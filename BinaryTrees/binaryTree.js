'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }
}

/**
 *  A Binary tree has a root, which is the start, similar to a head in a linked list
 */

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


  BuzzFizz(tree){
    if (tree.root == null) {
      return;
    }
    traverse(tree.root);
  }
}

module.exports = BinarySearchTree;

// Helper function for handling traversal
// recursive function

function traverse(node) {
  if (node === null) {
    return;
  }
  if(node.value % 3 === 0 && node.value %5 === 0){
    node.value = 'fizzbuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'buzz';
  }

  traverse(node.left);
  traverse(node.right);
}