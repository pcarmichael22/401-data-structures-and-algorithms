let Queue = require('./queue_with_stacks').pseudo;
let stack = require('./queue_with_stacks').stack;
let newPseudo = new Queue();

describe('Test Challenge 1', () => {
    test('Can successfully enqueue', () => {
        newPseudo.enqueue('a');
        newPseudo.enqueue('b');
        newPseudo.enqueue('c');
        expect(newPseudo.stack1.storage[0]).toEqual('a');
    })
})

describe('Test Challenge 2', () => {
    test('Can succesfully dequeue', () => {
        newPseudo.dequeue()
        expect(newPseudo.stack2.storage[1]).toEqual('b')
    })
})

