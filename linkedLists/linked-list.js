class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        var node = new Node(value)
        var currentNode;

        if (!this.head) {
            this.head = node
            this.size++;
            return
        } else {
            currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            this.size++;
        }
    }

    insertBefore(value, newValue) {
        var node = new Node(newValue)
        var currentNode = this.head;
        var previousNode = this.head;

        if (currentNode.value === value) {
            node.next = currentNode;
            this.head = node;
            return;
        }

        currentNode = currentNode.next;

        while (currentNode) {
            if (currentNode.value === value) {
                previousNode.next = node;
                node.next = currentNode;
                break;
            }
            previousNode = previousNode.next;
            currentNode = currentNode.next;
        }
    }

    insertAfter(value, newValue) {
        var node = new Node(newValue)
        let currentNode = this.head;

        if (currentNode.value === value) {
            node.next = currentNode;
            this.head = node;
            return;
        }

        currentNode = currentNode.next;

        while (currentNode) {
            if (currentNode.value === value) {
                node.next = currentNode.next;
                currentNode.next = node;
                break;
            }
            currentNode = currentNode.next;
        }
    }

    valueFromEnd(value) {
        let currentNode = this.head;
        let counter = 0;

        while (currentNode !== null) {
            counter++
            currentNode = currentNode.next;
        }

        if (counter <= value || value < 0) {
            return 'exception'
        }

        currentNode = this.head;
        let targetCounter = counter - value;

        for (let i = 1; i < targetCounter; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value
    }

    mergeLists(linkedlist2) {
        let current = this.head;
        let secondCurrent = linkedlist2.head;

        while (secondCurrent !== null) {
            let helper1 = current.next;
            let helper2 = secondCurrent.next;
            current.next = secondCurrent; //first link
            secondCurrent.next = helper1;
            current = secondCurrent.next;
            secondCurrent = helper2
        }
        // console.log(JSON.stringify(linkedlist));
        return linkedlist;
    }
}




const linkedlist = new LinkedList();
const linkedlist2 = new LinkedList();

linkedlist.head = new Node(2);
linkedlist.head.next = new Node(3);
linkedlist.head.next.next = new Node(4);
linkedlist.head.next.next.next = new Node(5);

linkedlist2.head = new Node(6);
linkedlist2.head.next = new Node(7);
linkedlist2.head.next.next = new Node(8);
linkedlist2.head.next.next.next = new Node(9);

linkedlist.mergeLists(linkedlist2);


// linkedlist.append(4);
// console.log('Appending a 4th Node',JSON.stringify(linkedlist));
// linkedlist.append(5);
// console.log('Appending a 5th Node',JSON.stringify(linkedlist));
// linkedlist.insertBefore(3,6);
// console.log('Inserting Before 3, with a value of 6',JSON.stringify(linkedlist));
// linkedlist.insertAfter(6,4);
// console.log('Inswerting After 6, with a value of 4',JSON.stringify(linkedlist));

linkedlist.valueFromEnd();


module.exports = {
    linkedList: LinkedList,
    node: Node,
}