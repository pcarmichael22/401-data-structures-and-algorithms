class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
class BinaryTree {
    constructor() {
      this.root = null;
    }
  }


// function _rMax(node) {
//     if (node) {
//     if(node.value < max){
//         max = node.value;
//     }
//      _rMax(node.left);
//      _rMax(node.right);
//    }
//    console.log(max);
// }

function _rMax(current){
    if (current === null){
      return null;
    }
    return Math.max(
        _rMax(current.right),
        _rMax(current.left),
      current.value
    )
  }
 

const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(3);
tree.root.right =  new Node(14);

_rMax(tree.root)