function arraySorting(arr) {
    let sortDone = false;
    while (!sortDone) {
        sortDone = true;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                sortDone = false;
                let tempSpot = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tempSpot;
                console.log(arr, 'Index:', i);
            }
        }
    }
    return arr;
}


let numbers = [12, 10, 15, 11, 14, 13, 16];
// arraySorting(numbers)

function insertionSort(arr) {

    for (i = 1; i < arr.length; i++) {

        let j = i - 1;
        let temp = arr[i];

        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j]
            j = j - 1;
            arr[j + 1] = temp
        }
    }
return(arr)
}

insertionSort(numbers)

module.exports = insertionSort;