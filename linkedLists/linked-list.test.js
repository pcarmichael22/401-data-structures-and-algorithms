let linkedList = require('./linked-list');
let newLinkedList = new linkedList();

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
