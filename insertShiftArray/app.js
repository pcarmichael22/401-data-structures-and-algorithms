let testArr1 = [2,4,6,8];
let testArr2 = [4,8,15,23,42];

function insertShiftArray (input, value) {
  //create empty array for storing top half of values
  let counter = 0;
  let topHalfArr = [];
  //Figure out the middle point of the array
  let midPoint = Math.ceil((input.length)/2);
  //Iterate over all values including and above midpoint, push to empty array
  for(let i = midPoint; i < input.length; i++){
    topHalfArr[counter] = (input[i]);
    counter++;
  }
  //Set the middle spot to the input value
  input[midPoint] = value;
  //Set the new array values to the topHalfArray, by iterating over the topHalfArr
  for(let j = 0; j < topHalfArr.length; j++){
    input[midPoint+1+j] = topHalfArr[j];
  }

  console.log(input);
}

insertShiftArray(testArr1, 5);
insertShiftArray(testArr2, 16);

