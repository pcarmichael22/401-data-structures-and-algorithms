const inputArr = [1,2,3,4,5,6,7];
const outputArr = [];

function reverse(array){
  while(array.length){
    outputArr.push(array.pop());
  }
    
}
reverse(inputArr);
console.log(outputArr);
