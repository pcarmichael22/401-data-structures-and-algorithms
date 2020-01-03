class Node {
  constructor(value) {
    (this.value = value), (this.children = []);
  }

  add(value) {
    this.children.push(new Node(value));
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  breadthFirst(value) {
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();

      if (node.value === value) {
        return true;
      } else {
        queue.push(...node.children);
      }
    }
    console.log(queue);
    return false;
  }
}

let newTree = new Node();

newTree.add(2);
newTree.add(7);
newTree.add(5);
newTree.add(2);
newTree.add(6);
newTree.add(9);
newTree.add(5);
newTree.add(11);
newTree.add(4);

let testTree = new Tree();

testTree.breadthFirst(newTree);
