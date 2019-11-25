repeatedWord = string => {
  let arr = string.split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(('Target Word:', arr[i]));
        return arr[i];
      }
    }
  }
  console.log('No repeats found');
  return 'No repeats found';
};

module.exports = repeatedWord;
