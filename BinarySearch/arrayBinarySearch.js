function binarySearch(array, value) {
  let finalAnswer = -1;
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      finalAnswer = i;
    } 
  }
  if(finalAnswer >= 0){
    return finalAnswer;
  } else {
    return -1;
  }
}

module.exports = binarySearch;
