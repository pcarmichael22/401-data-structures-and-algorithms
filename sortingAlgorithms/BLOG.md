# Problem Domain
    Create a function that takes in an array and sorts it from least to greatest. Return the array.
# Inputs and Outputs
    - Inputs : [8,4,23,42,16,15]
    - Outputs : Reverse-sorted: [20,18,12,8,5,-2]
                Few uniques: [5,12,7,5,5,7]
                Nearly-sorted: [2,3,5,7,13,11]
# Efficiency
    Time: O(2^n)
    Space: O(1)
# Visual
    ~~
# Algorithm
    1. create a function called InsertionSort that takes in an array
    2. enter a for loop with i starting at 1, running to array.length
    3. set a variable 'J' to the value of i - 1
    4. set a variable 'Temp' to array at i
    5. enter a while loop that is based on the value of 'J' being greater than or equal to 0, and the value of 'Temp' being less than array at position 'J'
    6. inside that while loop, assign the value of Array at position J+1 to Array at pisition J
    7. assign the value of j to j - 1
    8. assign the value of array at position J + 1 to the temp variable
    9. When both loops are exited, return the array.

# Pseudo Code
```js
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
