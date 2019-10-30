let isBracketValid = require('./multi-bracket-validation');


/////////////// TESTS ///////////////////////////

describe('Test Challenge 1', () => {
    test('It should return true when passed in a string of {{[abc]}}.', () => {
      expect(isBracketValid('{{[abc]}}')).toBe(true);
    });
  });
  
  describe('Test Challenge 2', () => {
    test('It should return false when passed in a string of {}{}[{].', () => {
        expect(isBracketValid('{}{}[{]')).toBe(false);
    });
  });

  describe('Test Challenge 3', () => {
    test('It should return true when passed in a string of [[{}]].', () => {
        expect(isBracketValid('[[{}]]')).toBe(true);
    });
  });