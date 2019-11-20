'use strict';
const mergeSort = require('./mergeSort.js');

describe('Can merge sort various arrays with ease', () => {
    it('Can sort an empty array', () => {
        const testingArray = [];
        expect(mergeSort(testingArray)).toEqual([]);
    })
    it('Can sort an unsorted array', () => {
        const testArray = [3,91,2,1,14,9,6,20,11]
        expect(mergeSort(testArray)).toEqual([1,2,3,6,9,11,14,20,91]);
    })
})
