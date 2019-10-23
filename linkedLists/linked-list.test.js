let linkedList = require('./linked-list');
let newLinkedList = new linkedList();
let test10LinkedList = new linkedList();

/////////////// TESTS ///////////////////////////

describe('Test Challenge 1', () => {
  test('Can successfully add a node to the end of the linked list', () => {
      newLinkedList.append(4);
    expect(newLinkedList.size).toEqual(1);
  });
});

describe('Test Challenge 2', () => {
  test('Can successfully add multiple nodes to the end of a linked list', () => {
      newLinkedList.append(4);
      newLinkedList.append(5);
      expect(newLinkedList.head.next.next.value).toEqual(5);
  });
});
describe('Test Challenge 3', () => {
    test('Can successfully insert a node before a node located in the middle of a linked list', () => {
        newLinkedList.append(4);
        newLinkedList.append(5);
        newLinkedList.insertBefore(5,6);
        expect(newLinkedList.head.next.next.value).toEqual(6);
    });
  });
  
describe('Test Challenge 4', () => {
    test('Can successfully insert a node before the first node of a linked list', () => {
        newLinkedList.append(4);
        newLinkedList.append(5);
        newLinkedList.insertBefore(4,12);
        expect(newLinkedList.head.value).toEqual(12);
    });
  });
describe('Test Challenge 5', () => {
    test('Can successfully insert after a node in the middle of the linked list', () => {
        newLinkedList.append(4);
        newLinkedList.append(5);
        newLinkedList.insertAfter(5,17);
        expect(newLinkedList.head.next.next.next.next.next.value).toBe(17);
    });
  });
  
describe('Test Challenge 6', () => {
    test('Can successfully insert a node after the last node of the linked list', () => {
        newLinkedList.insertAfter(17,21);
        expect(newLinkedList.head.next.next.next.next.next.next.value).toBe(21);
    });
  });

describe('Test Challenge 7', () => {
  test('Where input is greater than the length of the linked list', () => {
      expect(newLinkedList.valueFromEnd(1000)).toBe('exception')
  });
});

describe('Test Challenge 8', () => {
  test('Where input and the length of the list are the same', () => {
      expect(newLinkedList.valueFromEnd(13)).toBe(12)
  });
});

describe('Test Challenge 9', () => {
  test('Where input is not a positive integer', () => {
    expect(newLinkedList.valueFromEnd(-5)).toBe('exception')
  });
});

describe('Test Challenge 10', () => {
  test('Where the linked list is of a size 1', () => {
      test10LinkedList.append(1);
      expect(test10LinkedList.valueFromEnd(1)).toBe(1)
  });
});

describe('Test Challenge 11', () => {
  test('“Happy Path” where input is not at the end, but somewhere in the middle of the linked list', () => {
    expect(newLinkedList.valueFromEnd(7)).toBe(17)
  });
});
