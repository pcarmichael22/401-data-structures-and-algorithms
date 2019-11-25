'use strict';

const BinaryTree = require('./binaryTree');

let newTree = new BinaryTree();

describe('Can change the value of an Binary node', () => {
  test('Can succesfully change the value of a binary tree node', () => {
    newTree.add(150);
    newTree.add(14);
    newTree.add(33);
    newTree.add(30);
    newTree.add(15);
    newTree.add(20);
    newTree.add(2);
    newTree.add(3);

    newTree.BuzzFizz(newTree.root);

    expect(newTree.root.value).toEqual(150);
  });
});

describe('Can leave the value when not divisible by 3 or 5', () => {
  test('Can succesfully leave the value of a binary tree node', () => {
    newTree.add(150);
    newTree.add(14);
    newTree.add(33);
    newTree.add(30);
    newTree.add(15);
    newTree.add(20);
    newTree.add(2);
    newTree.add(3);

    newTree.BuzzFizz(newTree.root);

    expect(newTree.root.left.left.value).toEqual(2);
  });
});
