var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

// Define a new Tree constructor prototype. 

var Tree = function(value) {
    this.value = value;
    this.children = [];
  };
  
  // Add a new method to the Tree contructor prototype
  
  Tree.prototype.Traversal = function(filter) {
    
    // Declare our queue array
    // Declare our results array
    // Declare out nextNode variable
    
    var queue = [];
    var results = [];
    var nextNode;
    
    // The first thing we want to do is push the root value 
    // into the queue. We are going to add the entire node, 
    // as well as declare the depth key set to value 0. By 
    // setting a depth property to this node, we will be 
    // able to keep track of where each node is located. 
    
    queue.push(
      { "depth": 0,
        "node" : this
      });
  
    // Let's start the while loop! We want our function to 
    // be able to traverse a tree of any size. As long as 
    // there is still a node to process in the queue, our 
    // while loop will keep looping. 
    
    while (queue.length > 0) {
  
      // Let's declare nextNode as the first node in the 
      // queue. We use the shift method to remove it from 
      // the queue since we will be performing the callback 
      // filter on it.
      
      nextNode = queue.shift();
   
      // Now let’s start iterating through the nodes. We are 
      // starting at i = 0, iterating until we hit 
      // i < nextNode.node.children.length. We want to take 
      // the length property of the children array inside the 
      // nextNode. While we iterate through each of those children, 
      // we are going to push it into the queue. Each node pushed 
      // into the queue will have their depth value declared. By 
      // setting the depth property equal to nextNode.depth + 1, 
      // we are saying add one more level to the level of it’s parent 
      // node. We are going to repeat these steps until there are no 
      // more nodes to iterate through. 
   
      if (nextNode.node.children.length > 0) {
  
        for (var i = 0; i < nextNode.node.children.length; i ++) {
          queue.push({ "depth": nextNode.depth+1,
            "node" : nextNode.node.children[i]
          });
        }
      }
      
      // Before we update to the next nextNode, we are going to 
      // perform the callback function on it! If it passes as true, 
      // we are going to push that node into the results array. 
  
      if (filter(nextNode.node.value, nextNode.depth)) {
        results.push(nextNode.node.value);
      }
    }
  
    // Finally, we return the complete results array! 
    return results;
  };