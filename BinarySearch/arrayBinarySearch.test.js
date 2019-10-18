let binarySearch = require('./arrayBinarySearch');

let test1 = [4,8,15,16,23,42];
let test2 = [11,22,33,44,55,66,77];
let searchNum1 = 15;
let searchNum2 = 90;

/////////////// TESTS ///////////////////////////

describe('Test Challenge 1', () => {
  test('It should return the value of the index when a match is found', () => {
    expect(binarySearch(test1, searchNum1)).toStrictEqual(2);
  });
});

describe('Test Challenge 2', () => {
  test('It should return -1 when no match is found', () => {
    expect(binarySearch(test2, searchNum2)).toStrictEqual(-1);
  });
});


