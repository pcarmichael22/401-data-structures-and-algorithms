'use strict'

function mergeSort(array) {
    let arr = array.length
    if (arr > 1) {
        let halfwayThrough = Math.floor(arr / 2)
        let leftSide = array.slice(0, halfwayThrough);
        let rightSide = array.slice(halfwayThrough)
        mergeSort(leftSide)
        mergeSort(rightSide)
        return merge(leftSide, rightSide, array)

    }
    else {
        return [];
    }
}

function merge(leftSide, rightSide, array){
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftSide.length && j < rightSide.length){
        if (leftSide[i] <= rightSide[j]){
            array[k] = leftSide[i]
            i = i+1
        } else {
            array[k] = rightSide[j]
            j = j+1
        }
        k = k+1
    }
    if(i === leftSide.length){
        while(j < rightSide.length){
          array[k] = rightSide[j];
          k = k+1;
          j = j+1;
        }
      } else if(j === rightSide.length) {
        while(i < leftSide.length){
          array[k] = leftSide[i];
          k = k+1;
          i = i+1;
        } 
      }
    //   console.log(array)
      return array;
}

let testArray = [6,3,1,9,4,11,2]
console.log(mergeSort(testArray))

module.exports = mergeSort;