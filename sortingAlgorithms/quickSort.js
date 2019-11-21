// figured out with much help from various online guides. Used the pseudo code and those sources to come up with this.

let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function quickSort(array) {
  if(array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  // this line from medium https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39
  return quickSort(lesser).concat(pivot, quickSort(greater));
}

console.log(quickSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  let pivot = partition(array, left, right); // you can play with both partition

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if(right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}

function partition(array, left, right) {
  let pivot = Math.floor((left + right) / 2 );

  while(left <= right) {
    while(array[left] < array[pivot]) {
      left++;
    }
    while(array[right] > array[pivot]) {
      right--;
    }
    if(left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]