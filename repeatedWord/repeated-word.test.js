let repeatedWord = require('./repeated-word');

describe('Checking which word has been repeated', () => {
  test('It should find the first word that is repeated', () => {
    let testString = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(testString)).toEqual('a');
  });
});
