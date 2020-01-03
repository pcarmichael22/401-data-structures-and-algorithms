const HashTable = require('./hashtable');

let hashTest = new HashTable();

hashTest.set('user1', 'test1');
hashTest.set('user2', 'test2');
hashTest.set('user3', 'test3');
hashTest.set('user4', 'test4');
hashTest.set('user5', 'test5');
hashTest.set('user6', 'test6');

describe('Hash Table Tests', () => {
  test('Can take in a key and return the value from the table', () => {
    expect(hashTest.get('user2')).toEqual('test2');
  });
  test('Can take in a key and true if that bucket exists', () => {
    expect(hashTest.contains('user2')).toEqual(true);
  });
  test('Can take in an arbitrary key and returns an index in the collection', () => {
    expect(hashTest.hash('user7')).toEqual(5);
  });
});
