class Stack {
    constructor() {
        this.storage = [];
    }

    push(value) {
        this.storage.push(value);
    }

    pop() {
        return this.storage.pop();
    }

    peek() {

    }
}


class PseudoQueue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value){
        this.stack1.push(value);
    }
    dequeue(){
        if (this.stack2.storage.length === 0) {
            if (this.stack1.storage.length === 0) { return 'Cannot dequeue because queue is empty'; }
            while (this.stack1.storage.length > 0) {
              let pointer = this.stack1.pop();
              this.stack2.push(pointer);
            }
          }
          return this.stack2.pop();
    }
}

let sudoQueue = new PseudoQueue()

module.exports = {
    pseudo: PseudoQueue,
    stack: Stack
}