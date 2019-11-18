let arraySort = require('./arraySort')

describe('Sorting Arrays Test', () => {
    test('It should sort an array from least to greatest and return the array', () => {
        let array = [36,21,5,1,95,34,17];
        arraySort(array);
        expect(array).toStrictEqual([1,5,17,21,34,36,95]);
    });
});